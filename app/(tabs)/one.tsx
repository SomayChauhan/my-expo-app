import { View } from 'moti';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';

export default function TabOneScreen() {
  return (
    <>
      <ScreenWrapper
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
        <View style={styles.block} />
      </ScreenWrapper>
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
});
