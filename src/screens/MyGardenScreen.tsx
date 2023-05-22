import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native';

const MyGardenScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyGarden Screen</Text>
    </View>
  );
};

export default MyGardenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
