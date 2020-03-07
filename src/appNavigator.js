import {
  NavigationContainer,
  createSwitchNavigator,
} from '@react-navigation/native';
import {AuthStack} from './auth/navigation';
import {MainStack} from './main/navigation';
import OnBoard from './core/screens/onBoard/onBoard';

const AppNavigator = createSwitchNavigator(
  {
    OnBoarding: OnBoard,
    Main: MainStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'OnBoarding',
  },
);

export default NavigationContainer(AppNavigator);
