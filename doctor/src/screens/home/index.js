import React from 'react'
import { View, Text } from 'react-native'
import CryptoJS from 'crypto-js'

import { Header } from '../../components'
import styles from './styles'
import { medApi } from '../../api/userApi';

class Home extends React.Component {

    componentDidMount() {
        // medApi.create()
        // console.log(this.state.name)
        // console.log(this.decrypt(this.state.name, '1234561234561234'))
    }

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
            </View>
        )
    }
}

export default Home