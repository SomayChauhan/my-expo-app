import { TouchableWithoutFeedback } from 'react-native';
import { Text } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import { MotiView } from 'moti';

export default (props: any) => {
  const {
    onPress,
    accessibilityState: { selected: focused },
    route,
    theme,
  } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <MotiView
        animate={{
          width: focused ? '60%' : '10%',
          backgroundColor: focused ? theme.colors.primary : 'white',
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
          color={focused ? 'white' : theme.colors.primary}
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
