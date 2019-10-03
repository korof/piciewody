import { fontStyles } from '@ui/common-styles';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    color: string;
    title: string;
    onPress(): void;
}

export const ActivityButton = (props: Props) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
            <Text style={[styles.title, fontStyles.bold, { color: props.color }]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        width: 260,
    },
    title: {
        fontSize: 22,
    },
});
