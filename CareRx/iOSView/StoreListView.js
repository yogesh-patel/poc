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

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreator from '../common/actions/auth';
import * as prescriptionActionCreator from '../common/actions/prescription';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux'

class StoreListView extends React.Component {
    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {};
    }

    onSelected(data) {
        this.props.prescriptionActions.onStoreSelected(data);
        Actions.storeDetail();
    }

    renderStoreData(data) {
        var address = data.address1 + ' ' + data.city + ',' + data.state + ' ' + data.zip;
        return (
            <TouchableOpacity style={{flex:1}}
                              key={data.id+''}
                              onPress={this.onSelected.bind(this,data)}>
                <View style={[{flex:1}]}>
                    <View style={[styles.rowContainer]}>
                        <View style={styles.dataContainer}>
                            <View style={styles.orderBox}>
                                <View style={styles.dueDateBox}>
                                    <Text style={[styles.orderLabel]}>{data.name}</Text>
                                </View>

                            </View>
                            <View style={styles.extraInfoBox}>
                                <View style={styles.dueDateBox}>
                                    <Text style={[styles.inventoryDate]}>
                                        {address}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.offlineStatus}>
                            <Image style={{width:30,height:30}} source={require('../common/images/morearrow.png')}/>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableOpacity>
        );
    }

    getFilteredData() {
        var {stores,searchText} = this.props;
        var newDataList = stores;
        if (searchText && searchText.trim() != '') {
            newDataList = _.filter(stores, (data)=> {
                return (data.name.toUpperCase().indexOf(searchText.toUpperCase()) != -1
                || data.address1.toUpperCase().indexOf(searchText.toUpperCase()) != -1
                || data.city.toUpperCase().indexOf(searchText.toUpperCase()) != -1
                || data.state.toUpperCase().indexOf(searchText.toUpperCase()) != -1
                || data.zip.toUpperCase().indexOf(searchText.toUpperCase()) != -1);
            });
        }

        return newDataList;
    }

    render() {
        var {stores,searchText} = this.props;
        var storeData = this.dataSource.cloneWithRows(this.getFilteredData(stores));
        return (
            <View style={styles.listViewBox}>
                <ListView
                    dataSource={storeData}
                    renderRow={this.renderStoreData.bind(this)}
                    style={styles.listView}
                    automaticallyAdjustContentInsets={false}
                    contentInset={{bottom:0}}
                    scrollEventThrottle={300}
                    onEndReachedThreshold={2}
                    directionalLockEnabled={true}
                    />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    listViewBox: {
        flex: 1
    },
    listView: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
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

    }
});

const mapStateToProps = (state) => ({
    stores: state.stores.stores
});

const mapDispatchToProps = (dispatch) => ({
    'prescriptionActions': bindActionCreators(prescriptionActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreListView);