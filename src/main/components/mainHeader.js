import React from 'react';
import {Appbar, IconButton, Title} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import AuthService from '../../auth/services/auth.service';

const mainHeaderStyle = {
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    color: 'white',
  },
  button: {
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'normal',
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
    <Appbar style={mainHeaderStyle.headerContainer}>
      <Title style={mainHeaderStyle.title}>Restaurants</Title>
      <IconButton
        icon="exit-to-app"
        color={Colors.white}
        size={20}
        onPress={handleLogout}
      />
    </Appbar>
  );
};

export default MainHeader;
