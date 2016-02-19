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
    Animated,
    TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux'
import MedicationProfile from './MedicationProfile';
import AllergiesView from './Allergies';
import config from '../common/config';

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
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            fadeAnim: new Animated.Value(0),
            originalNextOpacity: new Animated.Value(1)
        };
    }

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

    _onChange(event) {
        LayoutAnimation.linear();
        this.setState({
            selectedIndex: event.nativeEvent.selectedSegmentIndex,
        });
    }

    _onValueChange(value) {

        console.log(value);
        this.setState({
            selectedCategory: value,
        });
    }

    hideProfileSelectionOverlay() {
        this.setState({showOverlay: false});
        Animated.timing(
            this.state.originalNextOpacity,
            {toValue: 1}
        ).start();
        Animated.timing(          // Uses easing functions
            this.state.fadeAnim,    // The value to drive
            {toValue: 0}         // Configuration
        ).start();                // Don't forget start!
    }

    showProfileSelectionOverlay() {

        //this.setState({showOverlay: true});
        //
        //Animated.timing(
        //    this.state.originalNextOpacity,
        //    {toValue: 0}
        //).start();
        //Animated.timing(          // Uses easing functions
        //    this.state.fadeAnim,    // The value to drive
        //    {toValue: 0.8}         // Configuration
        //).start();                // Don't forget start!


    }

    render() {
        var selectedOption = null;
        if (this.state.selectedIndex == 0) {
            selectedOption = <MedicationProfile />;
        } else if (this.state.selectedIndex == 1){
            selectedOption = <AllergiesView />;
        } else {
            selectedOption = <View/>;
        }

        //var overLay = <View />;
        //if (this.state.showOverlay) {
        //    overLay = <Animated.View style={[styles.nextProfileOverlay,{opacity: this.state.fadeAnim}]}>
        //        <TouchableOpacity style={[styles.profileSelectBox]}
        //                          onPress={this.hideProfileSelectionOverlay.bind(this)}>
        //        </TouchableOpacity>
        //    </Animated.View>;
        //}
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
                                        <Image style={{width:30,height:30}}
                                               source={require('../common/images/edit.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.separator,{backgroundColor:config.profileSeparatorColor}]}/>
                            <View style={styles.profileInfoBottomBox}>
                                <TouchableOpacity style={[styles.refillCountBox,{flex:0.7}]}>
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
                                <View
                                    style={[styles.horizontalSeparator,{backgroundColor:config.profileSeparatorColor}]}/>
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
                        <Animated.View style={[styles.nextProfile,{flex:0.2,opacity:this.state.originalNextOpacity}]}>
                            <TouchableOpacity style={[styles.nextProfileTouch,{flex:1}]}
                                              onPress={this.showProfileSelectionOverlay.bind(this)}>
                                <Image style={{width:40,height:40}} source={require('../common/images/plus.png')}/>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                    <View style={styles.separator}/>
                    <View style={{flex:1}}>
                        <View style={{margin: 10}}>
                            <SegmentedControlIOS tintColor={config.segmentedTintColor}
                                                 style={{backgroundColor:config.segmentedBackgroundColor}}
                                                 selectedIndex={this.state.selectedIndex}
                                                 values={['Medications', 'Allergies','Lab Reports']}
                                                 onChange={this._onChange.bind(this)}/>
                        </View>
                        <View style={{flex:1}}>
                            {selectedOption}
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

export default ProfilesView;