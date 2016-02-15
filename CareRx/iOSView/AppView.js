/**
 * Created by synerzip on 09/02/16.
 */
import React, {
    Component,
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
    TouchableOpacity} from 'react-native';

class AppView extends React.Component{
        render(){
            return (
                <View style={styles.container}>
                    <View style={styles.logoBox}>
                        <Image source={require('../common/images/Care-Rx-logo.jpg')}/>
                    </View>
                    <View style={styles.headerBox}>
                        <Text style={styles.textLabel}>Hello!!</Text>
                    </View>
                </View>
            );
        }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20,
        backgroundColor:'#d5e6f5'
    },
    logoBox: {
        flexDirection:'row',
        justifyContent:'center'
    },
    textLabel:{
        fontSize:20,
        color:'#FFFFFF'
    },
    headerBox:{
        backgroundColor:'#00aebf',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:40,
        paddingTop:5,
        height:40
    }
});


export default AppView;