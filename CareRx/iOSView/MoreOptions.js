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
                    <View style={{flex:1}}>
                        <ScrollView style={{flex:1}}>
                            <View style={[styles.separator,{marginTop:15}]}/>
                            <View style={styles.optionBox}>
                                <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
                                    <View style={styles.optionIcon}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/faq.png')}/>
                                    </View>
                                    <View style={styles.horizSeparator} />
                                    <View style={styles.optionLabelBox}>
                                        <Text style={styles.optionLabel}>Frequently Asked Questions</Text>
                                    </View>
                                    <View style={{alignSelf:'flex-end',paddingBottom:10}}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/morearrow.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.separator]}/>

                            <View style={[styles.separator,{marginTop:20}]}/>
                            <View style={styles.optionBox}>
                                <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
                                    <View style={styles.optionIcon}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/changePwd.png')}/>
                                    </View>
                                    <View style={styles.horizSeparator} />
                                    <View style={styles.optionLabelBox}>
                                        <Text style={styles.optionLabel}>Change Password</Text>
                                    </View>
                                    <View style={{alignSelf:'flex-end',paddingBottom:10}}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/morearrow.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.separator]}/>

                            <View style={[styles.separator,{marginTop:20}]}/>
                            <View style={styles.optionBox}>
                                <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
                                    <View style={styles.optionIcon}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/support.png')}/>
                                    </View>
                                    <View style={styles.horizSeparator} />
                                    <View style={styles.optionLabelBox}>
                                        <Text style={styles.optionLabel}>Contact and Support</Text>
                                    </View>
                                    <View style={{alignSelf:'flex-end',paddingBottom:10}}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/morearrow.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.separator]}/>

                            <View style={[styles.separator,{marginTop:20}]}/>
                            <View style={styles.optionBox}>
                                <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
                                    <View style={styles.optionIcon}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/termNcONDITION.png')}/>
                                    </View>
                                    <View style={styles.horizSeparator} />
                                    <View style={styles.optionLabelBox}>
                                        <Text style={styles.optionLabel}>Term of Service</Text>
                                    </View>
                                    <View style={{alignSelf:'flex-end',paddingBottom:10}}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/morearrow.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.separator]}/>

                            <View style={[styles.separator,{marginTop:20}]}/>
                            <View style={styles.optionBox}>
                                <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
                                    <View style={styles.optionIcon}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/offers.png')}/>
                                    </View>
                                    <View style={styles.horizSeparator} />
                                    <View style={styles.optionLabelBox}>
                                        <Text style={styles.optionLabel}>Offers</Text>
                                    </View>
                                    <View style={{alignSelf:'flex-end',paddingBottom:10}}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/morearrow.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.separator]}/>

                            <View style={[styles.separator,{marginTop:20}]}/>
                            <View style={styles.optionBox}>
                                <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
                                    <View style={styles.optionIcon}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/safari.png')}/>
                                    </View>
                                    <View style={styles.horizSeparator} />
                                    <View style={styles.optionLabelBox}>
                                        <Text style={styles.optionLabel}>About My ePharamcy</Text>
                                    </View>
                                    <View style={{alignSelf:'flex-end',paddingBottom:10}}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/morearrow.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.separator]}/>

                            <View style={[styles.separator,{marginTop:20}]}/>
                            <View style={styles.optionBox}>
                                <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
                                    <View style={styles.optionIcon}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/logout.png')}/>
                                    </View>
                                    <View style={styles.horizSeparator} />
                                    <View style={styles.optionLabelBox}>
                                        <Text style={styles.optionLabel}>Logout</Text>
                                    </View>
                                    <View style={{alignSelf:'flex-end',paddingBottom:10}}>
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/morearrow.png')}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.separator]}/>
                        </ScrollView>
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
    },
    separator: {
        backgroundColor: '#dddddd',
        height: 1
    },
    horizSeparator: {
        backgroundColor: '#dddddd',
        width: 1,
        marginLeft:10,
        marginTop:5,
        marginBottom:5
    },
    optionIcon:{
        width:40,
        height:50,
        paddingTop:10,
        alignItems:'center'
    },
    optionBox: {
        height: 50,
        backgroundColor: '#FFFFFF',
    },
    optionLabel: {
        fontSize: 17
    },
    optionLabelBox: {
        flex:1,
        alignSelf: 'flex-start',
        padding:15
    }
});

export default MoreOptions;