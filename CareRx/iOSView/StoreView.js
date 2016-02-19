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
import _ from 'lodash';
import StoreListView from './StoreListView';

class StoreView extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    onListView(){
        LayoutAnimation.easeInEaseOut();
        this.setState({listView:!this.state.listView,searchText:null});
    }
    onSearchFocus(){
        LayoutAnimation.easeInEaseOut();
        this.setState({listView:true});
    }
    getAnnotations() {
        var {stores} = this.props;

        var annotations = _.map(stores,(store)=>{
            return {
                latitude: store.latitude,
                longitude: store.longitude,
                animateDrop: true,
                title: store.name,
                tintColor: MapView.PinColors.RED,
                //image: Image.propTypes.source,
                //view: element,
                id: store.id+''
            }
        });
        return annotations;
    }

    render() {
        var {stores} = this.props;
        var region = {
            latitude: 0,
            longitude: 0
        };
        if(stores && stores.length > 0){
            region = {
                latitude: stores[0].latitude,
                longitude: stores[0].longitude
            };
        }
        var centerView,navOption,navOptionFlex = null;
        var optionIcon = require('../common/images/list.png');
        if(this.state.listView){
            centerView = <StoreListView searchText={this.state.searchText} />;
            optionIcon = require('../common/images/mapView.png');
            navOption = <View />;
            navOptionFlex = 0;
        }else{
            navOptionFlex = 0.1;
            centerView =
                            <MapView style={{flex:1}}
                                  annotations={this.getAnnotations()}
                                  region={region}/>;
            navOption = <TouchableOpacity>
                <View style={styles.backButtonBox}>
                    <Image style={{width:25,height:25}} source={require('../common/images/mapNavigation.png')}/>
                </View>
            </TouchableOpacity>;
        }
        return (
            <View style={styles.container}>
                <Image style={{width:120,height:38,marginLeft:5}} source={require('../common/images/logoNew.png')}/>
                <View style={styles.toolBar}>
                    <View style={[styles.cancelBox,{flex:navOptionFlex}]}>
                        {navOption}
                    </View>
                    <View style={styles.titleBox}>
                        <TextInput
                            style={{height: 30,padding:5,backgroundColor: '#DDDDDD',
                            borderRadius:3}}
                            onFocus={this.onSearchFocus.bind(this)}
                            onChangeText={(searchText) => this.setState({searchText})}
                            placeholder="Store, City, State, Zip..."
                            placeholderTextColor="#777777"
                            autoCorrect={false}
                            clearButtonMode="always"
                            value={this.state.searchText}
                            returnKeyType="done"
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            autoCapitalize="none"
                            />
                    </View>
                    <View style={styles.doneBox}>
                        <TouchableOpacity style={[{flex: 1}]} onPress={this.onListView.bind(this)}>
                            <Image style={{width:25,height:25,marginBottom:-5,alignSelf:'flex-end'}}
                                   source={optionIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1}}>
                    {centerView}
                </View>
            </View>
        )
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        backgroundColor:config.backgroundColor
    },
    toolBar: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#FAFAFA',
        borderRadius: 3,
        marginTop: 5
    },

    searchToolBar: {
        flexDirection: 'row',
        height: 35,
        marginLeft: 10,
        marginRight: 10,

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
        marginBottom: 55,
        marginTop: 5,
        flex: 1
    },
    horizontalSeparator: {
        backgroundColor: '#dddddd',
        width: 1,
        marginTop: 5,
        marginBottom: 5
    },
    cancelBox: {
        padding: 10,
        alignSelf: 'flex-start',
        flex: 0.1
    },
    cancelLabel: {
        color: '#0080FF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleBox: {
        padding: 10,
        alignSelf: 'center',
        alignItems: 'center',
        flex: 1
    },
    doneBox: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        flex: 0.1
    }
});

const mapStateToProps = (state) => ({
    stores: state.stores.stores
});

const mapDispatchToProps = (dispatch) => ({
    //'prescriptionActions': bindActionCreators(prescriptionActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreView);