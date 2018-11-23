
import React from 'react'
import {
    RegisterScreen,
    Home,
    ViewMedblock
} from './screens'
import { Router, Scene, Stack } from "react-native-router-flux"

class Routes extends React.Component {

    render = () =>
        <Router>
            <Stack key="root" hideNavBar>
              <Scene key="register" component={RegisterScreen} initial/>
              <Scene key="home" component={Home} />
              <Scene key="med" component={ViewMedblock} />
            </Stack>
        </Router>
  }

export default Routes