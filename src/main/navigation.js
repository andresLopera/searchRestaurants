import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './screens/main';
import MainHeader from './components/mainHeader';

const MainStack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Main}
        options={{
          header: props => {
            return <MainHeader {...props} />;
          },
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigation;
