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
    AlertIOS,
    TouchableOpacity,
    TouchableHighlight} from 'react-native';
var BUTTONS = [
    'Call Store',
    'Send Email',
    'Print',
    'Cancel',
];
//var DESTRUCTIVE_INDEX = 4;
var CANCEL_INDEX = 3;

import {Actions} from 'react-native-router-flux'
import config from '../common/config';
import { connect } from 'react-redux';

class StoreDetailView extends React.Component {
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
        var {selectedStore} = this.props;

        var hours = selectedStore.hours;
        var hourComponents = _.map(_.keys(hours), (day)=> {
            var dayHour = hours[day];
            return (
                <View style={[styles.fieldBox,{height:80}]} key={day}>
                    <View style={[styles.separator]}/>
                    <View style={[{height:20,marginTop:10}]}>
                        <Text style={styles.fieldLabel}>
                            {day + ' [' + dayHour.date + ']'}
                        </Text>
                    </View>
                    <View style={styles.fieldValueBox}>
                        <Text style={[styles.fieldValueLabel]}>
                            Open Time: {dayHour.openTime}
                        </Text>
                    </View>
                    <View style={styles.fieldValueBox}>
                        <Text style={[styles.fieldValueLabel]}>
                            Close Time: {dayHour.closeTime}
                        </Text>
                    </View>
                </View>);

        });
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
                        <Text style={styles.title}>{selectedStore.name}</Text>
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
                                    Store Name
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedStore.name}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Address
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedStore.address1 + ' ' + selectedStore.city + ',' +
                                    selectedStore.state + ' ' + selectedStore.zip}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Phone Number
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedStore.phone}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Fax Number
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedStore.faxPhone}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    TimeZone
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedStore.timezoe}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.hourBox}>
                            <View style={[{height:20}]}>
                                <Text style={styles.fieldLabel}>
                                    Hours
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                {hourComponents}
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
        color: config.segmentedTintColor,
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
    hourBox: {
        padding: 10,
        height: 600
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
    'selectedStore': state.stores.selectedStore
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StoreDetailView);