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

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreator from '../common/actions/auth';
import {Actions} from 'react-native-router-flux'

class SearchMedicationView extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => (r1 !== r2)})
        this.state = {};
    }

    onSearch() {

    }

    onSelected(data) {

    }

    onCancel(){
        this.props.onSearchCancel();
    }

    renderMedicationData(data) {
        return (
            <TouchableHighlight style={{flex:1}}
                                key={data.rxNumber}
                                onPress={this.onSelected.bind(this,data)}>
                <View style={[{flex:1}]}>
                    <View style={[styles.rowContainer]}>
                        <View style={styles.dataContainer}>
                            <View style={styles.orderBox}>
                                <View style={styles.dueDateBox}>
                                    <Text style={[styles.orderLabel]}>{data.name}</Text>
                                </View>
                                <View style={styles.statusBox}>
                                    <Text
                                        style={[styles.orderLabel,{color:'#777777'}]}>{data.rxNumber}</Text>
                                </View>
                            </View>
                            <View style={styles.extraInfoBox}>
                                <View style={styles.dueDateBox}>
                                    <Text style={[styles.inventoryDate]}>{data.lastFilled}</Text>
                                </View>
                                <View style={styles.statusBox}>
                                    <Text
                                        style={[styles.inventoryDate]}>Refill Remaining {data.refillRemaining}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.offlineStatus}>
                            <Image style={{width:30,height:30}} source={require('../common/images/morearrow.png')}/>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableHighlight>

        );
    }

    onSearchSubmit() {

    }

    render() {
        var {medicationDataList} = this.props;
        var medicationData = this.dataSource.cloneWithRows(medicationDataList);
        return (
            <View style={styles.container}>
                <View style={styles.toolBar}>
                    <View style={styles.searchBox}>
                        <View style={styles.searchIcon}>
                            <Image style={{width:20,height:20}} source={require('../common/images/search.png')}/>
                        </View>
                        <View style={styles.serachField}>
                            <TextInput
                                style={{height: 25,padding:5,backgroundColor: '#FFFFFF'}}
                                onChangeText={(username) => this.setState({username})}
                                placeholder="Doctor, Drug, RxNumber..."
                                placeholderTextColor="#CCCCCC"
                                autoCorrect={false}
                                clearButtonMode="always"
                                value={this.state.username}
                                returnKeyType="next"
                                onEndEditing={this.onSearchSubmit.bind(this)}
                                selectTextOnFocus
                                enablesReturnKeyAutomatically
                                keyboardAppearance="light"
                                autoCapitalize="none"
                                />
                        </View>
                    </View>
                    <View style={styles.cancelButtonBox}>
                        <TouchableOpacity onPress={this.onCancel.bind(this)}>
                            <Text style={styles.cancelButton}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={[styles.separator,{marginLeft: 10,marginRight: 10,marginTop:10,backgroundColor:'#E9F1F9'}]}/>
                <View style={styles.listViewBox}>
                    <ListView
                        dataSource={medicationData}
                        renderRow={this.renderMedicationData.bind(this)}
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
        paddingTop: 0,
        backgroundColor: '#E9F1F9'
    },
    toolBar: {
        flexDirection: 'row',
        height: 35,
        marginLeft: 10,
        marginRight: 10,

    },
    searchBox: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#CCCCCC'
    },
    searchIcon: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    serachField: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addOption: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    listViewBox: {
        backgroundColor: '#FFFFFF',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flex: 1
    },
    horizontalSeparator: {
        backgroundColor: '#dddddd',
        width: 1,
        marginTop: 5,
        marginBottom: 5
    },
    optionText: {
        fontSize: 12,
        color: '#585858'
    },
    listView: {
        flex: 1
    },
    rowContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center'
    },
    dataContainer: {
        flex: 1
    },
    orderBox: {
        flex: 1,
        flexDirection: 'row'
    },
    orderLabel: {
        color: "#000000",
        fontSize: 17
    },
    extraInfoBox: {
        flex: 1,
        flexDirection: 'row',
    },
    dueDateBox: {
        flex: 1,
        alignSelf: 'flex-start'
    },
    statusBox: {
        alignSelf: 'flex-end'
    },
    inventoryDate: {
        textAlign: 'left',
        color: '#9e9e9e'
    },
    offlineStatus: {
        alignItems: 'flex-end',

    },
    cancelButtonBox: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5
    },
    cancelButton: {
        color: '#0080FF',
        fontWeight:'bold'
    }
});

const mapStateToProps = (state) => ({
    medicationDataList: state.profiles.medicationDataList
});

const mapDispatchToProps = (dispatch) => ({
    //'authActions': bindActionCreators(authActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMedicationView);