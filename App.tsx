/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Navigator from './src/config/navigation';
import AuthStore from './src/store/Store';
import {Provider} from 'mobx-react';

function App(): JSX.Element {
  return (
    <Provider store={AuthStore}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
