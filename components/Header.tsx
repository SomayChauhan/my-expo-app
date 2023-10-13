import * as React from 'react';
import { Animated } from 'react-native';
import { Appbar } from 'react-native-paper';

interface HeaderProps {
  translateY: Animated.AnimatedInterpolation<string | number>;
}
const Header: React.FC<HeaderProps> = ({ translateY }) => {
  return (
    <Appbar.Header
      mode={'center-aligned'}
      elevated={true}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: 64,
        transform: [{ translateY: translateY }],
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        elevation: 4,
        zIndex: 1,
      }}
    >
      <Appbar.Content title="Title" />
    </Appbar.Header>
  );
};

export default Header;
