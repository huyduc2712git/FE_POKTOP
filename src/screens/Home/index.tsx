import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <View></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
