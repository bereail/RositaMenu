import React from 'react';
import Navigation from "./Components/Navigation";

export default function App() {
  return (
    <Navigation />
  );
}


/*  import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenerateQrScreen from './Components/GenerateQrScreen';
import {QrScannerScreen} from './Screens/QrScannerScreen'; // Adjusted import
import Home from './Screens/Home';
import Menu from './Screens/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['http://localhost:8083', 'mycustomapp://'], // Fixed prefix
        config: {
          screens: {
            home: '',       // Adjust path if necessary
            menu: 'menu', 
            qr: 'qr',
            qrScanner: 'qrScanner'  
          },
        },
      }}
    >
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="menu" component={Menu} />
        <Stack.Screen name="qr" component={GenerateQrScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/