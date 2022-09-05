import React, {useState} from 'react';
import {ImageBackground, Text, View, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

function HomeScreen(props) {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable style={styles.button} onPress={() => console.warn('hello')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>

      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('search button')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going ?</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;
