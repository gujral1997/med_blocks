/**
 * Created by Ansh on 2018-10-29.
 */

import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    Picker,
    Keyboard,
    ScrollView,
    TextInput
} from 'react-native'
import CryptoJS from 'crypto-js'
import Toast from 'react-native-easy-toast'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { Actions, ActionConst } from 'react-native-router-flux'
import { connect } from 'react-redux'

import {MedicalDescription, ScreenLoader} from '../../components'
import store from '../../store/store';
import { createBlockFailed } from '../../reducers/MedblockReducer';
import { medApi } from '../../api/userApi';

class CreateMedblock extends React.Component {
    
    state={
        heading: '',
        bgColor: '#0060FF',
        keyboard: false,
        name: '',
        age: '',
        gender: 'Male',
        data: '',
        doctor: '',
        hospital: '',
        passkey: ''
    }

    componentDidMount=()=>{
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
    }

    encrypt (message) {
        return CryptoJS.AES.encrypt(message, this.props.passkey).toString()
    }

    _keyboardDidShow=()=> {
        this.setState({keyBoard: true})
    }
    
    _keyboardDidHide=()=>{
        this.setState({keyBoard: false})
    }

    componentDidUpdate() {
        if(this.props.message==='Event created successfully') {
            this.refs.toast.show(this.props.message, 1000, () => {
                store.dispatch(createBlockFailed(''))
                this.setState({disabled: true})
                setTimeout(()=>{
                    Actions.pop()
                }, 1000)
            })
        }

        else if(this.props.message) {
            this.refs.toast.show(this.props.message, 1000, () => {
                store.dispatch(createBlockFailed(''))
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header, {backgroundColor: this.state.bgColor}]}>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.headerButtonLeft}  onPress={Actions.pop} disabled={this.state.disabled}>
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
                            blurOnSubmit
                            autoFocus
                            />
                        </View>
                        <TouchableOpacity style={styles.headerButtonRight} onPress={()=>{
                            const {
                                heading,
                                name,
                                age,
                                gender,
                                data,
                                doctor,
                                hospital,
                                passkey
                            } = this.state
                            if(!name||!age||!gender||!data||!doctor||!hospital||!passkey)
                                store.dispatch(createBlockFailed('All fields are required'))

                            else if (this.props.passkey!==passkey)
                                store.dispatch(createBlockFailed('Wrong Passkey'))

                            else {
                                medApi.create(
                                    this.encrypt(heading),
                                    this.encrypt(name),
                                    this.encrypt(age),
                                    this.encrypt(gender),
                                    this.encrypt(data),
                                    this.encrypt(doctor),
                                    this.encrypt(hospital)
                                )
                            }
                        }}
                        >
                            <Text style={styles.headerText}>CREATE</Text>
                        </TouchableOpacity>
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
                            />
                    </MedicalDescription>
                    <MedicalDescription type="Ionicons" icon="ios-person" border>
                        <TextInput
                            style={styles.noteText}
                            onChangeText={age => this.setState({age})}
                            underlineColorAndroid="transparent"
                            placeholder="Age"
                            placeholderTextColor="#666"
                            />
                    </MedicalDescription>
                    <MedicalDescription type="MaterialCommunityIcons" icon="gender-male-female" border>
                        <Picker
                            selectedValue={this.state.gender}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
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
                        />
                    </MedicalDescription>
                    <MedicalDescription type="MaterialCommunityIcons" icon="doctor" border>
                        <TextInput
                            style={styles.noteText}
                            onChangeText={doctor => this.setState({doctor})}
                            underlineColorAndroid="transparent"
                            placeholder="Doctor Name"
                            placeholderTextColor="#666"
                            />
                    </MedicalDescription>
                    <MedicalDescription type="MaterialCommunityIcons" icon="hospital-building" border>
                        <TextInput
                            style={styles.noteText}
                            onChangeText={hospital => this.setState({hospital})}
                            underlineColorAndroid="transparent"
                            placeholder="Hospital Name"
                            placeholderTextColor="#666"
                            />
                    </MedicalDescription>
                    <MedicalDescription type="MaterialCommunityIcons" icon="onepassword" border>
                        <TextInput
                            style={styles.noteText}
                            onChangeText={passkey => this.setState({passkey})}
                            underlineColorAndroid="transparent"
                            placeholder="Passkey"
                            placeholderTextColor="#666"
                            secureTextEntry
                            />
                    </MedicalDescription>
                    <MedicalDescription type="Entypo" icon="google-drive" border>
                        <Text style={styles.descriptionGray}>Add attachment</Text>
                    </MedicalDescription>
                </ScrollView>
                <ScreenLoader show={this.props.loading} size={90} color="blue" />
                <KeyboardSpacer/>
                <Toast
                ref="toast"
                position={this.state.keyBoard?'top':'bottom'}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    message: state.med.message,
    loading: state.med.loading,
    passkey: state.user.passkey
});

export default connect(mapStateToProps)(CreateMedblock)