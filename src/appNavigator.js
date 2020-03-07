import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStackNavigation from './main/navigation';
import AuthStackNavigation from './auth/navigation';
import OnBoard from './core/screens/onBoard/onBoard';

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="OnBoarding"
          component={OnBoard}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Auth"
          component={AuthStackNavigation}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Main"
          component={MainStackNavigation}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
