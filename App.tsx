/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>Jeferson</Text>
      <Text
        preset="headingLarge"
        style={{
          color: 'red',
        }}>
        Jeferson
      </Text>
      <Text
        preset="headingLarge"
        style={{
          color: 'red',
          fontFamily: 'Satoshi-Italic',
        }}>
        Jeferson
      </Text>
      <Text preset="headingMedium">Jeferson</Text>
    </SafeAreaView>
  );
}

export default App;
