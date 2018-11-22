import React from 'react'
import { View, Text } from 'react-native'

import { Header } from '../../components'
import styles from './styles'

class Home extends React.Component {
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