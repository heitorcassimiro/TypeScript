import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
// import logo from './logo.jpg';
import Constants from 'expo-constants';
import Routes from './Routes'
import {useNavigation} from '@react-navigation/native';

export default function Menus() {
    const navigation = useNavigation();
  return (
    <>
    <StatusBar style="auto" backgroundColor="#483d8b"/>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.nomeInic}>
          MENU
        </View>
      
      
      <View style={styles.formContainer}>
        
        
        <TouchableOpacity style={styles.button}>
        <Button title = 'Pagina Inicial' onPress={() => navigation.navigate('Home')} />
          <Text style={styles.textButton}>
           
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Button title = 'Buscar prestador' onPress={() => navigation.navigate('Buscarprest')} />
          <Text style={styles.textButton}>
           
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
           <Text style={styles.textButton}>
           <Button title = 'Sobrenos' onPress={() => navigation.navigate('Sobrenos')} />
           </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
          <Button title = 'Contato' onPress={() => navigation.navigate('Contato')} />           
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
          <Button title = 'FAQ' onPress={() => navigation.navigate('Faq')} />             
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
          <Button title = 'Entrar' onPress={() => navigation.navigate('Entrar')} />           
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
    width: 80,
    fontWeight: 'bold',
    color: 'white',
    

  },
  button:{
    backgroundColor:'#483d8b',
    marginTop: 10,
    height:40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:2,

  },
  textButton:{
    color: "#fff",
    fontWeight: 'bold',

  },
  nomeInic:{
    width: '100%',
    fontWeight: 'bold',
    color: 'white',
    fontSize:25,
    alignItems:'center',

  }
 
  
});