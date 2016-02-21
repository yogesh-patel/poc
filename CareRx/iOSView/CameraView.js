/**
 * Created by synerzip on 20/02/16.
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
    Dimensions
    } = React;

import Camera from 'react-native-camera';
import config from '../common/config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActionCreator from '../common/actions/auth';
import * as prescriptionActionCreator from '../common/actions/prescription';
import {Actions} from 'react-native-router-flux'

class CameraView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cameraFlip:Camera.constants.Type.back
        }
    }
    takePicture() {
        this.camera.capture()
            .then((data) => {
                this.props.prescriptionActions.onProfilePicCaptured(data);
                Actions.pop();
                console.log(data)
            })
            .catch(err => console.error(err));
    }

    onCancel(){
        Actions.pop();
    }

    flipCamera(){
        var caleraFlip = null;
        if(this.state.cameraFlip == Camera.constants.Type.back){
            caleraFlip = Camera.constants.Type.front
        }else{
            caleraFlip = Camera.constants.Type.back;
        }

        this.setState({cameraFlip:caleraFlip});
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
            this.camera = cam;
          }}
                    style={styles.preview}
                    captureTarget={Camera.constants.CaptureTarget.disk}
                    type={this.state.cameraFlip}
                    aspect={Camera.constants.Aspect.Fill}>

                    <View style={styles.flipCamera}>
                        <TouchableOpacity onPress={this.flipCamera.bind(this)}>
                            <Image style={{width:50,height:50}} source={require('../common/images/flipCamera.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cameraCapture}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)}>
                            <Image style={{width:50,height:50}} source={require('../common/images/cameraCapture.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cancelButtonBox}>
                        <TouchableOpacity onPress={this.onCancel.bind(this)}>
                            <Text style={styles.cancelLabel}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
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
    preview: {
        flex: 1,
        backgroundColor:'#000000',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
    flipCamera:{
        position: 'absolute',
        top: 10,
        right: 20
    },
    cameraCapture: {
        position: 'absolute',
        bottom: 10,
        right: (Dimensions.get('window').width / 2) - 25

    },
    cancelButtonBox: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'transparent',
        right: 20
    },
    cancelLabel: {
        fontSize: 20,
        color: config.tabTintColor
    }
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    'prescriptionActions': bindActionCreators(prescriptionActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraView);