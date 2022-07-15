import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = React.PropsWithChildren<{
  tabBarPosition?: 'left' | 'right';
  renderTabBar: () => JSX.Element;
}>;

export default function RenderWithPositionConfig({
  children,
  tabBarPosition,
  renderTabBar,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        { flexDirection: tabBarPosition ? 'row' : 'column' },
      ]}
    >
      {tabBarPosition === 'left' ? renderTabBar() : undefined}
      {children}
      {!tabBarPosition || tabBarPosition === 'right'
        ? renderTabBar()
        : undefined}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
