import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import {Header , Icon} from "react-native-elements"
import firebase from "firebase";
import db from "../config"
import Dinner2 from "./dinner2";
import Dinner3 from "./dinner3";
import Dinner1 from "./dinner1";

export default class DinnerScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>

                <View>
                                <Header  
                                leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                                centerComponent={{ text:"Dinner Options ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                
               </View>
               <View style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}>
               <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                    this.props.navigation.navigate("Dinner1");

                                  }}>
                    <Text style={styles.buttonText}>
                        Bruschetta
                    </Text>
                </TouchableOpacity>
               

               
                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                    this.props.navigation.navigate("Dinner2");

                                  }}>
                    <Text style={styles.buttonText}>
                        Paneer Bhurji 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Dinner3");
                                  }}>
                    <Text style={styles.buttonText}>

                        Banana Dates Smoothie 
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