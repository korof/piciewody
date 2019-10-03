import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    render(): JSX.Element {
        return (
            <View style={styles.mainContainer}>
                <Text>Hello!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
