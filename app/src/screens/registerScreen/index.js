import React from 'react'
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    ImageBackground
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import {connect} from 'react-redux'
import {Actions, ActionConst} from  'react-native-router-flux'

import { Loader } from '../../components'
import assets from '../../themes/assets'
import styles from './styles'
import {userApi} from '../../api/userApi'


class RegisterScreen extends React.Component {

    state = {
        login: true
    }

    isRegister() {
        const {login} = this.state
        return(
            <View style={styles.link}>
                <Text style={styles.text}>{login?'Dont have ':'Already having'} account?</Text>
                <TouchableOpacity onPress={()=>this.setState({login: !this.state.login})}>
                    <Text style={styles.linkText}>
                        {login?'Register':'Login'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return(
            <ImageBackground style={styles.container} source={assets['background']}>
                {
                    this.state.login?
                        <View style={styles.subView}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(username) => this.setState({username})}
                                value={this.state.username}
                                placeholder='Username'
                                placeholderTextColor='black'
                                />
                            <TextInput
                                style={styles.input}
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                                placeholder='Password'
                                placeholderTextColor='black'
                                secureTextEntry
                                />
                            <TouchableOpacity 
                                onPress={()=>{
                                    const {username, password} = this.state
                                    userApi.login(username, password)
                                }}
                                style={styles.button}
                                >
                                {this.props.loading?
                                <Loader
                                color = 'white'
                                size = {20}
                                show = {true}
                                />
                                :
                                <Text style={styles.text}>Submit</Text>}
                            </TouchableOpacity>
                            <KeyboardSpacer/>
                            {this.isRegister()}
                        </View>:
                        <View style={styles.subView}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(name) => this.setState({name})}
                                value={this.state.name}
                                placeholder='Name'
                                placeholderTextColor='black'
                                />
                            <TextInput
                                style={styles.input}
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email}
                                placeholder='Email'
                                placeholderTextColor='black'
                                autoCapitalize = 'none'
                                />
                            <TextInput
                                style={styles.input}
                                onChangeText={(username) => this.setState({username})}
                                value={this.state.username}
                                placeholder='Username'
                                placeholderTextColor='black'
                                />
                            <TextInput
                                style={styles.input}
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                                placeholder='Password'
                                placeholderTextColor='black'
                                secureTextEntry
                                />
                            <TextInput
                                style={styles.input}
                                onChangeText={(password1) => this.setState({password1})}
                                value={this.state.password1}
                                placeholder='Retype Password'
                                placeholderTextColor='black'
                                secureTextEntry
                                />
                            <TouchableOpacity 
                                onPress={()=>{
                                    alert('Submit Pressed')
                                }}
                                style={styles.button}
                                >
                                {this.state.loading?<ActivityIndicator color="white"/>:<Text style={styles.text}>Submit</Text>}
                            </TouchableOpacity>
                            <KeyboardSpacer/>
                            {this.isRegister()}
                        </View>
                }
            </ImageBackground>
        )
    }
}

const mapStateToProps =state=> ({
    loading: state.user.loading
})

export default connect(mapStateToProps)(RegisterScreen)