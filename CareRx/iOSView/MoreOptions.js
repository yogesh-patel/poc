/**
 * Created by synerzip on 18/02/16.
 */
import React, {
    Component,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    LayoutAnimation,
    ActionSheetIOS,
    ActivityIndicatorIOS,
    SegmentedControlIOS,
    StatusBarIOS,
    TextInput,
    Navigator,
    TabBarIOS,
    ListView,
    MapView,
    AlertIOS,
    TouchableOpacity,
    TouchableHighlight} from 'react-native';

import config from '../common/config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreator from '../common/actions/auth';
import * as prescriptionActionCreator from '../common/actions/prescription';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux'

class MoreOptions extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{width:120,height:38,marginLeft:5}} source={require('../common/images/logoNew.png')}/>
                <View style={{flex:1,marginTop:10}}>
                    <View style={styles.separator}/>
                    <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        backgroundColor: config.backgroundColor
    }
});

export default MoreOptions;