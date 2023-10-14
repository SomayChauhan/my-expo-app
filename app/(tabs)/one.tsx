import { View } from 'moti';
import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { Avatar, Card, Text, useTheme } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function TabOneScreen() {
  const { colors } = useTheme();
  return (
    <>
      <LinearGradient
        colors={[colors.primaryContainer, '#ffffff']}
        style={{ flex: 1, width: '100%' }}
        start={{ x: 0.5, y: 0.0 }}
      >
        {/* <ScreenWrapper
          style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ alignItems: 'center' }}
        > */}
        {[...new Array(10)].map((item, index) => (
          <Card
            key={index} // Don't forget to add a unique key for each item in the array
            style={styles.card}
            onPress={() => {
              // preferences.toggleTheme();
            }}
            mode="elevated"
          >
            <Card.Title
              title="QuickStart"
              right={(props) => <AntDesign name="caretright" size={18} color="black" />}
            />
            <Card.Content>
              <Text variant="bodyMedium">Start an empty workout</Text>
            </Card.Content>
          </Card>
        ))}
        {/* </ScreenWrapper> */}
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 100,
    width: 100,
    backgroundColor: 'black',
    marginBottom: 30,
  },
  card: {
    width: '80%',
    marginVertical: 8,
    // marginHorizontal: 16,
  },
});
