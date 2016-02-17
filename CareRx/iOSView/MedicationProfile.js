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
    AlertIOS,
    TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'

class MedicationProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSearch() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolBar}>
                    <TouchableOpacity style={styles.addOption}>
                        <View style={styles.addOption}>
                            <Image style={{width:20,height:20}} source={require('../common/images/search.png')}/>
                            <Text style={styles.optionText}>Search</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.horizontalSeparator}/>
                    <TouchableOpacity style={styles.addOption}>
                        <View style={styles.addOption}>
                            <Image style={{width:20,height:20}} source={require('../common/images/print.png')}/>
                            <Text style={styles.optionText}>Print</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.horizontalSeparator}/>
                    <TouchableOpacity style={styles.addOption}>
                        <View style={styles.addOption}>
                            <Image style={{width:20,height:20}} source={require('../common/images/addOption.png')}/>
                            <Text style={styles.optionText}>Add</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.separator,{marginLeft: 10,marginRight: 10,backgroundColor:'#E9F1F9'}]}/>
                <View style={styles.listViewBox}>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0
    },
    toolBar: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#FFFFFF',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 3
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
    }
});

export default MedicationProfile;