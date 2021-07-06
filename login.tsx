
import React from 'react';
import {Image, View, TextInput,Text,Button,SafeAreaView,Alert  } from 'react-native';
export default function Login() {
    
return (
  <View style={{flex: 1}}>
    <View style={{height:35, backgroundColor: 'powderblue'}} />
    <View style={{height:300, backgroundColor: 'white'}}> 
      <Image
        source=
        {{uri:"https://image.freepik.com/vetores-gratis/modelo-de-logotipo-de-cavalo-colorido-e-moderno_173159-67.jpg"}}
        style={{width:300, height:300, alignContent: 'center'}}>
      </Image>
    </View>
    
    <View style={{flex: 1,alignItems:'center', backgroundColor: 'skyblue'}}>
      <View style={{marginTop:50}}>
      <Text>Digite seu Email</Text>
        <TextInput style={{width: 300,height: 35,borderColor: 'navy',borderWidth:1,padding: 5}}/>
      <Text>Digite sua Senha</Text>
        <TextInput style={{width: 300,height: 35,borderColor: 'navy',borderWidth:1,padding: 5}}/>
      </View>
      <Button
      title = 'Acessar'
      onPress={() => Alert.alert('logado')}
      />     

    </View>   
  </View>
  );
}