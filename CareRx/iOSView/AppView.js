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
import StoreView from './StoreView';
import MoreOptions from './MoreOptions';
import HistoryView from './HistoryView';
import config from '../common/config';

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
                tintColor={config.tabTintColor}
                barTintColor={config.tabBarTintColor}>
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
                    icon={require('../common/images/store.png')}
                    selected={this.state.selectedTab === 'stores'}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'stores'
                        });
                      }}>
                    <StoreView />
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
                    <HistoryView />
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
                    <MoreOptions />
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