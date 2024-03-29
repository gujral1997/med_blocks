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

import { Loader, ErrorBar } from '../../components'
import assets from '../../themes/assets'
import styles from './styles'
import {userApi} from '../../api/userApi'


class RegisterScreen extends React.Component {

    state = {
        password: ''
    }

    render() {
        return(
            <ImageBackground style={styles.container} source={assets['background']}>
                <ErrorBar
                error = {this.props.message}
                in = {this.props.message}
                />
                <View style={styles.subView}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        placeholder='Password'
                        placeholderTextColor='black'
                        secureTextEntry
                        />
                    <TouchableOpacity 
                        disabled = {!this.state.password}
                        onPress={()=>{
                            const {password} = this.state
                            userApi.login(password)
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
                        <Text style={styles.text}>Login</Text>}
                    </TouchableOpacity>
                    <KeyboardSpacer/>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps =state=> ({
    loading: state.user.loading,
    message: state.user.message
})

export default connect(mapStateToProps)(RegisterScreen)