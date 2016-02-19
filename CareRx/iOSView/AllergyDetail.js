/**
 * Created by synerzip on 19/02/16.
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
import {Actions} from 'react-native-router-flux'
var BUTTONS = [
    'Refill',
    'Call Store',
    'Send Email',
    'Print',
    'Cancel',
];
//var DESTRUCTIVE_INDEX = 4;
var CANCEL_INDEX = 4;

class AllergyDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    showActionSheet() {
        ActionSheetIOS.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                //destructiveButtonIndex: DESTRUCTIVE_INDEX,
            },
            (buttonIndex) => {
                this.setState({clicked: BUTTONS[buttonIndex]});
            });
    }

    onCancel() {
        Actions.pop();
    }

    onMoreOptions() {
        this.showActionSheet();
    }

    render() {
        var {selectedAllergy} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.toolBar}>
                    <View style={styles.cancelBox}>
                        <TouchableOpacity onPress={this.onCancel.bind(this)}>
                            <View style={styles.backButtonBox}>
                                <Image style={{width:25,height:25}} source={require('../common/images/back.png')}/>
                                <Text style={styles.cancelLabel}>Back</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>{selectedAllergy.accode}</Text>
                    </View>
                    <View style={styles.doneBox}>
                        <TouchableOpacity style={[{flex: 1}]} onPress={this.onMoreOptions.bind(this)}>
                            <Image style={{width:25,height:25,marginBottom:-5,alignSelf:'flex-end'}}
                                   source={require('../common/images/moreOptions.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.separator}/>
                <View style={styles.detailBox}>
                    <ScrollView>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Code
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedAllergy.accode}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Description
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedAllergy.Description}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
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
        paddingBottom:5
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
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        flex: 0.5
    },
    doneLabel: {
        color: '#CCCCCC',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right'
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
    }
});

const mapStateToProps = (state) => ({
    selectedAllergy: state.profiles.selectedAllergy
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AllergyDetail);