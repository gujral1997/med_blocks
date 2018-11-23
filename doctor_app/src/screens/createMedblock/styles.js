import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import { Metrics, Fonts } from '../../themes';

const headerButton = {
    marginTop: 1.3*getStatusBarHeight()
}

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    header: {
        height: Metrics.HEIGHT*0.2,
        width: '100%',
        shadowColor: "#333",
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 3
    },
    headerIcons: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    headingText: {
        color: 'white',
        width: '100%',
        fontSize: Fonts.moderateScale(17),
        position: 'absolute',
        bottom: -Metrics.HEIGHT*0.086,
     },
     noteText: {
        fontSize: 15
     },
     headerButtonLeft: {
       ...headerButton,
       padding: 7,
       paddingLeft: 10       
     },
     headerButtonRight: {
        ...headerButton,
        alignItems: 'flex-end',
        padding: 7
     },
     headerIcon: {
         fontSize: Fonts.moderateScale(22),
         color: 'white',
     },
     headerText: {
        fontSize: 14,
        color: 'white',
        fontWeight: '600'
    },
     headerTextView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
     },
     scrollView: {
         backgroundColor: 'white'
     },
     descriptionTextSmall: {
         marginTop: -10,
         fontSize: Fonts.moderateScale(12),
         color: '#666'
        },
    descriptionGray: {
        fontSize: Fonts.moderateScale(15),
        color: '#666'
    },
    multiRow: {
        flexDirection: 'row'
    },
    descriptionTextMd: {
        flex: 1,
        fontSize: Fonts.moderateScale(15),
        paddingBottom: 10
    },
     descriptionTextMdRight: {
        fontSize: Fonts.moderateScale(15),
        paddingRight: 20
     },
     publicSwitch: {
         marginTop: -30
     },
     picker: {
         marginTop: -15,
         marginBottom: -15
     }
})