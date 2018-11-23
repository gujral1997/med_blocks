import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CryptoJS from 'crypto-js'
import { Actions, ActionConst } from 'react-native-router-flux';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux'

import { Header, ScreenLoader } from '../../components'
import styles from './styles'
import { Color } from '../../themes';
import { medApi } from '../../api/userApi';
import { ScrollView } from 'react-native-gesture-handler';
import store from '../../store/store';
import { getDataById } from '../../reducers/MedblockReducer';

class Home extends React.Component {

    componentDidMount() {
        medApi.get_chain()
    }

    decrypt (message) {
       return CryptoJS.AES.decrypt(message, '1234561234561234').toString(CryptoJS.enc.Utf8)
    }
    

    render() {
        return (
            <View style={styles.container}>
                <Header
                heading = "History"
                buttonText = "Refresh"
                onPress = {()=>Actions.home({type: ActionConst.RESET})}
                />
                {
                    this.props.response?
                    <ScrollView style={styles.main}>
                        {
                            this.props.response.map(
                                (element)=>
                                <Swipeout key={element.index-1} right={[
                                    {
                                      text: 'View',
                                      onPress: async ()=>{
                                          await store.dispatch(getDataById(element))
                                          Actions.med()
                                      },
                                      backgroundColor: Color.green
                                    }
                                  ]}>
                                    {
                                        element.medicalData[0]?
                                        <View style={styles.swipe}>
                                            <Text style={styles.textNumber}>{element.index-1}</Text>
                                            <Text style={styles.textTitle}>{this.decrypt(element.medicalData[0].heading)}</Text>
                                            <Text style={styles.textDate}>{element.timestamp}</Text>
                                        </View>:
                                    null
                                    }
                                </Swipeout>
                            )
                        }
                    </ScrollView>:
                    <ScreenLoader show={true} size={90} color="blue" />
                }
            </View>
        )
    }
}

const mapStateTopProps =state=> ({
    response: state.med.response,
    passkey: state.user.passkey
})

export default connect(mapStateTopProps)(Home)