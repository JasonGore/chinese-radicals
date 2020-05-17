import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MatchScreen} from './MatchScreen';

import { Flashcard } from './components/Flashcard/Flashcard';
import { PickableFields, RadicalFieldPicker } from './components/RadicalFieldPicker/RadicalFieldPicker';
import { radicals } from './radicals/radicals';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Chinese Radicals'}}
        />
        <Stack.Screen name="Radicals" component={RadicalListScreen} />
        <Stack.Screen name="Match" component={MatchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// TODO: add screen navigation typing
const HomeScreen = ({ navigation }: any) => {
  const [matchFrom, setMatchFrom] = useState<PickableFields>("english");
  const [matchTo, setMatchTo] = useState<PickableFields>("traditional");

  return (
    <>
      <View style={styles.sectionContainer}>
        <Button
          title="List of Radicals"
          onPress={() => navigation.navigate('Radicals')}
        />
      </View>
      <RadicalFieldPicker 
        default={matchFrom} 
        label="Match"
        onValueChange={itemValue => setMatchFrom(itemValue)}
      />
      <RadicalFieldPicker 
        default={matchTo} 
        label="to"
        onValueChange={itemValue => setMatchTo(itemValue)}
      />
      <View style={styles.sectionContainer}>
        <Button
          title="Match"
          onPress={() => navigation.navigate('Match', { matchFrom, matchTo })}
        />
      </View>
    </>
  );
};

const RadicalListScreen = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          {radicals.map((radical) => (<Flashcard key={radical.id} id={radical.id}/>))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
  }
});

export default App;
