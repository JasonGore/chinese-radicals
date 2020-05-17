import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const cardStyles = StyleSheet.create({
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 8,
    // flexDirection: 'row'
  },
  traditional: {
    backgroundColor: Colors.lighter,
    color: 'blue',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center'
  },
  pinyin: {
    backgroundColor: Colors.lighter,
    color: 'blue',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center'
  },
  english: {
    backgroundColor: Colors.lighter,
    color: 'blue',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center'
  },
});