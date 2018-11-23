/**
 * Created by Ansh on 2018-11-2.
 */

import React from 'react';
import LottieView from 'lottie-react-native';
import {Assets} from '../../themes'

export default class InfiniteAnimation extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return(
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={Assets[this.props.source]}
        style={{
          height: this.props.height?this.props.height:200,
          width: this.props.width?this.props.width:200
        }}
        loop={true}
      />
    )
  }
}