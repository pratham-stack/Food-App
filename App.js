// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './screen/FirstScreen';
import SecondScreen from './screen/SecondScreen';

import Header from './components/header';

const Stack = createNativeStackNavigator();
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Detail')}
//       />
//     </View>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Hungry?'
      screenOptions={{
          headerShown: false,
          title: 'Overview'
          }}>
        <Stack.Screen name="Hungry?" component={FirstScreen} />
        <Stack.Screen name="Detail" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;