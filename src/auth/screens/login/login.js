import React, {useState, useCallback} from 'react';
import {Alert, View} from 'react-native';
import coreStyles from '../../../core/styles/styles';
import AuthService from '../../services/auth.service';
import {Button, TextInput, Title, Paragraph} from 'react-native-paper';

const Login = ({navigation}) => {
  const authService = AuthService.instance;
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = useCallback(() => {
    if (!userName) {
      Alert.alert('Username is required');
    } else if (!password) {
      Alert.alert('Password is required');
    } else {
      const isLogin = authService.logIn(userName, password);
      if (isLogin) {
        navigation.navigate('Main');
      } else {
        Alert.alert('username or password is incorrect');
      }
    }
  }, [userName, password, authService, navigation]);

  const handleRegister = () => {
    navigation.navigate('Auth', {screen: 'Register'});
  };

  return (
    <View style={[coreStyles.container, loginStyles.container]}>
      <View style={loginStyles.card}>
        <Title style={loginStyles.title}>Login</Title>
        <TextInput
          style={loginStyles.textInput}
          label="Username"
          mode="flat"
          value={userName}
          onChangeText={setUserName}
        />

        <TextInput
          style={loginStyles.textInput}
          label="Password"
          mode="flat"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={loginStyles.actions}>
          <Button
            style={loginStyles.btnLogin}
            mode="contained"
            onPress={handleSubmit}>
            LogIn
          </Button>
        </View>
        <View style={loginStyles.noAccountContainer}>
          <Paragraph>No account?</Paragraph>
          <Button
            style={loginStyles.btnLogin}
            mode="text"
            onPress={handleRegister}>
            Sign up
          </Button>
        </View>
      </View>
    </View>
  );
};

const loginStyles = {
  container: {
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    padding: 5,
  },
  textInput: {
    backgroundColor: 'transparent',
  },
  btnLogin: {
    maxWidth: '50%',
  },
  actions: {
    marginVertical: 30,
    display: 'flex',
    alignItems: 'flex-end',
  },
  noAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
};

export default Login;
