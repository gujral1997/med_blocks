import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CryptoJS from 'crypto-js'

import { Header } from '../../components'
import styles from './styles'
import { InfiniteAnimation } from '../../animations'
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {

    state = {
        name: this.encrypt('qasdsdasda', '1234561234561234')
    }

    encrypt (message, key) {
        return CryptoJS.AES.encrypt(message, key).toString()
    }

    decrypt (message, key) {
       return CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8)
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                heading = "Home"
                />
                <View style={styles.main}>
                    <TouchableOpacity
                    onPress={()=>Actions.med()}
                    >
                        <InfiniteAnimation
                        source = {'healthtap'}
                        />
                    </TouchableOpacity>
                    <Text>Tap the icon for patient entry</Text>
                </View>
            </View>
        )
    }
}

export default Home