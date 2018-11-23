/**
 * Created by Ansh on 2018-10-26.
 */

import React from 'react'
import { View } from 'react-native'
import { Icon } from 'native-base'
import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons,
    Octicons,
    Zocial
} from '@expo/vector-icons'
import styles from './styles'

export default class MedicalDescription extends React.Component {
    
    icontType(type, name) {
        switch(type) {
            case 'AntDesign':
                return <AntDesign name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            case 'Entypo':
                return <Entypo name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            case 'EvilIcons':
                return <EvilIcons name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            case 'Feather':
                return <Feather name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            case 'FontAwesome':
                return <FontAwesome name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            case 'Foundation':
                return <Foundation name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            case 'Ionicons':
                return <Ionicons name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            case 'MaterialIcons':
                return <MaterialIcons name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            case 'MaterialCommunityIcons':
                return <MaterialCommunityIcons name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            case 'SimpleLineIcons':
                return <SimpleLineIcons name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            case 'Octicons':
                return <Octicons name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            case 'Zocial':
                return <Zocial name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
            default:
                return <Icon name={name} style={styles.icon} 
                onPress={this.props.rightIcontype?
                    this.props.onPressLeft:
                    this.props.onPressRight}
                    />
        }
    }

    render() {
        return (
            <View style={[styles.container, this.props.border?styles.border:styles.borderless]}>
                <View style={styles.iconView}>
                {this.props.color?<FontAwesome name="circle" style={[styles.colorIcon, {color: this.props.bg?this.props.bg:'black'}]}/>:null}
                {this.props.color?null:this.icontType(this.props.type, this.props.icon)}
                </View>
                <View style={styles.body}>
                    {this.props.children}
                </View>
                {this.props.rightIconType?this.icontType(this.props.rightIcontype, this.props.rightIconName):null}
            </View>
        )
    }
}