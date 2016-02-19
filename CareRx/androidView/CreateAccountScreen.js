/**
 * Created by synerzip on 14/02/16.
 */
var React = require('react-native');
var {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
    } = React;
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Actions} from 'react-native-router-flux'

class CreateAccountScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    onCancel(){
        Actions.pop();
    }
    onAccountNameSubmit(){
        this.refs.password.focus();
    }
    onPasswordSubmit(){
        this.refs.confirmPassword.focus();
    }
    onConfirmPasswordSubmit(){
        this.refs.email.focus();
    }

    onEmailSubmit(){
        this.refs.confirmEmail.focus();
    }

    onConfirmEmailSubmit(){
        //this.refs.address1.focus();
    }

    onAddressLine1Submit(){
        //this.refs.address2.focus();
    }

    onAddressLine2Submit(){
       this.refs.city.focus();
    }

    onAddressLine2Focus(e){
        var interval = setInterval(()=>{
            clearInterval(interval);
            this.refs.scrollView.scrollToFocusedInput(e,React.findNodeHandle(this.refs.address2),80);
        },0);
    }

    onCitySubmit(){

    }

    onCityFocus(e){
        var interval = setInterval(()=>{
            clearInterval(interval);
            this.refs.scrollView.scrollToFocusedInput(e,React.findNodeHandle(this.refs.city),80);
        },0);

    }


    render(){
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
                        <TouchableOpacity onPress={this.onCancel.bind(this)}>
                            <Text style={styles.doneLabel}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.separator} />
                <KeyboardAwareScrollView style={{flex:1}} ref='scrollView'
                                         automaticallyAdjustContentInsets={false}>
                    <View style={{flex:1}}>
                        <View style={[styles.separator,{marginTop:30}]} />
                        <View style={styles.inputBox}>
                            <TextInput
                                style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                                onChangeText={(username) => this.setState({username})}
                                placeholder="Account Name (a-z,0-9,[_ . , ~ +] )"
                                placeholderTextColor="#CCCCCC"
                                autoCorrect={false}
                                clearButtonMode="always"
                                value={this.state.username}
                                returnKeyType="next"
                                onEndEditing={this.onAccountNameSubmit.bind(this)}
                                selectTextOnFocus
                                enablesReturnKeyAutomatically
                                keyboardAppearance="dark"
                                autoCapitalize="none"
                                />
                            <View style={[styles.separator,{marginLeft:15}]} />
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
                                returnKeyType="next"
                                onEndEditing={this.onPasswordSubmit.bind(this)}
                                selectTextOnFocus
                                enablesReturnKeyAutomatically
                                keyboardAppearance="dark"
                                autoCapitalize="none"
                                />
                            <View style={[styles.separator,{marginLeft:15}]} />
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
                                returnKeyType="next"
                                onEndEditing={this.onConfirmPasswordSubmit.bind(this)}
                                selectTextOnFocus
                                enablesReturnKeyAutomatically
                                keyboardAppearance="dark"
                                autoCapitalize="none"
                                />
                        </View>
                        <View style={[styles.separator]} />

                        <View style={[styles.separator,{marginTop:30}]} />
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
                                returnKeyType="next"
                                onEndEditing={this.onEmailSubmit.bind(this)}
                                selectTextOnFocus
                                enablesReturnKeyAutomatically
                                keyboardAppearance="dark"
                                autoCapitalize="none"
                                />
                            <View style={[styles.separator,{marginLeft:15}]} />
                            <TextInput
                                style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                                onChangeText={(confirmEmail) => this.setState({confirmEmail})}
                                ref="confirmEmail"
                                placeholder="Confirm Email"
                                placeholderTextColor="#CCCCCC"
                                autoCorrect={false}
                                clearButtonMode="always"
                                value={this.state.confirmEmail}
                                returnKeyType="next"
                                onEndEditing={this.onConfirmEmailSubmit.bind(this)}
                                selectTextOnFocus
                                enablesReturnKeyAutomatically
                                keyboardAppearance="dark"
                                autoCapitalize="none"
                                />
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.infoBox}>
                            <Text style={styles.infoLabel}>Contact</Text>
                        </View>
                        <View style={[styles.separator]} />
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
                                keyboardAppearance="dark"
                                autoCapitalize="none"
                                />
                            <View style={[styles.separator,{marginLeft:15}]} />
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
                                keyboardAppearance="dark"
                                autoCapitalize="none"
                                onFocus={this.onAddressLine2Focus.bind(this)}
                                />
                            <View style={[styles.separator,{marginLeft:15}]} />
                            <TextInput
                                style={{height: 40,padding:5,paddingLeft:15,backgroundColor: '#FFFFFF'}}
                                onChangeText={(city) => this.setState({city})}
                                ref="city"
                                placeholder="City"
                                placeholderTextColor="#CCCCCC"
                                autoCorrect={false}
                                clearButtonMode="always"
                                value={this.state.city}
                                returnKeyType="default"
                                onEndEditing={this.onCitySubmit.bind(this)}
                                selectTextOnFocus
                                enablesReturnKeyAutomatically
                                keyboardAppearance="light"
                                autoCapitalize="none"
                                onFocus={this.onCityFocus.bind(this)}
                                />
                        </View>
                        <View style={[styles.separator]} />
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#E9F1F9'
    },
    toolBar:{
        height:40,
        flexDirection:'row'
    },
    cancelBox:{
        padding:10,
        alignSelf:'flex-start',
        flex:0.5
    },
    cancelLabel:{
        color:'#0080FF',
        fontSize:18,
        fontWeight:'bold',
    },
    doneBox:{
        padding:10,
        alignSelf:'flex-end',
        justifyContent:'flex-end',
        flex:0.5
    },
    doneLabel:{
        color:'#CCCCCC',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'right'
    },
    titleBox:{
        padding:10,
        alignSelf:'center',
        alignItems:'center',
        flex:1
    },
    title:{
        color:'#000000',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    },
    separator:{
        backgroundColor:'#dddddd',
        height:1
    },
    inputBox:{
        backgroundColor:'#FFFFFF',
        minHeight:40
    },
    infoBox:{
        padding:10
    },
    infoLabel:{
        color:'#424242',
        fontSize:18
    }
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountScreen);
