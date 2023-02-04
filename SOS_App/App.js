
import { StyleSheet, Text, View } from 'react-native';
import Home from './component/Home';
import Splash from './component/Splash';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack=createNativeStackNavigator()

export default function App() {

  return (

    <NavigationContainer>
      <stack.Navigator initialRouteName='Splash' >
        <stack.Screen name='Splash' component={Splash} options={{  
         headerShown: false,  
       }} />
        <stack.Screen name='Home' component={Home} options={{  
         headerShown: false,  
       }} />
      </stack.Navigator>
    </NavigationContainer>

  );
}

