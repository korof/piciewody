import { progressUtil } from '@shared/utils';
import { GLOBAL_COLORS } from '@ui/const';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    current: number;
    max: number;
}

export const ProgressBar = (props: Props) => {
    return (
        <View style={styles.progressContainer}>
            <Text>{progressUtil(props.current, props.max)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    progressBar: {},
    progressContainer: {
        borderColor: GLOBAL_COLORS.silverChalice,
        borderWidth: 1,
        height: 60,
        width: '100%',
    },
});
