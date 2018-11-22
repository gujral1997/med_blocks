import { Icon } from 'native-base'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const ErrorBar = props =>
        props.in ?
            <View style={styles.error}>
            <Icon name="alert" style={styles.alertIcon}/>
            <View style={{flex: 18}}>
            <Text style={styles.errorTextHeading}>Unable to log in.</Text>
            <Text style={styles.errorText}>{props.error}</Text>
            </View>
        </View>
            : null

ErrorBar.propTypes = {
    in: PropTypes.bool,
    error: PropTypes.string
}

export default ErrorBar