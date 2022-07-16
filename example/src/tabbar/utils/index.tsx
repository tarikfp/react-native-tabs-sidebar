import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const getTabBarIcon =
  (routeName: string) =>
  (tabBarParams: {focused: boolean; color: string; size: number}) => {
    switch (routeName) {
      case 'Home':
        return (
          <MaterialCommunityIcons
            name="home"
            size={25}
            color={tabBarParams.color}
          />
        );
      case 'Settings':
        return <FontAwesome name="cog" size={25} color={tabBarParams.color} />;

      case 'Live':
        return (
          <MaterialCommunityIcons
            name="youtube-tv"
            size={25}
            color={tabBarParams.color}
          />
        );

      case 'Profile':
        return <FontAwesome name="user" size={25} color={tabBarParams.color} />;

      default:
        return (
          <MaterialCommunityIcons
            name="folder-home"
            size={25}
            color={tabBarParams.color}
          />
        );
    }
  };
