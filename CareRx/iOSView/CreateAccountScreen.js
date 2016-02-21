/**
 * Created by synerzip on 14/02/16.
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
    } = React;

import DateOfBirthComponent from './DateOfBirthComponent';
import config from '../common/config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Actions} from 'react-native-router-flux'
import * as authActionCreator from '../common/actions/auth';

class CreateAccountScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phonePadOpen: false,
            rxNoPadOpen: false,
            zipPadOpen: false
        }
    }

    componentDidMount(){
        this.props.userAccountActions.getStores();
    }
    onCancel() {
        Actions.pop();
    }

    checkDoneEnableState() {
        if (this.state.username &&
            this.state.password &&
            this.state.confirmPassword &&
            this.state.firstName &&
            this.state.lastName &&
            this.state.email &&
            this.state.confirmEmail &&

            this.props.selectedStore) {
            this.setState({enableDone: true});
        } else {
            this.setState({enableDone: false});
        }
    }

    onDone() {
        if (this.state.password !=
            this.state.confirmPassword) {
            AlertIOS.alert(
                'Invalid Password',
                'Mismatch Passwords',
                [
                    {
                        text: 'OK', onPress: value => {
                        var interval = setInterval(()=> {
                            clearInterval(interval);
                            this.refs.password.focus();
                        }, 5);

                    }
                    }
                ]
            )
            return;
        }

        if (this.state.email !=
            this.state.confirmEmail) {
            AlertIOS.alert(
                'Invalid Email',
                'Mismatch Emails',
                [
                    {
                        text: 'OK', onPress: value => {
                        var interval = setInterval(()=> {
                            clearInterval(interval);
                            this.refs.email.focus();
                        }, 5);
                    }
                    }
                ]
            )
            return;
        }

        this.props.userAccountActions.createAccount({
            accountName: this.state.username,
            password: this.state.password,
            passwordConfirmation: this.state.confirmPassword,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthDate: this.state.birthDate,
            email: this.state.email,
            confirmEmail: this.state.confirmEmail,
            phoneNumber: this.state.phoneno,
            rxNumber: this.state.rxNumber,
            selectedStoreId: this.props.selectedStore.ncpdpId,
            address1: this.state.address1,
            address2: this.state.address2,
            state: this.props.selectedState ? this.props.selectedState.name : null,
            city: this.props.selectedCity,
            zipCode: this.state.zipcode
        });
    }

    onAccountNameFocus(e) {
        this.refs.scrollView.scrollToFocusedInput(e, React.findNodeHandle(this.refs.accountName), 0);
    }

    onPasswordFocus(e){
        this.refs.scrollView.scrollToFocusedInput(e, React.findNodeHandle(this.refs.password), 0);
    }

    onAccountNameSubmit() {
        this.checkDoneEnableState();
    }

    onPasswordSubmit() {
        this.checkDoneEnableState();
    }

    onConfirmPasswordSubmit() {
        this.checkDoneEnableState();
    }

    onFirstNameSubmit() {
        this.checkDoneEnableState();
    }

    onLastNameSubmit() {
        this.checkDoneEnableState();
    }


    onEmailSubmit() {
        this.checkDoneEnableState();
    }

    onConfirmEmailSubmit() {
        this.checkDoneEnableState();
    }

    onAddressLine1Submit() {

    }

    onAddressLine2Submit() {
        //this.refs.city.focus();
    }

    onAddressLine1Focus(e) {
        var interval = setInterval(()=> {
            clearInterval(interval);
            this.refs.scrollView.scrollToFocusedInput(e, React.findNodeHandle(this.refs.address1), 80);
        }, 0);
    }

    onAddressLine2Focus(e) {
        var interval = setInterval(()=> {
            clearInterval(interval);
            this.refs.scrollView.scrollToFocusedInput(e, React.findNodeHandle(this.refs.address2), 80);
        }, 0);
    }

    onConfirmEmailFocus(e) {
        var interval = setInterval(()=> {
            clearInterval(interval);
            this.refs.scrollView.scrollToFocusedInput(e, React.findNodeHandle(this.refs.confirmEmail), 80);
        }, 0);
    }

    onEmailFocus(e) {
        var interval = setInterval(()=> {
            clearInterval(interval);
            this.refs.scrollView.scrollToFocusedInput(e, React.findNodeHandle(this.refs.email), 80);
        }, 0);
    }

    onStateSubmit() {
        Actions.showStatesList();
    }

    /* onStateFocus(e){
     var interval = setInterval(()=>{
     clearInterval(interval);
     this.refs.scrollView.scrollToFocusedInput(e,React.findNodeHandle(this.refs.state),80);
     },0);

     }
     */
    onCitySubmit() {
        if (this.props.selectedState == null) {
            //Alert to select state first
            AlertIOS.alert("State",
                "Please select state.");
        } else {
            Actions.showCityList();
        }
    }


    onCityFocus(e) {
        var interval = setInterval(()=> {
            clearInterval(interval);
            this.refs.scrollView.scrollToFocusedInput(e, React.findNodeHandle(this.refs.city), 80);
        }, 0);

    }

    onZipCodeSubmit() {

    }

    onZipCodeFocus(e) {
        var interval = setInterval(()=> {
            clearInterval(interval);
            this.refs.scrollView.scrollToFocusedInput(e, React.findNodeHandle(this.refs.zipcode), 120);
            this.setState({zipPadOpen: true});
        }, 0);

    }

    onZipCodeFocusLost(e) {
        this.setState({zipPadOpen: false});
    }

    onZipcodeDone() {
        this.setState({zipPadOpen: false});
    }

    onPhoneNoSubmit() {
        this.checkDoneEnableState();
    }

    onPhoneNoFocus(e) {
        var interval = setInterval(()=> {
            clearInterval(interval);
            this.refs.scrollView.scrollToFocusedInput(e, React.findNodeHandle(this.refs.phoneno), 120);
            this.setState({phonePadOpen: true});
        }, 0);
    }

    onPhoneNoFocusLost(e) {
        this.setState({phonePadOpen: false});
    }

    onRxNumberFocusLost(e) {
        this.setState({rxNoPadOpen: false});
    }

    onPhoneNoDone() {
        this.setState({phonePadOpen: false});
        this.checkDoneEnableState();
    }

    onRxNoDone() {
        this.setState({rxNoPadOpen: false});
        this.checkDoneEnableState();
    }

    onBirthDaySubmit(birthDate) {
        this.state.birthDate = birthDate;
        this.checkDoneEnableState();
    }


    onRxNumberSubmit() {
        this.checkDoneEnableState();
    }

    onRxNumberFocus(e) {
        var interval = setInterval(()=> {
            clearInterval(interval);
            this.refs.scrollView.scrollToFocusedInput(e, React.findNodeHandle(this.refs.rxnumber), 120);
            this.setState({rxNoPadOpen: true});
        }, 0);

    }

    onStoreSubmit() {
        Actions.storeSelection();
    }

    onStoreFocus(e) {
        var interval = setInterval(()=> {
            clearInterval(interval);
            this.refs.scrollView.scrollToFocusedInput(e, React.findNodeHandle(this.refs.store), 80);
        }, 0);

    }

    onStoreSelected() {
        this.checkDoneEnableState();
    }


    render() {
        var doneButton = null;
        if (this.state.enableDone) {
            doneButton = <TouchableOpacity onPress={this.onDone.bind(this)}>
                <Text style={[styles.doneLabel,{color:config.segmentedTintColor}]}>Done</Text>
            </TouchableOpacity>;
        } else {
            doneButton = <Text style={[styles.doneLabel]}>Done</Text>;
        }
        var selectedState = this.props.selectedState == null ? "Select State" : this.props.selectedState.name;
        var stateValueColor = this.props.selectedState == null ? "#CCCCCC" : '#000000';
        var selectedCity = this.props.selectedCity == null ? "Select City" : this.props.selectedCity;
        var cityValueColor = this.props.selectedCity == null ? "#CCCCCC" : '#000000';

        var selectedStore = this.props.selectedStore == null ? "Select Store" : this.props.selectedStore.displayName;
        var storeValueColor = this.props.selectedStore == null ? "#CCCCCC" : '#000000';

        if (this.props.duplicateAccount) {
            AlertIOS.alert(
                'Duplicate Account',
                'Duplicate Account Name',
                [
                    {
                        text: 'OK', onPress: value => {
                        this.refs.accountName.focus();

                    }
                    }
                ]
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.toolBar}>
                    <View style={styles.cancelBox}>
                        <TouchableOpacity onPress={this.onCancel.bind(this)}>
                            <Text style={styles.cancelLabel}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Create Account</Text>
                    </View>
                    <View style={styles.doneBox}>
                        {doneButton}
                    </View>
                </View>
                <View style={styles.separator}/>
                <KeyboardAwareScrollView style={{flex:1}} ref='scrollView'
                                         automaticallyAdjustContentInsets={false}>


                    <View style={styles.infoBox}>
                        <Text style={styles.infoLabel}>Account Info</Text>
                    </View>
                    <View style={[styles.separator]}/>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(username) => this.setState({username})}
                            placeholder="Account Name (a-z,0-9,[_ . , ~ +] )"
                            ref="accountName"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            value={this.state.username}
                            returnKeyType="default"
                            onEndEditing={this.onAccountNameSubmit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            autoCapitalize="none"
                            onFocus={this.onAccountNameFocus.bind(this)}
                            />
                        <View style={[styles.separator,{marginLeft:15}]}/>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(password) => this.setState({password})}
                            ref="password"
                            placeholder="Password (6 to 15 characters)"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            secureTextEntry
                            value={this.state.password}
                            returnKeyType="default"
                            onEndEditing={this.onPasswordSubmit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            autoCapitalize="none"
                            onFocus={this.onPasswordFocus.bind(this)}
                            />
                        <View style={[styles.separator,{marginLeft:15}]}/>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                            placeholder="Confirm Password"
                            ref="confirmPassword"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            secureTextEntry
                            value={this.state.confirmPassword}
                            returnKeyType="default"
                            onEndEditing={this.onConfirmPasswordSubmit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            autoCapitalize="none"
                            />
                    </View>

                    <View style={[styles.separator]}/>
                    <View style={styles.infoBox}>
                        <Text style={styles.infoLabel}>Personal</Text>
                    </View>
                    <View style={[styles.separator]}/>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(firstName) => this.setState({firstName})}
                            placeholder="First Name"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            value={this.state.firstName}
                            returnKeyType="default"
                            onEndEditing={this.onAccountNameSubmit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            autoCapitalize="none"
                            />
                        <View style={[styles.separator,{marginLeft:15}]}/>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(lastName) => this.setState({lastName})}
                            placeholder="Last Name"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            value={this.state.lastName}
                            returnKeyType="default"
                            onEndEditing={this.onAccountNameSubmit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            autoCapitalize="none"
                            />
                        <View style={[styles.separator,{marginLeft:15}]}/>
                        <DateOfBirthComponent onBirthDaySubmit={this.onBirthDaySubmit.bind(this)}/>
                    </View>


                    <View style={[styles.separator]}/>
                    <View style={styles.infoBox}>
                        <Text style={styles.infoLabel}>Contact</Text>
                    </View>
                    <View style={[styles.separator]}/>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(email) => this.setState({email})}
                            placeholder="Email Id"
                            ref="email"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            value={this.state.email}
                            returnKeyType="default"
                            onEndEditing={this.onEmailSubmit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            keyboardType='email-address'
                            autoCapitalize="none"
                            onFocus={this.onEmailFocus.bind(this)}
                            />
                        <View style={[styles.separator,{marginLeft:15}]}/>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(confirmEmail) => this.setState({confirmEmail})}
                            ref="confirmEmail"
                            placeholder="Confirm Email"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            value={this.state.confirmEmail}
                            returnKeyType="default"
                            onEndEditing={this.onConfirmEmailSubmit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            keyboardType='email-address'
                            autoCapitalize="none"
                            onFocus={this.onConfirmEmailFocus.bind(this)}
                            />
                        <View style={[styles.separator,{marginLeft:15}]}/>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(phoneno) => this.setState({phoneno})}
                            ref="phoneno"
                            placeholder="Phone Number"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            value={this.state.phoneno}
                            returnKeyType="default"
                            onEndEditing={this.onPhoneNoSubmit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            keyboardType="numeric"
                            autoCapitalize="none"
                            onFocus={this.onPhoneNoFocus.bind(this)}
                            onBlur={this.onPhoneNoFocusLost.bind(this)}
                            />
                        {
                            this.state.phonePadOpen
                                ?
                                <View
                                    style={{height: 40,paddingTop:10,paddingRight:10,flexDirection:'row',justifyContent:'flex-end',paddingLeft:15,backgroundColor: '#CCCCCC'}}>
                                    <TouchableOpacity onPress={this.onPhoneNoDone.bind(this)}>
                                        <Text style={{fontSize:17,color:config.segmentedTintColor}}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View />
                        }
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.infoBox}>
                        <Text style={styles.infoLabel}>Rx Detail</Text>
                    </View>
                    <View style={[styles.separator]}/>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(rxnumber) => this.setState({rxnumber})}
                            ref="rxnumber"
                            placeholder="Rx Number"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            value={this.state.rxnumber}
                            returnKeyType="default"
                            onEndEditing={this.onRxNumberSubmit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            keyboardType="numeric"
                            autoCapitalize="none"
                            onFocus={this.onRxNumberFocus.bind(this)}
                            onBlur={this.onRxNumberFocusLost.bind(this)}
                            />
                        {
                            this.state.rxNoPadOpen
                                ?
                                <View
                                    style={{height: 40,paddingTop:10,paddingRight:10,flexDirection:'row',justifyContent:'flex-end',paddingLeft:15,backgroundColor: '#CCCCCC'}}>
                                    <TouchableOpacity onPress={this.onRxNoDone.bind(this)}>
                                        <Text style={{fontSize:17,color:config.segmentedTintColor}}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View />
                        }
                        <View style={[styles.separator]}/>

                        <View style={{flex:1}}>
                            <View style={[styles.fieldContainer]}>
                                <View style={styles.fieldLabelBox}>
                                    <Text style={styles.fieldLabel}>Store</Text>
                                </View>
                                <TouchableOpacity style={styles.dateOfBirth}
                                                  onPress={this.onStoreSubmit.bind(this)}>
                                    <View style={styles.dateOfBirth}>
                                        <Text style={[styles.valueLabel,{color:storeValueColor}]}>{selectedStore}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.separator]}/>
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={styles.infoLabel}>Address</Text>
                    </View>
                    <View style={[styles.separator]}/>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(address1) => this.setState({address1})}
                            placeholder="Address Line 1"
                            ref="address1"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            value={this.state.address1}
                            returnKeyType="default"
                            onEndEditing={this.onAddressLine1Submit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            autoCapitalize="none"
                            onFocus={this.onAddressLine1Focus.bind(this)}
                            />
                        <View style={[styles.separator,{marginLeft:15}]}/>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(address2) => this.setState({address2})}
                            ref="address2"
                            placeholder="Address Line 2"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            value={this.state.address2}
                            returnKeyType="default"
                            onEndEditing={this.onAddressLine2Submit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            autoCapitalize="none"
                            onFocus={this.onAddressLine2Focus.bind(this)}
                            />
                        <View style={[styles.separator,{marginLeft:15}]}/>

                        <View style={{flex:1}}>
                            <View style={[styles.fieldContainer]}>
                                <View style={styles.fieldLabelBox}>
                                    <Text style={styles.fieldLabel}>State</Text>
                                </View>
                                <TouchableOpacity style={styles.dateOfBirth}
                                                  onPress={this.onStateSubmit.bind(this)}>
                                    <View style={styles.dateOfBirth}>
                                        <Text style={[styles.valueLabel,{color:stateValueColor}]}>{selectedState}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>


                        {/*<TouchableOpacity style={{height: 40,padding:5,backgroundColor: '#FFFFFF'}}
                         onPress={this.onStateSubmit.bind(this)}>
                         <Text
                         style={{height: 40,padding:5,paddingLeft:10,color: '#CCCCCC', fontSize: 17}}>{ selectedState }</Text>
                         </TouchableOpacity>*/}

                        <View style={[styles.separator,{marginLeft:15}]}/>

                        <View style={[styles.fieldContainer]}>
                            <View style={styles.fieldLabelBox}>
                                <Text style={styles.fieldLabel}>City</Text>
                            </View>
                            <TouchableOpacity style={styles.dateOfBirth}
                                              onPress={this.onCitySubmit.bind(this)}>
                                <View style={styles.dateOfBirth}>
                                    <Text style={[styles.valueLabel,{color:cityValueColor}]}>{selectedCity}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/*<TouchableOpacity style={{height: 40,padding:5,backgroundColor: '#FFFFFF'}}
                         onPress={this.onCitySubmit.bind(this)}>
                         <Text
                         style={{height: 40,padding:5,paddingLeft:10,color: '#CCCCCC', fontSize: 17}}>{ selectedCity }</Text>
                         </TouchableOpacity>*/}
                        <View style={[styles.separator,{marginLeft:15}]}/>
                        <TextInput
                            style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                            onChangeText={(zipcode) => this.setState({zipcode})}
                            ref="zipcode"
                            placeholder="Zip Code"
                            placeholderTextColor="#CCCCCC"
                            autoCorrect={false}
                            clearButtonMode="always"
                            value={this.state.zipcode}
                            returnKeyType="default"
                            onEndEditing={this.onZipCodeSubmit.bind(this)}
                            selectTextOnFocus
                            enablesReturnKeyAutomatically
                            keyboardAppearance="light"
                            keyboardType="numeric"
                            autoCapitalize="none"
                            onFocus={this.onZipCodeFocus.bind(this)}
                            onBlur={this.onZipCodeFocusLost.bind(this)}
                            />
                        {
                            this.state.zipPadOpen
                                ?
                                <View
                                    style={{height: 40,paddingTop:10,paddingRight:10,flexDirection:'row',
                                    justifyContent:'flex-end',paddingLeft:15,backgroundColor: '#CCCCCC'}}>
                                    <TouchableOpacity onPress={this.onZipcodeDone.bind(this)}>
                                        <Text style={{fontSize:17,color:config.segmentedTintColor}}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                                :
                                <View />
                        }

                    </View>
                    <View style={[styles.separator]}/>

                </KeyboardAwareScrollView>
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
    fieldContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 15
    },
    fieldLabelBox: {
        alignSelf: 'flex-start',
        width: 100
    },
    dateOfBirth: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',

    },
    fieldLabel: {
        color: '#000000',
        fontSize: 17
    },
    valueLabel: {
        fontSize: 17
    }
});

const mapStateToProps = (state) => ({
    selectedState: state.userProfile.selectedState,
    selectedCity: state.userProfile.selectedCity,
    selectedStore: state.stores.selectedStore,
    duplicateAccount: state.userProfile.duplicateAccount
});

const mapDispatchToProps = (dispatch) => ({
    'userAccountActions': bindActionCreators(authActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountScreen);
