import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './screens/main';

const MainStack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Main} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigation;
