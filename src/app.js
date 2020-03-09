import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './appNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00796b',
    accent: '#004d40',
  },
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
