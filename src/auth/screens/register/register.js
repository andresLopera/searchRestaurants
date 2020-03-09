import React, {useState, useCallback} from 'react';
import {Alert, View} from 'react-native';
import {Button, TextInput, Title, Paragraph} from 'react-native-paper';
import coreStyles from '../../../core/styles/styles';
import AuthService from '../../services/auth.service';

const Register = ({navigation}) => {
  const authService = AuthService.instance;
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleSubmit = useCallback(() => {
    if (!userName) {
      Alert.alert('Username is required');
    } else if (!password) {
      Alert.alert('Password is required');
    } else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
    } else {
      const result = authService.registerUser(userName, password);
      if (result.status) {
        Alert.alert(result.message);
        navigation.navigate('Auth', {screen: 'Login'});
      } else {
        Alert.alert(result.message);
      }
    }
  }, [userName, password, confirmPassword, authService, navigation]);

  const handleGoToLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={[coreStyles.container, signUpStyles.container]}>
      <View style={signUpStyles.card}>
        <Title style={signUpStyles.title}>Sign up</Title>
        <TextInput
          style={signUpStyles.textInput}
          label="Username"
          mode="flat"
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          style={signUpStyles.textInput}
          label="Password"
          mode="flat"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={signUpStyles.textInput}
          label="Confirm password"
          mode="flat"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <View style={signUpStyles.actions}>
          <Button
            style={signUpStyles.btnLogin}
            mode="contained"
            onPress={handleSubmit}>
            Sign Up
          </Button>
        </View>
        <View style={signUpStyles.noAccountContainer}>
          <Paragraph>Have account?</Paragraph>
          <Button
            style={signUpStyles.btnLogin}
            mode="text"
            onPress={handleGoToLogin}>
            Log In
          </Button>
        </View>
      </View>
    </View>
  );
};

const signUpStyles = {
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

export default Register;
