import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DiagnoseScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Diagnose Screen</Text>
    </View>
  );
};

export default DiagnoseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
