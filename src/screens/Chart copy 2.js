import React, {useEffect, useState, Animated} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import drinkWaveFlip from '../../assets/images/drinkWaveFlip.png';
import Donut from '../components/Donut';
import Bar from '../components/Bar';
const data = [
  {
    percentage: 8,
    color: 'tomato',
    max: 10,
  },
  {
    percentage: 14,
    color: 'skyblue',
    max: 20,
  },
  {
    percentage: 92,
    color: 'gold',
    max: 100,
  },
  {
    percentage: 240,
    color: '#222',
    max: 500,
  },
  {
    percentage: 240,
    color: '#23e',
    max: 500,
  },
];

export default function Chart({route, navigation}) {
  let today = new Date();
  const [hour, setHour] = useState(today.getHours());
  const [minute, setMinute] = useState(today.getMinutes());
  return (
    <View style={styles.container}>
      <View style={styles.page0}>
        <Text style={Styles.boldText}>Chart</Text>
        <Text style={Styles.Text}>Today</Text>
      </View>
      {/* <View style={styles.page1}></View> */}
      <View style={styles.page2}>
        <Bar></Bar>
        <Image
          source={drinkWaveFlip}
          resizeMode="cover"
          style={styles.drinkWave}></Image>
      </View>
      <View style={styles.page3}>
        <Text style={styles.waterText}>Water Score</Text>
        <Text style={styles.waterScore}>75</Text>
      </View>
      <View style={styles.page4}>
        <View style={{marginTop: '15%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={styles.day}>Mon</Text>
            <Text style={styles.day}>Tue</Text>
            <Text style={styles.day}>Wed</Text>
            <Text style={styles.day}>Thu</Text>
            <Text style={styles.day}>Fri</Text>
          </View>
          <View style={styles.page4}>
            {data.map((p, i) => {
              return (
                <Donut
                  key={i}
                  radius={35}
                  percentage={p.percentage}
                  color={p.color}
                  delay={500 + 100 * i}
                  max={p.max}
                />
              );
            })}
          </View>
        </View>
      </View>
      <View style={styles.page5}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    fontFamily: 'Lato-Bold',
  },
  page0: {
    flex: 0.4,
    flexDirection: 'row',
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  // page1: {
  //   flex: 0.3,
  //   backgroundColor: Colors.bg,
  //   alignItems: 'center',
  // },
  page2: {
    position: 'relative',
    flex: 1.1,
    backgroundColor: Colors.bg,
  },
  drinkWave: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  page3: {
    flex: 1,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page4: {
    flex: 1,
    backgroundColor: Colors.bg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 3,
  },
  page5: {
    backgroundColor: Colors.bg,
    height: 80,
  },
  waterText: {
    ...Styles.boldText,
    fontSize: 20,
  },
  waterScore: {
    ...Styles.boldText,
    color: Colors.darkPurple,
    fontSize: 150,
    marginTop: 20,
  },
  day: {
    ...Styles.boldText,
    color: Colors.black,
    fontSize: 15,
  },
});
