import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppNavigation from './navigation/appNavigation';

export default function App() {

  

  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  place: {
    width: 300,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  but: {
    width: 100,
    height: 40,
    marginBottom: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
