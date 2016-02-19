/**
 * Created by synerzip on 19/02/16.
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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreator from '../common/actions/auth';
import {Actions} from 'react-native-router-flux'

class CityListView extends React.Component {
    constructor(props) {
        super(props);

        this.cityData = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {};
    }

    onCancel(){
        Actions.pop();
    }

    renderRow(rowData) {

        var isSelected = '';
        if (this.props.selectedCity != null) {
            if(this.props.selectedCity.name == rowData.name) {
                isSelected = '&#10004;';
            }else {
                isSelected = '';
            }
        }
        console.log("Row ");
        return (
            <TouchableOpacity key={rowData.id+''}
                              onPress={() => this.rowPressed(rowData)}
                              underlayColor='#dddddd'>
                <View>
                    <View style={styles.rowContainer}>
                        <View  style={styles.textContainer}>
                            <Text style={styles.title}>{ rowData.name }</Text>
                        </View>
                        <Text style={[styles.title, width = 30]}>{ isSelected }</Text>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        AlertIOS.alert("City", this.props.cityList);
        return(
            <View style={styles.container}>
                <View style={styles.toolBar}>
                    <View style={styles.cancelBox}>
                        <TouchableOpacity onPress={this.onCancel.bind(this)}>
                            <Text style={styles.cancelLabel}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Select City</Text>
                    </View>
                    <View style={styles.doneBox}>
                        <TouchableOpacity>
                            <Text style={styles.doneLabel}></Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }

    rowPressed(rowData) {
        this.props.userAccountActions.onSelectedCity(rowData);
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
        color: '#0080FF',
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
    title: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    }

});

const mapStateToProps = (state) => ({
    cityList : state.userProfile.selectedState.name,
    selectedCity: state.userProfile.selectedCity
});

const mapDispatchToProps = (dispatch) => ({
    'userAccountActions': bindActionCreators(authActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CityListView);