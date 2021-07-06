import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
// import logo from './logo.jpg';
import Constants from 'expo-constants';
import Routes from './Routes'
import {useNavigation} from '@react-navigation/native'
import ModalSelector from 'react-native-modal-selector'

export default function buscarprest() {
    const navigation = useNavigation();


  return (
    <>
    <StatusBar style="auto" backgroundColor="#483d8b"/>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.nomeInic}>
          Busca de prestador
          
        </View>
      
      
      <View style={styles.formContainer}>
        <Text style={styles.infoSob}>Procure aqui seu prestador </Text>
        <View style={styles.sectionContainer}>
          
        

          <TextInput placeholder="Ex: Buffet, aniversÃ¡rio, batisado..." keyboardType="email-address" style={styles.inputStyle}/>

        </View>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
          <Button title = 'Buscar' onPress={() => navigation.navigate('')} />            
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
          <Button title = 'Voltar' onPress={() => navigation.navigate('Menus')} />
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
    marginTop:150,
   

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
    alignItems:'center',
    paddingVertical:2,
    paddingHorizontal:6
    

  },
  tamM:{
    width:'100%',
  },
  infoSob:{
    color:'white',
    fontWeight:'bold',
    marginBottom:'3%',
    width:'100%',
    fontSize:25,
    
    


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
    marginTop:'10%',

  }
 
  
});