import React, {useState, useCallback} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
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

      <View>
        <Text>Confirm Password</Text>
        <TextInput
          style={coreStyles.input}
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity style={coreStyles.buttonWrapper} onPress={handleSubmit}>
        <View style={[coreStyles.button, coreStyles.buttonPrimary]}>
          <Text style={coreStyles.buttonText}>Register</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={coreStyles.buttonWrapper}
        onPress={handleGoToLogin}>
        <View style={[coreStyles.button, coreStyles.buttonSecond]}>
          <Text style={[coreStyles.buttonText, coreStyles.buttonTextSecond]}>
            Do you have account?
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
