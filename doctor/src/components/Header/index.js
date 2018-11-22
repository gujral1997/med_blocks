import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Icon} from 'native-base'
import {Actions} from 'react-native-router-flux'

import styles from './styles'

export default class Header extends React.Component {

    state= {}

    render() {
        return(
            <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton} onPress={()=>Actions.drawerOpen()}>
                <Icon name='ios-menu' style={styles.icon}/>
            </TouchableOpacity>
            <View style={styles.heading}>
                <Text style={styles.headingText}>{this.props.heading}</Text>
            </View>
            <TouchableOpacity style={styles.dropDown} onPress={this.props.onPress}>
                <Text style={styles.text}>{this.props.buttonText}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}