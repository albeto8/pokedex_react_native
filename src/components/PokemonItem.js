import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

const imageURL = 'https://pokeres.bastionbot.org/images/pokemon/';


const PokemonItem = ({ item, index, navigation }) => {

    const onItemPress = (item) => {
        navigation.navigate('Detail', { pokemon: item })
    }
    
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onItemPress(item)}
    >
      <Image
        style={{ width: 80, height: 80 }}
        source={{ uri: `${imageURL}${index + 1}.png` }}
      />
      <Text style={styles.textStyle}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#ddd',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 4
  },
  textStyle: {
    color: '#4A4A4A',
    marginBottom: 5,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 10
  }
});

export default withNavigation(PokemonItem);