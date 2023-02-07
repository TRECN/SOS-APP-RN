import Home from './component/Home';
import Splash from './component/Splash';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login'

const stack=createNativeStackNavigator()

export default function App() {

  return (

    <NavigationContainer>
      <stack.Navigator initialRouteName='Login' >
      <stack.Screen name='Login' component={Login} options={{  
         headerShown: false,  
       }} />
        <stack.Screen name='Splash' component={Splash} options={{  
         headerShown: false,  
       }} />
        <stack.Screen name='Home' component={Home} options={{  
         headerShown: false,  
         headerLeft:null,
       }} />
      </stack.Navigator>
    </NavigationContainer>

  );
}

