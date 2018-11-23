import { StyleSheet } from "react-native";
import { Fonts, Metrics} from '../../themes'
import { center } from "../../themes/GlobalStyles";

const error = {
    color: '#FF001C',
    fontSize: Fonts.moderateScale(10),
}

export default StyleSheet.create({
    error: {
        ...center,
        width: '70%',
        backgroundColor: '#FEE0DE',
        marginTop: Metrics.HEIGHT*0.01,
        paddingTop: Metrics.HEIGHT*0.01,
        paddingBottom: Metrics.HEIGHT*0.01,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10
        
    },
    errorText: {
        ...error,
    },
    errorTextHeading: {
        ...error,
        fontWeight: '500'
    },
    alertIcon: {
        flex: 1,
        color: '#FF001C',
        fontSize: Fonts.moderateScale(17),
        marginLeft: '2%'
    },
});