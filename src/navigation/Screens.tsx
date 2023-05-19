import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GetStarted from '../screens/GetStarted';
import Onboarding from '../screens/Onboarding';
import PaywallScreen from '../screens/PaywallScreen';
import HomeScreen from '../screens/HomeScreen';
function Screens() {
  const Stack = createNativeStackNavigator();

  const globalScreenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default Screens;
