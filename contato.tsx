
import React from 'react';
import {Image, View, TextInput,Text,Button,SafeAreaView,Alert  } from 'react-native';
// import sobrenos from './Team_page_rafiki.jpg';
import {useNavigation} from '@react-navigation/native'
import Routes from './Routes'

export default function Contato() {
    const navigation = useNavigation();
    
return (
  <View style={{flex: 1}}>
    <View style={{height:35, backgroundColor: '#483d8b'}} />
    <View style={{flex: 1, backgroundColor: '#483d8b'}}>
      <View style={{marginTop:0 ,alignItems:'center'}}>
      <Text style={{color:'white', fontSize:38,fontFamily:'Roboto'}}>Contato</Text>
      </View>
      <View>
        <text style={{marginTop:30,color:'white',fontSize:15}}>Nossa central de atendimento está disponivel de segunda a sabado das 08:00 as 20:00 horas. </text>          
      </View>
      <View>
        <text style={{marginTop:12,color:'white',fontSize:15}}>Email: atendimento@handy.com.br </text>          
      </View>
      <View>
        <text style={{marginTop:12,color:'white',fontSize:15}}>Telefone: (81) 34567887 </text>          
      </View>
    </View>   
    <View style={{height:300, backgroundColor: '#483d8b'}}> 
      {/* <Image source={sobrenos}
        style={{width:330, height:250, padding:'height', alignContent: 'center',marginTop:-250,marginLeft:20}}>
      </Image> */}
      <View style={{marginTop:35,marginLeft:220}}>
    <Button title = 'Voltar' onPress={() => navigation.navigate('Menus')}/>  
    </View>
    </View>

    
    
    
  </View>
  );
}