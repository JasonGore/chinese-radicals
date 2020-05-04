import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Flashcard } from './components/Flashcard/Flashcard';
import { radicals } from './radicals/radicals';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Chinese Radicals'}}
        />
        <Stack.Screen name="Radicals" component={RadicalList} />
        <Stack.Screen name="EnglishToRadical" component={NotCompleted} />
        <Stack.Screen name="RadicalToEnglish" component={NotCompleted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const NotCompleted = () => {
  return <Text>Not Completed :(</Text>
}

// TODO: add screen navigation typing
const Home = ({ navigation }: any) => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Button
          title="List of Radicals"
          onPress={() => navigation.navigate('Radicals')}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Button
          title="Match English to Radical"
          onPress={() => navigation.navigate('EnglishToRadical')}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Button
          title="Match Radical to English"
          onPress={() => navigation.navigate('RadicalToEnglish')}
        />
      </View>
    </>
  );
};

const RadicalList = () => {
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
