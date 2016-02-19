/**
 * Created by synerzip on 11/02/16.
 */
import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'
import CreateAccountScreen from './CreateAccountScreen';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginView from './LoginView';
import {requireMaskComponent} from './MaskWrapComponent';

class RouterConfigComponent extends React.Component {
    render() {
        var {isAuthenticated} = this.props;
        return (
            <Router hideNavBar={true}>
                <Route hideNavBar={true} name="launch" component={requireMaskComponent(LoginView)}
                       initial={true} wrapRouter={true}/>
                <Route name="createAccount"
                       sceneConfig={ Navigator.SceneConfigs.FloatFromBottom }
                       component={requireMaskComponent(CreateAccountScreen)}
                       hideNavBar={true} type="push"/>
            </Router>
        );
    }
}
const mapStateToProps = (state) => ({
    'isAuthenticated': state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RouterConfigComponent);