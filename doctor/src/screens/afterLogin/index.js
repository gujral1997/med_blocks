import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

class AfterLogin extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>After Login</Text>
            </View>
        )
    }
}

export default AfterLogin