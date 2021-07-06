import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import {Header , Icon} from "react-native-elements"

import firebase from "firebase";
import db from "../config"
import Lunch1 from "./lunch1";
import Lunch2 from "./lunch2";
import Lunch3 from "./lunch3";

export default class LunchScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>

                <View>
                                <Header  
                                leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                                centerComponent={{ text:"Lunch Options ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                
               </View>
               <View style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}>
               <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                    this.props.navigation.navigate("Lunch1");

                                  }}>
                    <Text style={styles.buttonText}>
                      Palak Paneer
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                    this.props.navigation.navigate("Lunch2");

                                  }}>
                    <Text style={styles.buttonText}>
                        Aloo Matar 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                    this.props.navigation.navigate("Lunch3");

                                  }}>
                    <Text style={styles.buttonText}>
                       Chocolate Peanut Banana Cups
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    button:{
        width:300,
        height:50,
        margin:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ea4715",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
      buttonText:{
        color:'#f1fdfe',
        fontWeight:'200',
        fontSize:20
      }

})