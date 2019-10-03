import { GLOBAL_COLORS } from '@ui/const';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ProgressBar = () => {
    return (
        <View style={styles.progressContainer}>
            <Text>ProgressBar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    progressContainer: {
        borderColor: GLOBAL_COLORS.silverChalice,
        borderWidth: 1,
        height: 60,
        width: '100%',
    },
});
