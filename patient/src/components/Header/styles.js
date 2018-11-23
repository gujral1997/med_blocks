import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import { Metrics, Fonts, Color } from '../../themes'
import { center } from '../../themes/globalStyles'

export default StyleSheet.create({
 container: {
    marginTop: getStatusBarHeight(),
    height: Metrics.HEIGHT*0.07,
    width: '100%',
    backgroundColor: "white",
    shadowColor: "#30c1dd",
    shadowRadius: 10,
    shadowOpacity: 0.4,
    elevation: 4,
    flexDirection: 'row',
    position: 'absolute',
    top: 0
},
 iconButton: {
    ...center,
    paddingLeft: 5
 },
 picker: {
    ...center,
    marginTop: Metrics.HEIGHT*-0.008,
    width: '60%'
 },
 icon: {
    color: '#666'
 },
 dropDown: {
    alignItems: 'flex-end',
    padding: 10,
    height: 35,
    alignSelf: 'center',
    backgroundColor: Color.buttonColor
 },
 text: {
     fontSize: Fonts.moderateScale(15),
     color: '#666'
 },
 heading: {
     flex: 1,
     justifyContent: 'center'
 },
 headingText: {
    padding: 7,
    ...center,
    fontSize: 17,
    color: '#666'
 }
})