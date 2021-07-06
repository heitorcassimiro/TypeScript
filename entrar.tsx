import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,Button, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
// import logo from './handy_2.jpg';
import Constants from 'expo-constants';
import Routes from './Routes'
import {useNavigation} from '@react-navigation/native'


export default function Entrar() {
    const navigation = useNavigation();

    const [login, setLogin] = useState("");


    function handleLogin() {
      if (login.length ===  0) {
        return 
      }

      navigation.navigate('Home');
    }
  return (
    <>
    <StatusBar style="auto" backgroundColor="#0E0B16"/>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
      {/* <Image source={logo} style={styles.imageComp}/> */}
      
      <View style={styles.formContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.styleLabel}>
              
            Login
          </Text>
          

          <TextInput onChangeText={setLogin} placeholder="Digite o seu Usuario" keyboardType="email-address" style={styles.inputStyle} />

        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.styleLabel}>
            Senha
          </Text>
          <TextInput placeholder="Digite a sua senha" secureTextEntry style={styles.inputStyle} />

        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
          <Button title = 'Login' onPress={handleLogin} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
          <Button title = 'Cadastre-se' onPress={() => navigation.navigate('')} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
          <Button title = 'Voltar' onPress={() => navigation.navigate('Menus')} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOff}>
          <Text style={styles.textButton}>
           ESQUECEU A SENHA ?
          </Text>
        </TouchableOpacity>

       



      </View>


      </ScrollView>
    </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#483d8b',
    paddingTop: Constants.statusBarHeight,
    
    
   
  },
  imageComp:{
    width: '100%',
    marginTop:'50%',
    
    height: 130,
    resizeMode: 'cover',


  },
  formContainer:{
    width: '85%',
    marginTop:60,
   

  },
  sectionContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:6,

  },
  inputStyle:{
    flex:1,
    borderColor: '#3c6593',
    borderWidth: 2,
    marginLeft: 10,
    paddingVertical:2,
    paddingHorizontal:6

  },
  styleLabel:{
    width: 40,
    fontWeight: 'bold',
    color:'white',
    

  },
  button:{
    backgroundColor:'#483d8b',
    marginTop: 4,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:2,

  },
  textButton:{
    color: "#fff",
    fontWeight: 'bold',

  },
  buttonOff:{
    backgroundColor:'#483d8b',
    marginTop: 4,
    height:40,
    marginLeft:2,
    justifyContent: 'center',
    elevation:2,
  }
  
}); 