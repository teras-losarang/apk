/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './routes';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
