import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SettingScreenProps {}

const SettingScreen = (props: SettingScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {},
});
