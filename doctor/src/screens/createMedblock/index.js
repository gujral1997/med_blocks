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
import Toast from 'react-native-easy-toast'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Ionicons } from '@expo/vector-icons'
import styles from './styles'
import { Actions, ActionConst } from 'react-native-router-flux'
import { connect } from 'react-redux'

import {MedicalDescription, ScreenLoader} from '../../components'

class CreateMedblock extends React.Component {
    
    state={
        name: '',
        bgColor: '#0060FF',
        heading: '',
        note: '',
        location: '',
        keyboard: false
    }

    componentDidMount=()=>{
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
    }

    componentWillUnmount() {

    }

    _keyboardDidShow=()=> {
        this.setState({keyBoard: true})
    }
    
    _keyboardDidHide=()=>{
        this.setState({keyBoard: false})
    }

    componentDidUpdate() {
        // if(this.props.message==='Event created successfully') {
        //     this.refs.toast.show(this.props.message, 1000, () => {
        //         store.dispatch(createEventFailed(''))
        //         this.setState({disabled: true})
        //         setTimeout(()=>{
        //             Actions.pop()
        //         }, 1000)
        //     })
        // }

        // else if(this.props.message==='Event updated successfully') {
        //     this.refs.toast.show(this.props.message, 1000, () => {
        //         store.dispatch(updateEventMessage(''))
        //         this.setState({disabled: true})
        //         setTimeout(()=>{
        //             Actions.pop({type: ActionConst.REFRESH})
        //         }, 1000)
        //     })
        // }

        // else if(this.props.message) {
        //     this.refs.toast.show(this.props.message, 1000, () => {
        //         store.dispatch(createEventFailed(''))
        //     })
        // }
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
                            alert('hello')
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

});

export default connect(mapStateToProps)(CreateMedblock)