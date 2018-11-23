import { StyleSheet } from 'react-native'

import { center } from '../../themes/globalStyles'
import { Metrics } from '../../themes';

export default StyleSheet.create({
    container: {
        ...center
    },
    main: {
        ...center,
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH
    }
})