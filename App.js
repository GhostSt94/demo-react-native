/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import HomeScreen from './src/screens/Home';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
