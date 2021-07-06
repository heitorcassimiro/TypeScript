
import React from 'react';
import {Image, View, TextInput,Text,Button,SafeAreaView,Alert  } from 'react-native';
import sobrenos from './Team_page_rafiki.jpg';
import Routes from './Routes'
import {useNavigation} from '@react-navigation/native'
export default function Sobre_nos() {
    const navigation = useNavigation();
    
return (
  <View style={{flex: 1}}>
    <View style={{height:35, backgroundColor: '#483d8b'}} />
    <View style={{flex: 1,alignItems:'center', backgroundColor: '#483d8b'}}>
      <View style={{marginTop:15 }}>
      <Text style={{color:'white', fontSize:38,fontFamily:'Roboto'}}>Sobre Nós</Text>
      </View>
      <text style={{marginTop:30,color:'white',fontSize:15}}>Nós, do Time Handy, somos um grupo de estudantes do Curso de Análise e Desenvolvimento de Sistemas, da Faculdade Senac-PE, responsáveis pelo desenvolvimento e manutenção dos serviços da Plataforma Handy. O Time Handy é capaz. O Time Handy é conveniente. O Time Handy é hábil. Nós somos o Time Handy a seu dispor. </text>          

    </View>   
    <View style={{height:300, backgroundColor: '#483d8b'}}> 
      <Image source={sobrenos}
        style={{width:330, height:250, padding:'height', alignContent: 'center',marginTop:-220,marginLeft:20}}>
      </Image>
      <View style={{marginTop:50,marginLeft:220}}>
    <Button title = 'Voltar' onPress={() => navigation.navigate('Menus')}/>  
    </View>
    </View>
    
    
    
    
  </View>
  );
}