import { GLOBAL_COLORS } from '@ui/const';
import { Dimensions, StyleSheet } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const fontStyles = StyleSheet.create({
    bold: {
        fontWeight: 'bold',
    },
    highlighted: {
        color: GLOBAL_COLORS.dodgerBlue,
    },
});

export const commonStyles = StyleSheet.create({
    padding: {
        paddingLeft: 25,
        paddingRight: 25,
    },
});
