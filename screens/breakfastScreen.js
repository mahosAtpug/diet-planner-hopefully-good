import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import {Header , Icon} from "react-native-elements"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config"
import Breakfast1 from "./breakfast1";
import Breakfast2 from "./breakfast2";
import Breakfast3 from "./breakfast3";
import Breakfast4 from "./breakfast4";
import MyHeader from "../components/myHeader"



export default class BreakfastScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>

                <View>
                                <Header  
                                leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                                centerComponent={{ text:"Breakfast Options ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                
               </View>
               <View style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}>
                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                    this.props.navigation.navigate("Breakfast1");

                                  }}>
                    <Text style={styles.buttonText}>
                        Boiled Egg Sandwich
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                    this.props.navigation.navigate("Breakfast2");

                                  }}>
                    <Text style={styles.buttonText}>
                        Rawa Uttapam
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Breakfast3");
                                  }}>
                    <Text style={styles.buttonText}>
                    Oats Peanut Butter Smoothie 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Breakfast4");
                                  }}>
                    <Text style={styles.buttonText}>
                        Mango Banana Smoothie
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