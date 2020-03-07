import {createStackNavigator} from '@react-navigation/native';
import OnBoard from '../core/screens/onBoard/onBoard';

const AuthStack = createStackNavigator({
  OnBoard: {
    screen: OnBoard,
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
  },
  initialRouteName: 'Onboard',
});

export default AuthStack;
