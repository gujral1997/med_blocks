/**
 * Created by Ansh on 2018-10-29.
 */

import React from 'react'
import {
    View,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native'
import CryptoJS from 'crypto-js'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { Actions, ActionConst } from 'react-native-router-flux'
import { connect } from 'react-redux'

import {MedicalDescription, ScreenLoader} from '../../components'

class CreateMedblock extends React.Component {
    
    state={
        bgColor: '#0060FF',
    }

    decrypt (message) {
        return CryptoJS.AES.decrypt(message, this.props.passkey).toString(CryptoJS.enc.Utf8)
     }

    render() {

        const { blockData } = this.props

        return (
            <View style={styles.container}>
                <View style={[styles.header, {backgroundColor: this.state.bgColor}]}>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.headerButtonLeft}  onPress={()=>{
                            Actions.home({type: ActionConst.RESET})
                        }} disabled={this.state.disabled}>
                            <Ionicons name='md-close' style={styles.headerIcon}/>
                        </TouchableOpacity>
                        <View style={styles.headerTextView}>
                            <TextInput
                            style={styles.headingText}
                            onChangeText={heading => this.setState({heading})}
                            underlineColorAndroid="transparent"
                            spellCheck
                            placeholder="Enter Heading"
                            placeholderTextColor="white"
                            autoGrow
                            multiline
                            maxHeight={60}
                            editable = {false}
                            defaultValue={this.decrypt(blockData.medicalData[0].heading)}
                            />
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.scrollView}>
                    <MedicalDescription type="MaterialCommunityIcons" icon="account-multiple" border>
                        <TextInput
                            style={styles.noteText}
                            onChangeText={name => this.setState({name})}
                            underlineColorAndroid="transparent"
                            placeholder="Name"
                            placeholderTextColor="#666"
                            editable = {false}
                            defaultValue={this.decrypt(blockData.medicalData[0].name)}
                            />
                    </MedicalDescription>
                    <MedicalDescription type="Ionicons" icon="ios-person" border>
                        <TextInput
                            style={styles.noteText}
                            onChangeText={age => this.setState({age})}
                            underlineColorAndroid="transparent"
                            placeholder="Age"
                            placeholderTextColor="#666"
                            editable = {false}
                            defaultValue={this.decrypt(blockData.medicalData[0].age)}
                            />
                    </MedicalDescription>
                    <MedicalDescription type="MaterialCommunityIcons" icon="gender-male-female" border>
                        <TextInput
                            style={styles.noteText}
                            onChangeText={age => this.setState({age})}
                            underlineColorAndroid="transparent"
                            placeholder="Age"
                            placeholderTextColor="#666"
                            editable = {false}
                            defaultValue={this.decrypt(blockData.medicalData[0].gender)}
                            />
                    </MedicalDescription>
                    <MedicalDescription type="Entypo" icon="text" border>
                        <TextInput
                        style={styles.noteText}
                        onChangeText={data => this.setState({data})}
                        multiline
                        underlineColorAndroid="transparent"
                        spellCheck
                        placeholder="Add description"
                        placeholderTextColor="#666"
                        editable = {false}
                        defaultValue={this.decrypt(blockData.medicalData[0].data)}
                        />
                    </MedicalDescription>
                    <MedicalDescription type="MaterialCommunityIcons" icon="doctor" border>
                        <TextInput
                            style={styles.noteText}
                            onChangeText={doctor => this.setState({doctor})}
                            underlineColorAndroid="transparent"
                            placeholder="Doctor Name"
                            placeholderTextColor="#666"
                            editable = {false}
                            defaultValue={this.decrypt(blockData.medicalData[0].doctor)}
                            />
                    </MedicalDescription>
                    <MedicalDescription type="MaterialCommunityIcons" icon="hospital-building" border>
                        <TextInput
                            style={styles.noteText}
                            onChangeText={hospital => this.setState({hospital})}
                            underlineColorAndroid="transparent"
                            placeholder="Hospital Name"
                            placeholderTextColor="#666"
                            editable = {false}
                            defaultValue={this.decrypt(blockData.medicalData[0].hospital)}
                            />
                    </MedicalDescription>
                    <MedicalDescription type="MaterialIcons" icon="access-time" border>
                        <TextInput
                            style={styles.noteText}
                            onChangeText={hospital => this.setState({hospital})}
                            underlineColorAndroid="transparent"
                            placeholder="Hospital Name"
                            placeholderTextColor="#666"
                            editable = {false}
                            defaultValue={blockData.timestamp}
                            />
                    </MedicalDescription>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    blockData: state.med.blockData,
    passkey: state.user.passkey
});

export default connect(mapStateToProps)(CreateMedblock)