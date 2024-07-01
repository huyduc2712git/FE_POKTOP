import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TabBarIconProps {}

const TabBarIcon = (props: TabBarIconProps) => {
  return (
    <View style={styles.container}>
      <Text>TabBarIcon</Text>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  container: {},
});
