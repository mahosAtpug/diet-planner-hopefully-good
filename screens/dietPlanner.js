
import {SafeAreaView} from "react-native-safe-area-context"
import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from "../components/myHeader"

export default class Diet extends React.Component{

    constructor (){
        super()
        this.state={
          userId : firebase.auth().currentUser.email,
          breakfast:"",
          lunch:"",
          snacks:"",
          dinner:"" ,
        }
    }

    getDietPlan=()=>{
        var date = new Date().toString()
        var day = date.substring(0 , 3).trim()
        switch (day){
        case "Mon": day = "Monday";
        break;
        case "Tue": day = "Tuesday";
        break;
        case "Wed": day = "Wednesday";
        break;
        case "Thu": day = "Thursday";
        break;
        case "Fri": day = "Friday";
        break;
        case "Sat": day = "Saturday";
        break;
        case "Sun": day = "Sunday";
        break;
        }
        console.log(day)

        db.collection("diet_plan").where("user_id" , "==" , this.state.userId)
        .where("day" , "==" , day)
        .onSnapshot((snapshot)=>{

            snapshot.forEach((doc)=>{
                var dietPlan = doc.data()
                this.setState({
                    breakfast:dietPlan.breakfast,
                    lunch:dietPlan.lunch,
                    snacks:dietPlan.snacks,
                    dinner:dietPlan.dinner
                })
            })
        })
    }

    componentDidMount(){
        this.getDietPlan()
    }

    render(){
        return(
            <View style={{flex:1}}>
                
               
                <MyHeader title={"Diet Planner"} navigation={this.props.navigation} />  

                <View style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}style={{flex:1 , justifyContent:"center" , alignItems:"center" ,    backgroundColor:'#207FA1'        }}>

                    <Text style={{fontSize:40 , fontWeight:"bold" , color:"white" , marginBottom:35}}>
                        Today's Diet Plan
                    </Text>

                    {
                        this.state.breakfast === ""?
                        (
                            <View>
                               <Text>
                                  You don't Have a DIET SCHEDULE for today. Please Make One
                               </Text>
                            </View>
                        ):
                        (
                           <View>
                          <Text style={styles.textStyle}>
                            BREAKFAST: {this.state.breakfast}
                        </Text>
                 

                  
                        <Text style={styles.textStyle}>
                            LUNCH: {this.state.lunch}
                        </Text>

                        <Text  style={styles.textStyle}>
                            SNACKS: {this.state.snacks}
                        </Text>

                        <Text style={styles.textStyle}>
                            DINNER: {this.state.dinner}
                        </Text>
                     

                            </View>   
                        )
                    }



                        

                     
                     </View>
                </View>
            
        )
    }
    
}

const styles= StyleSheet.create({
      textStyle:{
          color:"white",
          fontSize:20
      }
})