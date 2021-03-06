import AsyncStorage from '@react-native-community/async-storage';
import { ActionDispatcher, AppState } from '@store/models';
import { commonStyles, fontStyles } from '@ui';
import { ActivityButton } from '@ui/components/ActivityButton';
import { ProgressBar } from '@ui/components/ProgressBar';
import { GLOBAL_COLORS } from '@ui/const';
import * as React from 'react';
import { Alert, Clipboard, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ClearProgress, DrinkWater } from '../actions';
import { getDrunkWater } from '../selectors';

interface Props {
    clear: ActionDispatcher<ClearProgress>;
    drink: ActionDispatcher<DrinkWater>;
    drunkWater: number;
}

class HomeView extends React.Component<Props> {
    copyToClipboard = async () => {
        AsyncStorage.getItem('token').then((token: string | null) => {
            // @ts-ignore
            Clipboard.setString(token);
            Alert.alert('Copied to Clipboard!');
        });
    };

    _renderHeader = (): JSX.Element => (
        <Text style={[styles.headerText, commonStyles.space_2em]}>
            Each of us needs
            <Text style={fontStyles.highlighted}> 2.5 liters </Text>
            of water a day!
        </Text>
    );

    _renderCopyToClipboardButton = () => (
        <View style={commonStyles.space_2em}>
            <Text onPress={this.copyToClipboard} style={[fontStyles.highlighted, fontStyles.align]}>
                Copy FCM token to clipboard
            </Text>
        </View>
    );

    _renderUserProgress = (): JSX.Element => (
        <View style={commonStyles.space_3em}>
            <Text style={[fontStyles.regular, fontStyles.align]}>
                Your progress today: {this.props.drunkWater} / 2500 ml
            </Text>
        </View>
    );

    _renderProgressBar = (): JSX.Element => (
        <View style={[commonStyles.padding, commonStyles.space_3em]}>
            <ProgressBar current={this.props.drunkWater} max={2500} />
        </View>
    );

    _renderDrinkButton = (): JSX.Element => (
        <View style={commonStyles.space_2em}>
            <ActivityButton
                color={GLOBAL_COLORS.dodgerBlue}
                onPress={this.props.drink}
                title={'Drink a cup!'}
            />
        </View>
    );

    _renderClearButton = (): JSX.Element => (
        <View style={styles.clearButtonContainer}>
            <ActivityButton
                color={GLOBAL_COLORS.violetRed}
                onPress={this.props.clear}
                title={'Clear progress'}
            />
        </View>
    );

    render(): JSX.Element {
        return (
            <SafeAreaView style={[styles.mainContainer, commonStyles.padding]}>
                {this._renderCopyToClipboardButton()}
                {this._renderHeader()}
                {this._renderUserProgress()}
                {this._renderProgressBar()}
                {this._renderDrinkButton()}
                {this._renderClearButton()}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    clearButtonContainer: {
        alignSelf: 'center',
        bottom: 100,
        position: 'absolute',
    },
    headerText: {
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '300',
        justifyContent: 'center',
        textAlign: 'center',
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});

const mapStateToProps = (state: AppState) => ({
    drunkWater: getDrunkWater(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clear: () => dispatch(new ClearProgress()),
    drink: () => dispatch(new DrinkWater()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeView);
