import React, {useState, useCallback} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import coreStyles from '../../../core/styles/styles';
import AuthService from '../../services/auth.service';

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
    <View style={coreStyles.container}>
      <View>
        <Text>Username</Text>
        <TextInput
          style={coreStyles.input}
          value={userName}
          onChangeText={setUserName}
        />
      </View>

      <View>
        <Text>Password</Text>
        <TextInput
          style={coreStyles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={coreStyles.buttonWrapper} onPress={handleSubmit}>
        <View style={coreStyles.button}>
          <Text style={coreStyles.buttonText}>LogIn</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={coreStyles.buttonWrapper}
        onPress={handleRegister}>
        <View style={coreStyles.button}>
          <Text style={coreStyles.buttonText}>Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
