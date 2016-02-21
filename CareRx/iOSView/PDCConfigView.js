/**
 * Created by synerzip on 20/02/16.
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
    AlertIOS,
    TouchableOpacity,
    TouchableHighlight} from 'react-native';

import config from '../common/config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreator from '../common/actions/auth';
import * as prescriptionActionCreator from '../common/actions/prescription';
import {Actions} from 'react-native-router-flux'

class PDCConfigView extends React.Component {
    constructor(props) {
        super(props);
    }

    onCancel() {
        Actions.pop();
    }

    onDone() {
        this.props.prescriptionActions.onPDCDone();
        Actions.pop();
    }

    onSelectDuration() {
        Actions.selectPDCDuration();
    }

    render() {
        var {profiles,selectedProfile,selectedDuration} = this.props;
        var tbSelectedDuration = 'Select Duration';
        if (selectedDuration) {
            tbSelectedDuration = selectedDuration;
        }
        return (
            <View style={styles.container}>
                <View style={styles.toolBar}>
                    <View style={styles.cancelBox}>
                        <TouchableOpacity onPress={this.onCancel.bind(this)}>
                            <View style={styles.backButtonBox}>
                                <Image style={{width:25,height:25}} source={require('../common/images/back.png')}/>
                                <Text style={styles.cancelLabel}>{profiles[selectedProfile].firstName}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>PDC</Text>
                    </View>
                    <View style={styles.doneBox}>
                        <TouchableOpacity onPress={this.onDone.bind(this)} style={[styles.doneBox,{flex:1}]}>
                            <View style={styles.doneButtonBox}>
                                <Text style={styles.cancelLabel}>Done</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.separator}/>
                <View style={{backgroundColor:'#FFFFFF',flex:1,padding:10}}>
                    <ScrollView style={{flex:1}}>
                        <View style={styles.overallPDCBox}>
                            <View style={styles.overallPDCLabelBox}>
                                <Text style={styles.overallPDCLabel}>Overall PDC Average</Text>
                            </View>
                            <View style={styles.overallPDCValueLabelBox}>
                                <Text style={styles.overallPDCValueLabel}>80%</Text>
                            </View>
                        </View>
                        <View style={[styles.separator,{marginTop:10}]}/>
                        <View style={{marginTop:10}}>
                            <View style={styles.txFieldLabelBox}>
                                <Text style={styles.txFieldLabel}>TB</Text>
                            </View>
                            <View style={[styles.separator,{marginTop:10}]}/>
                            <View style={styles.selectedDurationBox}>
                                <View style={styles.selectedDurationLabelBox}>
                                    <Text style={styles.selectDurationLabel}>Duration</Text>
                                </View>
                                <View style={styles.selectedDurationValueBox}>
                                    <TouchableOpacity style={[{flex:1,justifyContent:'flex-end',flexDirection:'row'}]}
                                                      onPress={this.onSelectDuration.bind(this)}>
                                        <View style={{paddingTop:0}}>
                                            <Text style={styles.selectDurationValueLabel}>{tbSelectedDuration}</Text>
                                        </View>
                                        <View style={{alignItems:'center'}}>
                                            <Image style={{width:25,height:25}}
                                                   source={require('../common/images/forward.png')}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.separator]}/>
                        </View>
                        <View style={{marginTop:10}}>
                            <View style={styles.txFieldLabelBox}>
                                <Text style={styles.txFieldLabel}>Cold</Text>
                            </View>
                            <View style={[styles.separator,{marginTop:10}]}/>
                            <View style={styles.selectedDurationBox}>
                                <View style={styles.selectedDurationLabelBox}>
                                    <Text style={styles.selectDurationLabel}>Duration</Text>
                                </View>
                                <View style={styles.selectedDurationValueBox}>
                                    <TouchableOpacity style={[{flex:1,justifyContent:'flex-end',flexDirection:'row'}]}>
                                        <View style={{paddingTop:0}}>
                                            <Text style={styles.selectDurationValueLabel}>3 Months</Text>
                                        </View>
                                        <View style={{alignItems:'center'}}>
                                            <Image style={{width:25,height:25}}
                                                   source={require('../common/images/forward.png')}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.separator]}/>
                        </View>
                        <View style={{marginTop:10}}>
                            <View style={styles.txFieldLabelBox}>
                                <Text style={styles.txFieldLabel}>Diabetge</Text>
                            </View>
                            <View style={[styles.separator,{marginTop:10}]}/>
                            <View style={styles.selectedDurationBox}>
                                <View style={styles.selectedDurationLabelBox}>
                                    <Text style={styles.selectDurationLabel}>Duration</Text>
                                </View>
                                <View style={styles.selectedDurationValueBox}>
                                    <TouchableOpacity style={[{flex:1,justifyContent:'flex-end',flexDirection:'row'}]}>
                                        <View style={{paddingTop:0}}>
                                            <Text style={styles.selectDurationValueLabel}>6 Months</Text>
                                        </View>
                                        <View style={{alignItems:'center'}}>
                                            <Image style={{width:25,height:25}}
                                                   source={require('../common/images/forward.png')}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.separator]}/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: config.backgroundColor
    },
    toolBar: {
        height: 45,
        flexDirection: 'row',
        paddingBottom: 5
    },
    cancelBox: {
        padding: 10,
        alignSelf: 'flex-start',
        flex: 0.5
    },
    cancelLabel: {
        color: config.tabTintColor,
        fontSize: 18,
        fontWeight: 'bold',
    },
    doneBox: {
        alignSelf: 'flex-end',
        flex: 0.5,
        padding: 4
    },
    doneButtonBox: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    },
    doneLabel: {
        color: config.tabTintColor,
        fontSize: 18,
        fontWeight: 'bold'
    },
    titleBox: {
        padding: 10,
        paddingTop: 15,
        alignSelf: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    separator: {
        backgroundColor: '#dddddd',
        height: 1
    },
    inputBox: {
        backgroundColor: '#FFFFFF',
        minHeight: 40
    },
    infoBox: {
        padding: 10
    },
    infoLabel: {
        color: '#424242',
        fontSize: 18
    },
    backButtonBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -12
    },
    detailBox: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    txFields: {
        flex: 1
    },
    fieldBox: {
        padding: 10,
        height: 70
    },
    fieldNameBox: {
        flex: 1
    },
    fieldValueBox: {
        flex: 1
    },
    fieldLabel: {
        color: "#000000",
        fontSize: 17
    },
    fieldValueLabel: {
        color: "#9e9e9e"
    },
    txFieldStartBox: {
        flexDirection: 'row',
        padding: 10,
        height: 50,
    },
    txFieldLabelBox: {
        flexDirection: 'row',
        margin: 10,
        marginLeft: 0,
        marginRight: 0,
        height: 40,
        backgroundColor: '#dddddd'
    },
    txFieldLabel: {
        color: '#000000',
        fontSize: 17,
        padding: 10,
        fontWeight: 'bold'
    },
    selectedDurationBox: {
        flexDirection: 'row',
        margin: 10,
        marginLeft: 0,
        marginRight: 0,
        height: 40
    },
    selectedDurationLabelBox: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        justifyContent: 'flex-start'
    },
    selectedDurationValueBox: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        justifyContent: 'flex-end'
    },
    selectDurationLabel: {
        fontSize: 17
    },
    selectDurationValueLabel: {
        fontSize: 17,
        color: config.segmentedTintColor
    },
    overallPDCBox: {
        padding: 10,
        flexDirection: 'row'
    },
    overallPDCLabelBox: {
        padding: 5,
        height: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    overallPDCValueLabelBox: {
        padding: 5,
        height: 30,
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    overallPDCLabel: {
        color: config.segmentedTintColor,
        fontSize: 20
    },
    overallPDCValueLabel: {
        color: '#777777',
        fontSize: 20
    }

});

const mapStateToProps = (state) => ({
    selectedDuration: state.profiles.selectedDuration,
    selectedProfile: state.profiles.selectedProfile,
    profiles: state.profiles.profiles
});

const mapDispatchToProps = (dispatch) => ({
    'prescriptionActions': bindActionCreators(prescriptionActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PDCConfigView);