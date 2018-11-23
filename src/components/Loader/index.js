/**
 * Created by Ansh on 2018-10-15.
 */

import React from 'react'
import {
    ActivityIndicator
} from 'react-native'

const Loader = props =>
    props.show
        ?
            <ActivityIndicator size={props.size}
                               color={props.color}/>
        : null

export default Loader