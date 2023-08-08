import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  //simulate submit of form to backend using promise 
  const submit = async() => {
    console.log('ran')
    try {
      const data = {
        name: 'John Doe',
        email: ''
      }
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
          reject('Email is required')
      }, 2000)
    })
    console.log('ran 2344')
    } catch (error) {
      Alert.alert('Error', error)
    }
   
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Submit" onPress={submit} testID='button' />
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
});
