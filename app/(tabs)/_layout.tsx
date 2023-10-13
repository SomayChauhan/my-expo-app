import * as React from 'react';
import { View, StyleSheet, Easing, Animated } from 'react-native';
import { BottomNavigation, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SafeAreaView } from 'moti';
import TabOneScreen from './one';
import TabTwoScreen from './two';
import Header from '../../components/Header';

const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 64);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 64],
    outputRange: [0, -64],
  });

  return (
    <SafeAreaView style={styles.screen}>
      <Header translateY={translateY} />
      <Animated.ScrollView
        scrollEventThrottle={1}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        <View style={{ height: 64 }}></View>
        {children}
      </Animated.ScrollView>
    </SafeAreaView>
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
    },
    {
      key: 'albums',
      title: 'Albums',
      focusedIcon: 'home',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: () => (
      <ScreenWrapper>
        <TabOneScreen />
      </ScreenWrapper>
    ),
    albums: () => (
      <ScreenWrapper>
        <TabTwoScreen />
      </ScreenWrapper>
    ),
  });

  return (
    <BottomNavigation
      safeAreaInsets={{ bottom: insets.bottom }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      labelMaxFontSizeMultiplier={2}
      renderScene={renderScene}
      sceneAnimationEnabled={true}
      sceneAnimationType="shifting"
      sceneAnimationEasing={Easing.ease}
      keyboardHidesNavigationBar
      activeColor={theme.colors.primary}
      // renderTouchable={(props) => <TabButton {...props} theme={theme} />}
    />
  );
};

export default BottomNavigationExample;

const styles = StyleSheet.create({
  screen: {
    position: 'relative',
    flex: 1,
  },
});
