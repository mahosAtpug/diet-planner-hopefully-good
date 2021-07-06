import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import firebase from "firebase";
import db from "../config"
import {Header , Icon} from "react-native-elements"


export default class Breakfast1 extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                                <Header  
                                leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                                centerComponent={{ text:" Bruschetta ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Serves: 4
                       {"\n"}
                       Time: 20-30 mins
                       {"\n"}
                       Difficulty: Intermediate       
                       {"\n"}
                   </Text>
                </View>

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                {"\n"}
                       Ingredients:
                       </Text>
                       <View style={{marginLeft:200}}>

                       <Text style={styles.text}>
                                    1 teaspoon SALT
                                    {"\n"}

                                    100g WHITE DAL 
                                    {"\n"}

                                    2 TOMATOES
                                    {"\n"}

                                    6g BASIL
                                    {"\n"}

                                    1 LEMON
                                    {"\n"}

                                    6g PARSLEY
                                    {"\n"}

                                    10 pieces BROWN BREAD
                                    {"\n"}

                                    2 tablespoons OLIVE OIL
                                    {"\n"}

                                    1 teaspoon PEPPER
                                    {"\n"}

                                    6 pieces GARLIC
                                    {"\n"}

                   </Text>
                </View>
                </View>

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Steps: 
                       </Text>
                       <View style={{marginLeft:200}}>

                       <Text style={styles.text}>

                            1. Chop the tomatoes into dices and place in a bowl
                            {"\n"}
                            2. Chop half the garlic, tear the basil by hand into pieces and add to the tomatoes. Add 1 tablespoon of olive oil too
                            {"\n"}
                            3. Season with salt and pepper
                            {"\n"}
                            4. Take 4 to 5 bread slices and toast till golden and crispy
                            {"\n"}
                            5. Scoop the tomato mixture onto it
                            {"\n"}
                            6. Repeat till all bread and mixture is used up
                            {"\n"}
                            7. Immediately serve
                            {"\n"}
                            8. Your meal is Ready!!
                            {"\n"}


                                   
                   </Text>
                </View>
                </View>

                <View style={{marginLeft:20 , alignItems:"center"}}>
                <Text style={{color:"white" , marginLeft:100}}>
                       I hope you had fun in making the dish. Enjoy the meal!
                                   
                   </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#207FA1',
       
      },
      text:{
        color:"white"
    }
})

    