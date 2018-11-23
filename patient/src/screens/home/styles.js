import { StyleSheet } from 'react-native'

import { center, shadow } from '../../themes/globalStyles'
import { Metrics } from '../../themes';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
    container: {
        ...center
    },
    main: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        marginTop: getStatusBarHeight()+43
    },
    swipe: {
        ...center,
        ...shadow,
        width: Metrics.WIDTH,
        height: 40,
        marginBottom: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    textNumber: {
        paddingLeft: 5
    },
    textTitle: {
        flex: 2,
        paddingLeft: 10
    },
    textDate: {
        flex: 1
    }
})