/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setOnboardingStatus, setPaywallStatus} from '../redux/action';
import GetStarted from '../screens/GetStarted';
import HomeScreen from '../screens/HomeScreen';
import Loader from '../screens/Loader';
import Onboarding from '../screens/Onboarding';
import PaywallScreen from '../screens/PaywallScreen';
import {loadOnboardingStatus, loadPaywallStatus} from '../utils/storage';
import {verticalScale, horizontalScale} from '../utils/metrics';
import DiagnoseScreen from '../screens/DiagnoseScreen';
import MyGardenScreen from '../screens/MyGardenScreen';
import ProfileScreen from '../screens/ProfileScreen';

type RootStackParamList = {
  GetStarted: undefined;
  Onboarding: undefined;
  PaywallScreen: undefined;
  TabStackScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

const TabStackScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = require('../assets/icons/home.png');
          } else if (route.name === 'Diagnose') {
            iconName = require('../assets/icons/healthcare.png');
          } else if (route.name === 'MyGarden') {
            iconName = require('../assets/icons/my-garden.png');
          } else if (route.name === 'Profile') {
            iconName = require('../assets/icons/profile.png');
          }

          return (
            <Image
              source={iconName}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#28AF6E' : color,
              }}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        inactiveTintColor: '#979798',
        activeTintColor: '#28AF6E',
        keyboardHidesTabBar: true,
        tabStyle: {},
        style: {
          borderTopWidth: 2,
          borderTopColor: 'red',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Diagnose" component={DiagnoseScreen} />
      <Tab.Screen
        name="Scan"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({}) => (
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                height: verticalScale(64),
                width: horizontalScale(64),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/scan-button.png')}
                style={{width: 60, height: 60}}
                resizeMode="contain"
              />
            </View>
          ),
        }}
        component={Loader}
      />
      <Tab.Screen name="MyGarden" component={MyGardenScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Screens: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const showOnboarding = useSelector(
    (state: any) => state.reducer.showOnboarding,
  );
  const showPaywall = useSelector((state: any) => state.reducer.showPaywall);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const status = await loadOnboardingStatus();
      if (status !== null) {
        dispatch(setOnboardingStatus(status));
      }
    };
    checkOnboardingStatus();
    const checkPaywallStatus = async () => {
      const status = await loadPaywallStatus();
      if (status !== null) {
        dispatch(setPaywallStatus(status));
      }
      setIsLoading(false);
    };
    checkPaywallStatus();
  }, [dispatch]);

  const globalScreenOptions = {
    headerShown: false,
  };

  if (isLoading) {
    return <Loader />; // Yüklenme durumundayken Loader bileşenini render et
  }

  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      {showOnboarding ? (
        <>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
        </>
      ) : (
        <Stack.Screen name="TabStackScreen" component={TabStackScreen} />
      )}
      <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
    </Stack.Navigator>
  );
};

export default Screens;
