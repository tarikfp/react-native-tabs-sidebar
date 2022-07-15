# React Navigation Side Bar &middot; ![npm](https://img.shields.io/npm/v/@tarikfp/react-native-tabs-sidebar)

Wrapper library over the @react-navigation/bottom-tabs. The main purpose of this library is to support displaying tabbar on side.

If you wanted to use sidebar in your tablet/mobile apps, but haven't found a way to achieve it, then this library might be the one that you are looking for.

- Make sure to install required packages as stated in the https://reactnavigation.org/docs/getting-started/ docs.
- Instead of using `@react-navigation/bottom-tabs` you can now instead install this library in order to achieve displaying tabs on the sidebar !

## Usage

Provide `tabBarPosition` prop with the desired value to the screenOptions config. That's it! 🎉

```
import {createBottomTabNavigator} from '@tarikfp/react-native-tabs-sidebar';

    const TabBar = createBottomTabNavigator();

    <TabBar.Navigator
      backBehavior="initialRoute"
      screenOptions={({route}) => ({
        ...otherOptions
        tabBarPosition: "left"
      })}>
      <TabBar.Screen name={RouteNames.Home} component={HomeScreen} />
    </TabBar.Navigator>

```

## Screenshots

### Android Tablet

#### Right sidebar

[![wwuM0v.md.png](https://iili.io/wwuM0v.md.png)](https://freeimage.host/i/wwuM0v)

#### Left sidebar

## [![wwu1sa.md.png](https://iili.io/wwu1sa.md.png)](https://freeimage.host/i/wwu1sa)

### iOS Tablet

#### Right sidebar

[![wwu6eS.md.png](https://iili.io/wwu6eS.md.png)](https://freeimage.host/i/wwu6eS)

#### Left sidebar

[![wwuUg4.md.png](https://iili.io/wwuUg4.md.png)](https://freeimage.host/i/wwuUg4)

### Emulators/Simulators

### Android

[![wwA0pS.md.png](https://iili.io/wwA0pS.md.png)](https://freeimage.host/i/wwA0pS)

#### iOS

[![wwupdQ.md.png](https://iili.io/wwupdQ.md.png)](https://freeimage.host/i/wwupdQ)
