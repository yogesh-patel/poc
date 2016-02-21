/**
 * Created by synerzip on 17/02/16.
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

class RxDetail extends React.Component {
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
        var {selectedMedication} = this.props;
        var txFields = _.map(selectedMedication.txFields, (txField)=> {
            return (
                <View key={txField.lastFilled}>
                    <View style={styles.txFieldLabelBox}>

                    </View>
                    <View style={{paddingLeft:20}}>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Filled Date
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {txField.lastFilled}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>

                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Cost
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {txField.cost}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>

                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Discount
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {txField.discount}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>

                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Fill Qty
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {txField.fillQty}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>

                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Fill Qty
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {txField.dispenseDrugName}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        })
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
                        <Text style={styles.title}>{selectedMedication.rxNumber}</Text>
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
                                    RxNumber
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.rxNumber}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Drug
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.name}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Dosage
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.dosage}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Written Date
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.writtenDate}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Expiration Date
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.expirationDate}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Status
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.status}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Prescribed Qty
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.prescribedQty}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Quantity Remaining
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.qunatityRemaining}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Refill Remaining
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.refillsRemaining}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Prescriber Name
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.doctorName}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>

                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Doctor Phone
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.doctorPhone}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>
                        <View style={styles.fieldBox}>
                            <View style={styles.fieldNameBox}>
                                <Text style={styles.fieldLabel}>
                                    Store
                                </Text>
                            </View>
                            <View style={styles.fieldValueBox}>
                                <Text style={styles.fieldValueLabel}>
                                    {selectedMedication.store}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.separator}/>

                        <View style={styles.txFields}>
                            <View style={styles.txFieldStartBox}>
                                <Text style={styles.txFieldLabel}>Tx Fields</Text>
                            </View>

                            {txFields}
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
        padding:10,
        height: 50,
    },
    txFieldLabelBox: {
        flexDirection: 'row',
        margin: 10,
        marginLeft: 0,
        height: 40,
        backgroundColor: '#dddddd'
    },
    txFieldLabel: {
        color: '#000000',
        fontSize: 17,
        padding: 10,
        fontWeight: 'bold'
    }

});

const mapStateToProps = (state) => ({
    selectedMedication: state.profiles.selectedMedication
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RxDetail);