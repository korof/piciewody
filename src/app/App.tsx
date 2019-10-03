import { commonStyles, fontStyles } from '@ui';
import * as React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default class App extends React.Component {
    _renderHeader = (): JSX.Element => (
        <Text style={styles.headerText}>
            Each of us needs
            <Text style={[fontStyles.bold, fontStyles.highlighted]}> 2.5 liters</Text> of water a
            day!
        </Text>
    );

    _renderProgress = (): JSX.Element => <Text>asd</Text>;

    render(): JSX.Element {
        return (
            <SafeAreaView style={[styles.mainContainer, commonStyles.padding]}>
                {this._renderHeader()}
                {this._renderProgress()}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '300',
        height: 100,
        justifyContent: 'center',
        textAlign: 'center',
    },
    mainContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
