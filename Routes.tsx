import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from './home';
import Sobrenos from './sobrenos';
import Contato from './contato';
import Menus from './menus'
import Faq from './faq';
import Buscarprest from './buscarprest'
import Entrar from './entrar';


export default function router() {

    const Stack = createStackNavigator(); 
    return ( 
    <NavigationContainer> 
        <Stack.Navigator> 
            <Stack.Screen options ={{headerShown:false}} name="Home" component={Home} /> 
            <Stack.Screen options ={{headerShown:false}} name="Sobrenos" component={Sobrenos} />
            <Stack.Screen options ={{headerShown:false}} name="Contato" component={Contato} />
            <Stack.Screen options ={{headerShown:false}} name="Menus" component={Menus} />
            <Stack.Screen options ={{headerShown:false}} name="Faq" component={Faq} />
            <Stack.Screen options ={{headerShown:false}} name="Buscarprest" component={Buscarprest} />
            <Stack.Screen options ={{headerShown:false}} name="Entrar" component={Entrar} />
        </Stack.Navigator> 
    </NavigationContainer> 
    ); 
}