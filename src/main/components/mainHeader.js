import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import coreStyles from '../../core/styles/styles';
import AuthService from '../../auth/services/auth.service';

const mainHeaderStyle = {
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: coreStyles.colors.accentColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  button: {
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'regular',
  },
};

const MainHeader = ({navigation}) => {
  const authService = AuthService.instance;
  const handleLogout = () => {
    const result = authService.logOut();
    if (result) {
      navigation.navigate('Auth', {screen: 'Login'});
    }
  };

  return (
    <View style={mainHeaderStyle.headerContainer}>
      <Text style={mainHeaderStyle.title}>Restaurants</Text>
      <TouchableOpacity onPress={handleLogout}>
        <View style={mainHeaderStyle.button}>
          <Text style={[coreStyles.buttonText, mainHeaderStyle.buttonText]}>
            LogIn
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
