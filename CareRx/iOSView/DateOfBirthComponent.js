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
    DatePickerIOS
    } = React;

import config from '../common/config';
import moment from 'moment';
class DateOfBirthComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pickerOpened: false,
            date: moment().subtract(18,'years').toDate(),
            selectedDate:null
        }
    }

    onOpen() {
        this.setState({pickerOpened: !this.state.pickerOpened});
    }

    onDateChange(date){
        var selectedDate = moment(date.getTime()).format('MM/DD/YYYY');
        console.log(selectedDate);
        this.setState({date: date,selectedDate:selectedDate});
        this.props.onBirthDaySubmit(selectedDate);
    }
    render() {
        var selectedDate = 'Select Birthday';
        var valueColor = '#CCCCCC';
        var datePicker = <View />;
        if (this.state.pickerOpened) {
            valueColor = config.segmentedTintColor
            var minDate = moment().subtract(18,'years');
            datePicker = <DatePickerIOS
                date={this.state.date}
                maximumDate={minDate.toDate()}
                mode="date"
                onDateChange={this.onDateChange.bind(this)}
                />;

        }else if(this.state.selectedDate){
            valueColor = '#000000';
        }

        if(this.state.selectedDate){
            selectedDate = this.state.selectedDate;
        }

        return (
            <View style={{flex:1}}>
                <View style={[styles.container]}>
                    <View style={styles.fieldLabelBox}>
                        <Text style={styles.fieldLabel}>Birthday</Text>
                    </View>
                    <TouchableOpacity style={styles.dateOfBirth} onPress={this.onOpen.bind(this)}>
                        <View style={styles.dateOfBirth}>
                            <Text style={[styles.valueLabel,{color:valueColor}]}>{selectedDate}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                {datePicker}
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
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
export default DateOfBirthComponent;