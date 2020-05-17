import React, { useState } from "react";
import {
  Text,
  View
} from 'react-native';
import { Picker } from '@react-native-community/picker';

import { RadicalField } from '../../radicals/radicals';
import { radicalFieldPickerStyles } from './RadicalFieldPicker.styles';

export type PickableFields = Exclude<RadicalField, 'id'>;

const pickableFields: PickableFields[] = [
  'traditional',
  'english',
  'pinyin',
  'strokeCount'
];

export interface FlashcardProps {
  default: PickableFields;
  label?: string;
  onValueChange?: (itemValue: any) => void;
}

export const RadicalFieldPicker: React.FunctionComponent<FlashcardProps> = (props) => {
  const [selectedValue, setSelectedValue] = useState(props.default);

  return (
  <View style={radicalFieldPickerStyles.sectionContainer}>
      {props.label && <Text style={radicalFieldPickerStyles.label}>{props.label}</Text>}
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={itemValue => {
          setSelectedValue(itemValue);
          props.onValueChange && props.onValueChange(itemValue);
        }}
      >
        {pickableFields.map((field, index) => <Picker.Item label={field} value={field} key={index} />)}
      </Picker>
  </View>
  );
};
