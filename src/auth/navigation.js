import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './screens/register/register';
import Login from './screens/login/login';

const AuthStack = createStackNavigator();

const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
