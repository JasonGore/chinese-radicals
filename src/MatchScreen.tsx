import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { radicals } from './radicals/radicals';
import { Flashcard } from './components/Flashcard/Flashcard';

const getRandomRadical = () => {
  return getRandomInt(radicals.length);
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const MatchScreen = ({ route }: any) => {
  const { params } = route;
  const [matchRadicalId, setMatchRadicalId] = useState(getRandomRadical());

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
    <View style={styles.body}>
      <Text>{params.matchFrom} => {params.matchTo}</Text>
      <Flashcard id={matchRadicalId} />
      <Flashcard id={matchRadicalId} />
      <Flashcard id={matchRadicalId} />
      <Flashcard id={matchRadicalId} />
      <Flashcard id={matchRadicalId} />
    </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 8,
    flexDirection: 'row'
  },
});