/**
 * Created by synerzip on 11/02/16.
 */
import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'
import AppView from './AppView';
import CreateAccountScreen from './CreateAccountScreen';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginView from './LoginView';
import {requireMaskComponent} from './MaskWrapComponent';

class RouterConfigComponent extends React.Component{
    render(){
        var {isAuthenticated} = this.props;
        //var initialRoute = null;
        //if(isAuthenticated){
        //    initialRoute = <Route hideNavBar={true} name="launch" component={AppView} initial={true} wrapRouter={true}/>;
        //}else{
        //    initialRoute = <Route hideNavBar={true} name="launch" component={LoginView} initial={true} wrapRouter={true}/>;
        //}
        return (
            <Router hideNavBar={true}>
                <Route hideNavBar={true} name="launch" component={requireMaskComponent(LoginView)}
                       initial={true} wrapRouter={true}/>
                <Route name="dashboard" sceneConfig={ Navigator.SceneConfigs.FloatFromRight }
                       component={AppView}
                       hideNavBar={true} type="replace"/>
                <Route name="createAccount"
                       sceneConfig={ Navigator.SceneConfigs.FloatFromBottom }
                       component={requireMaskComponent(CreateAccountScreen)}
                       hideNavBar={true} type="push" />
            </Router>
        );
    }
}
const mapStateToProps = (state) => ({
    'isAuthenticated':state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RouterConfigComponent);