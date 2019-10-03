import { progressUtil } from '@shared/utils';
import { GLOBAL_COLORS } from '@ui/const';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    current: number;
    max: number;
}

export const ProgressBar = (props: Props) => {
    const _renderValue = (): JSX.Element => (
        <Text style={styles.value}>{progressUtil(props.current, props.max)} %</Text>
    );

    const _renderBar = (): JSX.Element => (
        <View
            style={[
                styles.progressBar,
                { width: `${progressUtil(props.current, props.max, true)}%` },
            ]}
        />
    );

    return (
        <View style={styles.mainContainer}>
            {_renderBar()}
            {_renderValue()}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        borderColor: GLOBAL_COLORS.silverChalice,
        borderWidth: 1,
        height: 60,
        width: '100%',
    },
    progressBar: {
        backgroundColor: GLOBAL_COLORS.dodgerBlue,
        height: '100%',
    },
    value: {
        alignSelf: 'center',
        position: 'absolute',
        textAlign: 'center',
        top: 20,
    },
});
