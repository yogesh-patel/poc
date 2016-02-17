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
    TabBarIOS,
    AlertIOS,
    TouchableOpacity} from 'react-native';

import ProfilesView from './ProfilesView';

class AppView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'profile'
        };
    }
    render() {
        return (
            <TabBarIOS
                tintColor="#0080FF"
                barTintColor="#E9F1F9">
                <TabBarIOS.Item
                    title="Profiles"
                    icon={require('../common/images/profile.png')}
                    selected={this.state.selectedTab === 'profile'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'profile',
                        });
                      }}>
                    <ProfilesView />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Stores"
                    icon={require('../common/images/stores.png')}
                    selected={this.state.selectedTab === 'stores'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'stores'
                        });
                      }}>
                    <View />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('../common/images/transactions.png')}
                    title="History"
                    selected={this.state.selectedTab === 'transactions'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'transactions'
                        });
                      }}>
                    <View />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    icon={require('../common/images/more.png')}
                    title="More"
                    selected={this.state.selectedTab === 'more'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'more'
                        });
                      }}>
                    <View />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }

}

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});


export default AppView;