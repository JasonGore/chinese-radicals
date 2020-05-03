import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { radicals } from '../Radicals/Radicals';
import { cardStyles } from './Flashcard.styles';

export interface FlashcardProps {
  id: number;
}

export const Flashcard: React.FunctionComponent<FlashcardProps> = (props) => {
  const radical = radicals[props.id];

  return <View style={cardStyles.sectionContainer} key={props.id}>
    <Text style={cardStyles.traditional}>{radical.traditional}</Text>
    <Text style={cardStyles.pinyin}>{radical.pinyin}</Text>
    <Text style={cardStyles.english}>{radical.english}</Text>
  </View>
};
