import { commonStyles, fontStyles } from '@ui';
import { ActivityButton } from '@ui/components/ActivityButton';
import { ProgressBar } from '@ui/components/ProgressBar';
import * as React from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    drinkOneCup = () => {
        Alert.alert('Drink!');
    };

    _renderHeader = (): JSX.Element => (
        <Text style={[styles.headerText, commonStyles.space_2em]}>
            Each of us needs
            <Text style={fontStyles.highlighted}> 2.5 liters </Text>
            of water a day!
        </Text>
    );

    _renderUserProgress = (): JSX.Element => (
        <View style={commonStyles.space_2em}>
            <Text style={[fontStyles.regular, fontStyles.align]}>Your progress:</Text>
        </View>
    );

    _renderProgressBar = (): JSX.Element => (
        <View style={[commonStyles.padding, commonStyles.space_3em]}>
            <ProgressBar />
        </View>
    );

    _renderButton = (): JSX.Element => (
        <View style={commonStyles.space_2em}>
            <ActivityButton title={'Drink a cup!'} onPress={this.drinkOneCup} />
        </View>
    );

    render(): JSX.Element {
        return (
            <SafeAreaView style={[styles.mainContainer, commonStyles.padding]}>
                {this._renderHeader()}
                {this._renderUserProgress()}
                {this._renderProgressBar()}
                {this._renderButton()}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
