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

let durations = [
    '3 Months',
    '6 Months',
    '1 Year'
];
class SelectPDCDuration extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }

    onSelected(data) {
        this.props.prescriptionActions.onDurationSelected(data);
        Actions.pop();
    }

    renderDurationData(data) {
        return (
            <TouchableOpacity style={{flex:1}}
                              key={data.id+''}
                              onPress={this.onSelected.bind(this,data)}>
                <View style={[{flex:1}]}>
                    <View style={[styles.rowContainer]}>
                        {/*<View style={styles.selectedIconBox}>
                            <Image style={{width:20,height:20}} source={require('../common/images/back.png')}/>
                        </View>*/}
                        <View style={styles.durationLabelBox}>
                            <Text style={styles.durationLabel}>{data}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableOpacity>
        )
    }

    onCancel() {
        Actions.pop();
    }

    render() {
        var durationData = this.dataSource.cloneWithRows(durations);
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
                        <Text style={styles.title}>Select Duration</Text>
                    </View>
                    <View style={styles.doneBox}>

                    </View>
                </View>
                <View style={styles.separator}/>
                <View style={{flex:1}}>
                    <ListView
                        dataSource={durationData}
                        renderRow={this.renderDurationData.bind(this)}
                        style={styles.listView}
                        automaticallyAdjustContentInsets={false}
                        contentInset={{bottom:0}}
                        scrollEventThrottle={300}
                        onEndReachedThreshold={2}
                        directionalLockEnabled={true}
                        />
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
    listView: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    rowContainer: {
        flexDirection: 'row',
        flex: 1,
        padding: 20
    },
    selectedIconBox: {
        width: 50
    },
    durationLabelBox: {
        flex: 1
    },
    durationLabel: {
        color: config.segmentedTintColor
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
    selectedProfile: state.profiles.selectedProfile,
    selectedDuration: state.profiles.selectedDuration
});

const mapDispatchToProps = (dispatch) => ({
    'prescriptionActions': bindActionCreators(prescriptionActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPDCDuration);