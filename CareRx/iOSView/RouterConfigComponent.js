/**
 * Created by synerzip on 11/02/16.
 */
import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'
import AppView from './AppView';
import CreateAccountScreen from './CreateAccountScreen';
import RxDetail from './RxDetail';
import AllergyDetail from './AllergyDetail';
import StatesView from './StatesListView';
import CityView from './CityListView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginView from './LoginView';
import {requireMaskComponent} from './MaskWrapComponent';
import StoreDetailView from './StoreDetailView';

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
                <Route name="rxDetail"
                       sceneConfig={ Navigator.SceneConfigs.FloatFromRight }
                       component={requireMaskComponent(RxDetail)}
                       hideNavBar={true} type="push" />
                <Route name="allergyDetail"
                       sceneConfig={ Navigator.SceneConfigs.FloatFromRight }
                       component={requireMaskComponent(AllergyDetail)}
                       hideNavBar={true} type="push" />
                <Route name="storeDetail"
                       sceneConfig={ Navigator.SceneConfigs.FloatFromRight }
                       component={requireMaskComponent(StoreDetailView)}
                       hideNavBar={true} type="push" />
                <Route name="showCityList" sceneConfig={ Navigator.SceneConfigs.FloatFromRight }
                       component={requireMaskComponent(CityView)}
                       hideNavBar={true} type="push"/>
                <Route name="showStatesList" sceneConfig={ Navigator.SceneConfigs.FloatFromRight }
                       component={requireMaskComponent(StatesView)}
                       hideNavBar={true} type="push"/>
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