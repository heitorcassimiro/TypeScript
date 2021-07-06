import React from 'react';
import {Image, View, TextInput,Text,Button,SafeAreaView,Alert  } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Routes from './Routes'

export default function Faq() {
    const navigation = useNavigation();

return (
  <View style={{flex: 1}}>
    <View style={{height:35, backgroundColor: '#483d8b'}} />
    <View style={{flex: 1, backgroundColor: '#483d8b'}}>
      <View style={{marginTop:0 ,alignItems:'center'}}>
      <Text style={{color:'white', fontSize:38,fontFamily:'Roboto'}}>FAQ</Text>
      </View>
      <View>
          <View style={{marginTop:30}}>
            <Text style={{color:'white',fontSize:30,fontFamily:'Roboto'}}>ESQUECI MINHA SENHA </Text>
        </View>
        <View style={{marginTop:12}}>
          <Text style={{color:'white',fontSize:20}}>Basta clicar no botão "Esqueceu a senha", localizado na pagina de Login</Text>
          </View>  
          <View style={{marginTop:30}}>
          <Text style={{color:'white',fontSize:30,fontFamily:'Roboto'}}>COMO CANCELAR CADASTRO? </Text>
        </View>
        <View style={{marginTop:12}}>
          <Text style={{color:'white',fontSize:20}}>Entre em contato com o nosso CHATBOT para mais informações. </Text>
        </View> 
        <View style={{marginTop:30}}>
          <Text style={{color:'white',fontSize:30,fontFamily:'Roboto'}}>NÃO CONSIGO FAZER CADASTRO </Text>
          </View>
          <View style={{marginTop:12}}>
          <Text style={{color:'white',fontSize:20}}>Click aqui para ser direcionado a aba de Cadastro. </Text>
          </View>
          <View style={{marginTop:30}}>
          <Text style={{color:'white',fontSize:30,fontFamily:'Roboto'}}>QUAIS VANTAGENS DA CONTA PREMIUM? </Text>
          </View>
          <View style={{marginTop:12}}>
          <Text style={{color:'white',fontSize:20}}>Visibilidade, Handtpoints e Destaques na plataforma Handy. </Text>
          </View>
          <View style={{marginTop:30}}>
          <Text style={{color:'white',fontSize:30,fontFamily:'Roboto'}}>QUAL A POLITICA DE PRIVACIDADE DO HANDY? </Text>
          </View>
          <View style={{marginTop:12}}>
          <Text style={{color:'white',fontSize:20}}>O Handy tem como politica de privacidade LEIA MAIS... </Text>
          </View>
          <View style={{marginTop:30}}>
          <Text style={{color:'white',fontSize:30,fontFamily:'Roboto'}}>MINHAS INFORMAÇÕES SERÃO PARTINHADAS COM TERCEIROS?</Text>
          </View>
          <View style={{marginTop:12}}>
          <Text style={{color:'white',fontSize:20}}>Artigo de numero 523 sobre politica de empresas referente ao uso das informações do Usuario. </Text>
          </View>
          <View style={{marginTop:30}}>
          <Text style={{color:'white',fontSize:30,fontFamily:'Roboto'}}>OUTRAS DÚVIDAS? / RECLAMAÇÕES? / SUGESTÕES? </Text>
          </View>
          <View style={{marginTop:12}}>
          <Text style={{color:'white',fontSize:20}}>Entre em contato com a equipe HANDY pelas plataformas WHATSAPP, TELEFONE OU E_MAIL. </Text>
          </View>
          <View style={{marginTop:50,marginLeft:220}}>
    <Button title = 'Voltar' onPress={() => navigation.navigate('Menus')}/>  
    </View>
      </View>
      </View>
    </View>



  );
}