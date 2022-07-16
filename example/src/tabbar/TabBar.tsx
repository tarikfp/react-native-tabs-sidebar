import * as React from 'react';
import {createBottomTabNavigator} from '@tarikfp/react-native-tabs-sidebar';

import {View, Text} from 'react-native';
import {getTabBarIcon} from './utils';

export enum RouteNames {
  Home = 'Home',
  Profile = 'Profile',
  Settings = 'Settings',
  Live = 'Live',
}

type TabBarNavigatorParamList = {
  [RouteNames.Home]: undefined;
  [RouteNames.Profile]: undefined;
  [RouteNames.Settings]: undefined;
  [RouteNames.Live]: undefined;
};

const TabBar = createBottomTabNavigator<TabBarNavigatorParamList>();

export default function AppTabBar() {
  return (
    <TabBar.Navigator
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'grey',
        tabBarPosition: 'left',
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: true,
        tabBarIcon: getTabBarIcon(route.name),
      })}>
      <TabBar.Screen name={RouteNames.Home} component={HomeScreen} />
      <TabBar.Screen name={RouteNames.Profile} component={ProfileScreen} />
      <TabBar.Screen name={RouteNames.Live} component={LiveScreen} />
      <TabBar.Screen name={RouteNames.Settings} component={SettingsScreen} />
    </TabBar.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function LiveScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Live Screen</Text>
    </View>
  );
}
