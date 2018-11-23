import {StyleSheet} from 'react-native'
import { Fonts, Metrics } from '../../themes';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        color: '#555',
        fontSize: 26,
        padding: 15
    },
    body: {
        flex: 1,
        padding: 10,
        paddingTop: 17
    },
    border: {
        borderBottomColor: 'rgba(200, 200, 200, 0.8)',
        borderBottomWidth: 0.5
    },
    borderless: {
        marginBottom: -13
    },
    iconView: {
        alignItems: 'center',
        width:55
    },
    colorIcon: {
        fontSize: 17,
        padding: 15,
        paddingTop: 20
    }
})