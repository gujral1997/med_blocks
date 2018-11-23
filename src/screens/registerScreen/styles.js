import {StyleSheet} from 'react-native'
 
export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    subView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%'
    },
    input: {
        width: '100%',
        padding: 7,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 4,
        backgroundColor: 'white',
        opacity: 0.5
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        backgroundColor: '#4bb543',
        width: '100%',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
    link: {
        marginTop: 20,
        flexDirection: 'row'
    },
    linkText: {
        color: 'indigo',
        paddingLeft: 5
    }
})