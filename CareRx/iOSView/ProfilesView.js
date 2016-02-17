/**
 * Created by synerzip on 16/02/16.
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
import MedicationProfile from './MedicationProfile';

var BUTTONS = [
    'Take Photo',
    'Choose Existing',
    'Delete',
    'Cancel',
];
var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 3;

var EDIT_BUTTONS = [
    'Edit Profile',
    'Update Store',
    'Cancel'
];
var EDIT_CANCEL_INDEX = 2;

class ProfilesView extends React.Component {
    showActionSheet() {
        ActionSheetIOS.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
            },
            (buttonIndex) => {
                this.setState({clicked: BUTTONS[buttonIndex]});
            });
    }

    showActionSheetForEdit() {
        ActionSheetIOS.showActionSheetWithOptions({
                options: EDIT_BUTTONS,
                cancelButtonIndex: EDIT_CANCEL_INDEX
            },
            (buttonIndex) => {
                //this.setState({clicked: EDIT_BUTTONS[buttonIndex]});
                if (buttonIndex == 0) {
                    Actions.createAccount();
                }
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{width:120,height:38,marginLeft:5}} source={require('../common/images/logoNew.png')}/>

                <View style={{flex:1,marginTop:10}}>
                    <View style={styles.separator}/>
                    <View style={styles.profileBox}>
                        <View style={styles.profileImageBox}>
                            <TouchableOpacity onPress={this.showActionSheet.bind(this)}>
                                <Image source={require('../common/images/profileImage.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                            <View style={styles.profileInfoTopBox}>
                                <View style={styles.profileNameBox}>
                                    <Text style={styles.profileName}>Yogesh Patel</Text>
                                </View>
                                <View style={styles.editIconBox}>
                                    <TouchableOpacity style={[styles.editIconBox,{flex:1}]}
                                                      onPress={this.showActionSheetForEdit.bind(this)}>
                                        <Image style={{width:22,height:22}}
                                               source={require('../common/images/edit.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.separator,{backgroundColor:'#E9F1F9'}]}/>
                            <View style={styles.profileInfoBottomBox}>
                                <TouchableOpacity style={styles.refillCountBox}>
                                    <View style={[styles.refillCountBox,{flex:1}]}>
                                        <View style={styles.refillCount}>
                                            <Text style={styles.countLabel}>
                                                12
                                            </Text>
                                        </View>
                                        <View style={styles.refillCountLabel}>
                                            <Text style={styles.labelText}>
                                                Refill Reminder
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.horizontalSeparator}/>
                                <TouchableOpacity style={styles.refillCountBox}>
                                    <View style={[styles.refillCountBox,{flex:1}]}>
                                        <View style={styles.refillCount}>
                                            {/*<Text style={styles.countLabel}>
                                             65%
                                             </Text>*/}
                                            <Image style={{width:22,height:22,marginTop:4}}
                                                   source={require('../common/images/setting.png')}/>
                                        </View>
                                        <View style={styles.refillCountLabel}>
                                            <Text style={styles.labelText}>
                                                PDC
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.nextProfile,{width:50}]}>
                            <TouchableOpacity style={[styles.nextProfileTouch,{flex:1}]}
                                              onPress={this.showActionSheetForEdit.bind(this)}>
                                <Image style={{width:25,height:25}} source={require('../common/images/plus.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                    <View style={{flex:1}}>
                        <View style={{margin: 10}}>
                            <SegmentedControlIOS tintColor='#2090CC'
                                                 selectedIndex={0}
                                                 values={['Medications', 'Allergies','Lab Reports']}/>
                        </View>
                        <View style={{flex:1}}>
                            <MedicationProfile />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        backgroundColor: '#E9F1F9'
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
        paddingTop: 5
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
        color: '#2090CC'
    },
    labelText: {
        fontSize: 13,
        color:'#585858'
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
        backgroundColor: '#CCCCCC',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 0,
        borderWidth: 1,
        borderColor: '#dddddd',
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
    moreProfileLabel: {
        fontSize: 24,
        color: '#dddddd'
    }
});

export default ProfilesView;