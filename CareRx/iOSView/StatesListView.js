/**
 * Created by synerzip on 18/02/16.
 */
var React = require('react-native');
var {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    LayoutAnimation,
    ActivityIndicatorIOS,
    StatusBarIOS,
    TextInput,
    Navigator,
    AlertIOS,
    Switch,
    TouchableOpacity,
    ListView,
    TouchableHighlight
    } = React;

import config from '../common/config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreator from '../common/actions/auth';
import {Actions} from 'react-native-router-flux'

class StatesListView extends React.Component {
    constructor(props) {
        super(props);

        this.stateData = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {};
    }

    onCancel() {
        Actions.pop();
    }

    renderRow(rowData) {

        var isSelected = <View />;
        if (this.props.selectedState != null) {
            if (this.props.selectedState.name == rowData.name) {
                isSelected = <Image style={{width:30,height:30}}
                                    source={require('../common/images/selected.png')}/>;
            }
        }
        //console.log("Row ");
        return (
            <TouchableOpacity key={rowData.id+''}
                              onPress={() => this.rowPressed(rowData)}
                              underlayColor='#dddddd'>
                <View>
                    <View style={styles.rowContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.stateLabel}>{ rowData.name }</Text>
                        </View>
                        <View style={styles.selectedIcon}>
                            {isSelected}
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        console.log("State list " + this.stateList);
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
                        <Text style={styles.title}>Select State</Text>
                    </View>
                    <View style={styles.doneBox}>
                        <TouchableOpacity>
                            <Text style={styles.doneLabel}></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ListView style={{backgroundColor: 'white'}}
                          dataSource={this.stateData.cloneWithRows(this.props.stateList)}
                          renderRow={this.renderRow.bind(this)}
                          automaticallyAdjustContentInsets={false}
                          contentInset={{bottom:0}}
                          scrollEventThrottle={300}
                          onEndReachedThreshold={2}
                          directionalLockEnabled={true}
                    />
            </View>
        );
    }

    rowPressed(rowData) {
        this.props.userAccountActions.onSelectedState(rowData);
        Actions.pop();
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#E9F1F9'
    },
    toolBar: {
        height: 40,
        flexDirection: 'row'
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
        padding: 10,
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

    textContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    stateLabel: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },
    backButtonBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -12
    },


});

const mapStateToProps = (state) => ({
    stateList: state.userProfile.stateList,
    selectedState: state.userProfile.selectedState
});

const mapDispatchToProps = (dispatch) => ({
    'userAccountActions': bindActionCreators(authActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StatesListView);