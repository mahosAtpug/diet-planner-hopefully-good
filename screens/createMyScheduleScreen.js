import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/myHeader"
import {Picker} from '@react-native-picker/picker';


export default class CreateMySchedule extends React.Component{

    constructor(){
        super()
        this.state={
            userId: firebase.auth().currentUser.email,
            day:"",
            breakfast:"",
            lunch:"",
            snacks:"",
            dinner:""
        }
    }

    updateDatabase=()=>{
        db.collection("diet_plan").add({
            user_id:this.state.userId,
            day:this.state.day,
            breakfast:this.state.breakfast,
            lunch:this.state.lunch,
            snacks:this.state.snacks,
            dinner:this.state.dinner
        })
        Alert.alert("Diet Plan Updated Succesfully")
        alert("Diet Plan Updated Succesfully")
    }

    render(){
        return(
            <View style={{flex:1 , backgroundColor:'#207FA1'}}>
                <View>
                    <MyHeader title={"Create My Schedule"} navigation={this.props.navigation}/>
                </View>

                <View style = {{flex:1}}>
                    <View style = {{ flex:1 , marginTop:30 , alignItems:'center'}}>
        <Picker 
           
            selectedValue={this.state.day}
            style={{ height: 30, width: "50%", alignItems:'center' }}
            onValueChange={(itemValue, itemIndex) => this.setState({day:itemValue})}
        >
             <Picker.Item  label="--Pick A Day--" value="" />
             <Picker.Item  label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />             
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />


        </Picker>
        </View>

        <View style = {{ flex:1 , marginTop:30 , alignItems:'center'}}>
        <Picker
           
            selectedValue={this.state.breakfast}
            style={{ height: 30, width: "50%", alignItems:'center' }}
            onValueChange={(itemValue, itemIndex) => this.setState({breakfast:itemValue})}
        >
                         <Picker.Item  label="--Pick A Breakfast--" value="" />
            <Picker.Item label="Boiled Egg Sandwich" value="Boiled Egg Sandwich" />
            <Picker.Item label="Rawa Uttapam" value="Rawa Uttapam" />
            <Picker.Item label="Oats Peanut Butter Smoothie" value="Oats Peanut Butter Smoothie" />
            <Picker.Item label="Mango Banana Smoothie" value="Mango Banana Smoothie" />
            


        </Picker>
        </View>

       

        <View style = {{ flex:1 , marginTop:30 , alignItems:'center'}}>
        <Picker
           
            selectedValue={this.state.lunch}
            style={{ height: 30, width: "50%", alignItems:'center' }}
            onValueChange={(itemValue, itemIndex) => this.setState({lunch:itemValue})}
        >
                      <Picker.Item  label="--Pick A Lunch--" value="" />   
            <Picker.Item label="Palak Paneer" value="Palak Paneer" />
            <Picker.Item label="Aloo Matar" value="Aloo Matar" />
            <Picker.Item label="Chocolate Peanut Butter Banana Cups" value="Chocolate Peanut Butter Banana Cups" />
            


        </Picker>
        </View>

        <View style = {{ flex:1 , marginTop:30 , alignItems:'center'}}>
        <Picker
           
            selectedValue={this.state.snacks}
            style={{ height: 30, width: "50%", alignItems:'center' }}
            onValueChange={(itemValue, itemIndex) => this.setState({snacks:itemValue})}
        >
                         <Picker.Item  label="--Pick A Snack--" value="" />
            <Picker.Item label="Spice Roasted Mixed Nuts" value="Spice Roasted Mixed Nuts" />
            <Picker.Item label="Dabeli" value="Dabeli" />
            <Picker.Item label="Lemon Detox Water" value="Lemon Detox Water" />
            


        </Picker>
        </View>

        <View style = {{ flex:1 , marginTop:30 , alignItems:'center'}}>
        <Picker
           
            selectedValue={this.state.dinner}
            style={{ height: 30, width: "50%", alignItems:'center' }}
            onValueChange={(itemValue, itemIndex) => this.setState({dinner:itemValue})}
        >
                         <Picker.Item  label="--Pick A Dinner--" value="" />
            <Picker.Item label="Bruschetta" value="Bruschetta" />
            <Picker.Item label="Paneer Bhurji" value="Paneer Bhurji" />
            <Picker.Item label="Oats Peanut Butter Smoothie" value="Oats Peanut Butter Smoothie" />
            


        </Picker>
        </View>
        
        <TouchableOpacity style={{ width:200,
                                height:40,
                                alignSelf:"center",
                                alignItems:'center',
                                justifyContent:'center',
                                borderWidth:1,
                                borderRadius:10,
                                marginTop:30,
                                backgroundColor:'#FF5722'
                            }} 
                            onPress={()=>{
                 this.updateDatabase()
        }}>
            <Text>
                SAVE CHANGES
            </Text>
        </TouchableOpacity>

            </View>
            </View>
        )
    }
}