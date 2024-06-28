import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ShortVideoScreenProps {}

const ShortVideoScreen = (props: ShortVideoScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ShortVideoScreen</Text>
    </View>
  );
};

export default ShortVideoScreen;

const styles = StyleSheet.create({
  container: {},
});
