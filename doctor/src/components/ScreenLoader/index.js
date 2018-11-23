/**
 * Created by Ansh on 2018-10-15.
 */

import React from 'react'
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native'

import {Metrics} from '../../themes'

const ScreenLoading = props =>
    props.show
        ?
        <View style={styles.loading}>
            <ActivityIndicator size={props.size}
                               color={props.color}/>
        </View>
        : null

export default ScreenLoading

const styles = StyleSheet.create({
    loading: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        opacity: 0.8
    }
})