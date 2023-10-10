import * as React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Platform,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import { BottomNavigation, Button, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { MotiView } from 'moti';

const MusicRoute = () => {
  return <View>Recents</View>;
};

const AlbumsRoute = () => {
  const [visible, setVisible] = React.useState(false);
  function Shape() {
    return (
      <MotiView
        from={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'timing',
        }}
        style={styles.shape}
      />
    );
  }

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <Pressable onPress={toggle} style={styles.container}>
      {visible && <Shape />}
    </Pressable>
  );
};

// const AlbumsRoute = () => <View style={{ flex: 1, backgroundColor: 'cyan' }}></View>;

const RecentsRoute = () => <View>Recents</View>;

const NotificationsRoute = () => <View>Notifications</View>;

const TabButton = (props: any) => {
  const { onPress, accessibilityState, route, theme } = props;

  const focused = accessibilityState.selected;
  console.log('focused: ', focused);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <MotiView
        animate={{
          width: focused ? '60%' : '10%',
          backgroundColor: focused ? theme.colors.secondary : 'white',
        }}
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
        }}
      >
        <FontAwesome
          name={route.focusedIcon}
          size={24}
          color={focused ? 'white' : theme.colors.secondary}
          style={[{ height: 20, width: 20 }]}
        />
        {focused && (
          <Text numberOfLines={1} style={{ marginLeft: 25, color: 'white' }}>
            {route.title}
          </Text>
        )}
      </MotiView>
    </TouchableWithoutFeedback>
  );
};

const BottomNavigationExample = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: 'music',
      title: 'Favorites',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {
      key: 'albums',
      title: 'Albums',
      focusedIcon: 'album',
    },
    {
      key: 'recents',
      title: 'Recents',
      focusedIcon: 'history',
    },
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <View style={styles.screen}>
      <BottomNavigation
        safeAreaInsets={{ bottom: insets.bottom }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        // labelMaxFontSizeMultiplier={2}
        renderScene={renderScene}
        sceneAnimationEnabled={true}
        sceneAnimationType="shifting"
        sceneAnimationEasing={Easing.ease}
        renderTouchable={(props) => <TabButton {...props} theme={theme} />}
      />
    </View>
  );
};

export default BottomNavigationExample;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9c1aff',
  },
});
