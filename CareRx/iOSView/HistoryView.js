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
    AlertIOS,
    Animated,
    TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import config from '../common/config';

class HistoryView extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Image style={{width:120,height:38,marginLeft:5}} source={require('../common/images/logoNew.png')}/>

                <View style={{flex:1,marginTop:10}}>
                    <View style={styles.separator}/>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        backgroundColor: config.backgroundColor
    },
    profileBox: {
        flexDirection: 'row',
        padding: 5,
        flex: 0.2,
        backgroundColor: '#FFFFFF'
    },
    profileImageBox: {
        width: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator: {
        backgroundColor: '#dddddd',
        height: 1
    },
    horizontalSeparator: {
        backgroundColor: '#dddddd',
        width: 1,
        marginTop: 3
    },
    profileName: {
        fontSize: 18,
        paddingTop: 15,
        color: config.profileNameColor
    },
    profileInfoTopBox: {
        flex: 0.5,
        flexDirection: 'row',
    },
    profileInfoBottomBox: {
        flex: 0.5,
        flexDirection: 'row',
    },
    refillCountBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.5
    },
    refillCount: {
        flex: 0.6
    },
    refillCountLabel: {
        flex: 0.4
    },
    countLabel: {
        fontSize: 24,
        color: config.segmentedTintColor
    },
    labelText: {
        fontSize: 13,
        color: config.profileSubTitleColor
    },
    profileNameBox: {
        alignSelf: 'flex-start',
        flex: 1
    },
    editIconBox: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.2
    },
    nextProfile: {
        backgroundColor: config.nextProfileBackColor,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 0,
        borderWidth: 1,
        borderColor: config.nextProfileBackColor,
        marginRight: -10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10
    },
    nextProfileTouch: {
        borderTopLeftRadius: 60,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    nextProfileOverlay: {
        backgroundColor: config.nextProfileBackColor,
        borderTopLeftRadius: 150,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 0,
        borderWidth: 1,
        borderColor: config.nextProfileBackColor,
        marginRight: -10,
        flexDirection: 'column',
        paddingLeft: 10,
        position: 'absolute',
        right: 0,
        top: 20,
        height: 300,
        width: 150
    },
    nextProfileTouchOverlay: {
        borderTopLeftRadius: 150,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 0,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    profileSelectBox: {
        width: 50,
        height: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor:'000000',
        position:'absolute',
        top:30,
    },

    moreProfileLabel: {
        fontSize: 24,
        color: '#dddddd'
    }
});

export default HistoryView;