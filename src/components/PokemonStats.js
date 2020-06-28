import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from './Slider';

const maxHp = 255;
const maxAttack = 190;
const maxDefense = 230;
const maxSpeed = 180;
const maxSpecialAttack = 194;
const maxSpecialDefense = 230;

const PokemonStats = ({ stats }) => {
  const hpStat = stats.find((item) => item.stat.name === 'hp');
  const attackStat = stats.find((item) => item.stat.name === 'attack');
  const defenseStat = stats.find((item) => item.stat.name === 'defense');
  const speedStat = stats.find((item) => item.stat.name === 'speed');
  const specialAttackStat = stats.find((item) => item.stat.name === 'special-attack');
  const specialDefenseStat = stats.find((item) => item.stat.name === 'special-defense');
  return (
    <View style={styles.container}>
      {renderTitle()}
      {renderSliderBar(hpStat.base_stat, maxHp, 'HP')}
      {renderSliderBar(attackStat.base_stat, maxAttack, 'Attack')}
      {renderSliderBar(defenseStat.base_stat, maxDefense, 'Defense')}
      {renderSliderBar(speedStat.base_stat, maxSpeed, 'Speed')}
      {renderSliderBar(specialAttackStat.base_stat, maxSpecialAttack, 'Sp Atk')}
      {renderSliderBar(specialDefenseStat.base_stat, maxSpecialDefense, 'Sp Def')}
    </View>
  );
};

const renderTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.lineStyle} />
        <Text style={styles.textTitleStyle}>STATISTICS</Text>
      <View style={styles.lineStyle} />
    </View>
  );
};

const renderSliderBar = (value, maxValue, text) => {
  return (
    <View style={styles.sliderAndTextContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          disabled
          value={value}
          minimumValue={0}
          maximumValue={maxValue}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor={'blue'}
          thumbText={`${value}`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: 'white'
  },
  sliderAndTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  textContainer: {
    flex: 1
  },
  sliderContainer: {
    flex: 3,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  track: {
    height: 14,
    borderRadius: 5,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 0.5,
  },
  thumb: {
    width: 40,
    height: 25,
    borderRadius: 2,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  textStyle: {
    color: '#4A4A4A',
    fontSize: 12
  },
  textTitleStyle: {
    color: '#4A4A4A',
    fontSize: 10,
  },
  lineStyle: {
    backgroundColor: '#ddd',
    height: 1,
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  }
});

export default PokemonStats;