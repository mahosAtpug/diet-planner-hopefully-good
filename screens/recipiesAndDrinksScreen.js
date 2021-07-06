import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config"
import Breakfast from "./breakfastScreen"
import Lunch from "./lunchScreen";
import Snacks from "./snacksScreen";
import Dinner from "./dinnerScreen";
import MyHeader from "../components/myHeader";

export default class RecipiesAndDrinks extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>

                    <MyHeader title={"Healthy Recipies And Drinks"} navigation={this.props.navigation}/>

                <View style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}>
                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                      console.log("Print Me")
                                      this.props.navigation.navigate("Breakfast")
                                  }} >
                    <Text style={styles.buttonText}>
                        Breakfast Options
                    </Text>
                </TouchableOpacity>
                

                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Lunch")
                                  }} >
                    <Text style={styles.buttonText}>
                        Lunch Options
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Snacks")
                                  }} >
                    <Text style={styles.buttonText}>
                        Snacks Options
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                                  onPress={()=>{
                                      this.props.navigation.navigate("Dinner")
                                  }} >
                    <Text style={styles.buttonText}>
                        Dinner Options
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