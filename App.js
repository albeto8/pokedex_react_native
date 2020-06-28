import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';

const navigator = createStackNavigator({
  Main: MainScreen,
  Detail: DetailScreen
}, {
  initialRouteName: 'Main',
  defaultNavigationOptions: {
    title: 'Pokedex',
    headerTintColor: '#fff',
    headerTitle: () => <Image style={{ width: 100, height: 50 }} source={require('./src/images/logo.png')} resizeMode={'contain'} />,
    headerStyle: {
      backgroundColor: '#C3262B',
    }
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <App/>
    </View>
};