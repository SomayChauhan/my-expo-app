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
} from 'react-native';
import { BottomNavigation, Button, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const MusicRoute = () => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Animated.View
        style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]}
      />
      <Button
        // title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      >
        Toggle
      </Button>
    </View>
  );
};

const AlbumsRoute = () => <View style={{ flex: 1, backgroundColor: 'cyan' }}></View>;

const RecentsRoute = () => <View>Recents</View>;

const NotificationsRoute = () => <View>Notifications</View>;

const TabButton = (props: any) => {
  const { onPress, accessibilityState, route, theme } = props;
  console.log('theme: ', theme);
  const { outerContainerStyle, innderContainerStyle } = route;

  const focused = accessibilityState.selected;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }, outerContainerStyle]}
      >
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              width: '80%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            },
            innderContainerStyle,
          ]}
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
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const BottomNavigationExample = () => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const [index, setIndex] = React.useState(0);

  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue('transparent');
  const homeFlexStyle = useAnimatedStyle(() => {
    return { flex: homeTabFlex.value };
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: homeTabColor.value };
  });

  const albumTabFlex = useSharedValue(1);
  const albumTabColor = useSharedValue('transparent');
  const albumFlexStyle = useAnimatedStyle(() => {
    return { flex: albumTabFlex.value };
  });
  const albumColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: albumTabColor.value };
  });

  const recentsTabFlex = useSharedValue(1);
  const recentsTabColor = useSharedValue('transparent');
  const recentsFlexStyle = useAnimatedStyle(() => {
    return { flex: recentsTabFlex.value };
  });
  const recentsColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: recentsTabColor.value };
  });

  const notificationsTabFlex = useSharedValue(1);
  const notificationsTabColor = useSharedValue('transparent');
  const notificationsFlexStyle = useAnimatedStyle(() => {
    return { flex: notificationsTabFlex.value };
  });

  const notificationsColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: notificationsTabColor.value };
  });

  const [routes] = React.useState([
    {
      key: 'music',
      title: 'Favorites',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
      outerContainerStyle: homeFlexStyle,
      innderContainerStyle: homeColorStyle,
    },
    {
      key: 'albums',
      title: 'Albums',
      focusedIcon: 'album',
      outerContainerStyle: albumFlexStyle,
      innderContainerStyle: albumColorStyle,
    },
    {
      key: 'recents',
      title: 'Recents',
      focusedIcon: 'history',
      outerContainerStyle: recentsFlexStyle,
      innderContainerStyle: recentsColorStyle,
    },
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
      outerContainerStyle: notificationsFlexStyle,
      innderContainerStyle: notificationsColorStyle,
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  React.useEffect(() => {
    if (index == 0) {
      homeTabFlex.value = withTiming(4, { duration: 300 });
      homeTabColor.value = withTiming(theme.colors.secondary, { duration: 300 });
    } else {
      homeTabFlex.value = withTiming(1, { duration: 300 });
      homeTabColor.value = withTiming('transparent', { duration: 300 });
    }
    if (index == 1) {
      albumTabFlex.value = withTiming(4, { duration: 300 });
      albumTabColor.value = withTiming(theme.colors.secondary, { duration: 300 });
    } else {
      albumTabFlex.value = withTiming(1, { duration: 300 });
      albumTabColor.value = withTiming('transparent', { duration: 300 });
    }
    if (index == 2) {
      recentsTabFlex.value = withTiming(4, { duration: 300 });
      recentsTabColor.value = withTiming(theme.colors.secondary, { duration: 300 });
    } else {
      recentsTabFlex.value = withTiming(1, { duration: 300 });
      recentsTabColor.value = withTiming('transparent', { duration: 300 });
    }
    if (index == 3) {
      notificationsTabFlex.value = withTiming(4, { duration: 300 });
      notificationsTabColor.value = withTiming(theme.colors.secondary, { duration: 300 });
    } else {
      notificationsTabFlex.value = withTiming(1, { duration: 300 });
      notificationsTabColor.value = withTiming('transparent', { duration: 300 });
    }
  }, [index]);

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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
});
