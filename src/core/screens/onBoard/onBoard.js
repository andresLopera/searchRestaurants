import React, {useState} from 'react';
import {Text} from 'react-native';
import AuthService from '../../../auth/services/auth.service';

const OnBoard = ({navigation}) => {
  const authService = AuthService.instance;
  useState(() => {
    if (authService.isLogin()) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Auth', {screen: 'Login'});
    }
  }, []);

  return <Text>Loading...</Text>;
};

export default OnBoard;
