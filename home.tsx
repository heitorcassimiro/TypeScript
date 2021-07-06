
import React from 'react';
import {Image, View, TextInput,Text,Button,SafeAreaView,Alert  } from 'react-native';
import festahome from './festa_home.jpg';
import live from './live.jpg';
import formatura from './formatura.jpg';
import batismo from './batismo.jpg';
import {useNavigation} from '@react-navigation/native'


export default function Home() {
    const navigation = useNavigation();        
return (
  <View style={{flex: 1}}>
    <View style={{height:35, backgroundColor: '#483d8b'}} />
    <View style={{height:300, backgroundColor: '#483d8b'}}> 
      <Image source={festahome}
        style={{width:330, height:220, padding:'height', alignContent: 'center',marginTop:11,marginLeft:16}}>
      </Image>
    </View>
    
    <View style={{flex: 1,alignItems:'center', backgroundColor: '#483d8b'}}>
      <View style={{marginTop:-50 }}>
      <Text style={{color:'white', fontSize:38,fontFamily:'Roboto'}}>Bem vindo ao Handy!!</Text>
      </View>
      <text style={{marginTop:30,color:'white',fontSize:20}}>Pensando em fazer evento? Conheça já Handy!! </text>

    <View style={{marginTop:30,marginRight:220}}>
    <Button title = 'Buscar Prestador' onPress={() => navigation.navigate('Sobrenos')}/>    
    </View>
    <View style={{marginTop:-35,marginLeft:220}}>
    <Button title = 'Menu' onPress={() => navigation.navigate('Menus')}/>  
    </View>
    

    <View>
      <Image source={live}
        style={{width:70, height:70,marginLeft:250,marginTop:20}}>
      </Image>  
    </View> 
    
    <View>
      <Image source={formatura}
        style={{width:56, height:56,marginLeft:0,marginTop:-60}}>
      </Image>  
    </View> 

    <View>
      <Image source={batismo}
        style={{width:56, height:56,marginRight:270,marginTop:-60}}>
      </Image>  
    </View>    
           

    </View>   
  </View>
  );
}