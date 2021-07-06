import React from "react";
import {TouchableOpacity , Text , Image , StyleSheet , View, TextInput, Alert , Modal, ScrollView , KeyboardAvoidingView} from "react-native"
import DietPlanner from "../screens/dietPlanner"
import {Header , Icon} from "react-native-elements"
import firebase from "firebase";
import db from "../config"

export default class Breakfast1 extends React.Component{
    render(){
        return(


            <View style={styles.container}>

               
                                <Header  
                                leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                                centerComponent={{ text:" Boiled Egg Sandwich ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                
              
               

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                   {"\n"}
                       Serves: 3
                       {"\n"}
                       Time: 25-30 mins
                       {"\n"}
                       Difficulty: Easy    
                       {"\n"}   
                   </Text>
                </View>

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                   {"\n"} 
                       Ingredients: 
                       </Text>
                       <View style={{marginRight:650 , alignItems:"center"}}>
                       <Text style={styles.text}>
                                    1 teaspoon SALT
                                    {"\n"}
                                    1 teaspoon OIL
                                    {"\n"}
                                    1 TOMATO
                                    {"\n"}
                                    1 ONION
                                    {"\n"}
                                    6 BROWN BREAD SLICES
                                    {"\n"}
                                    1 teaspoon PEPPER
                                    {"\n"}
                                    3 GREEN CHILLIES
                                    {"\n"}
                                    2 teaspoons CORIANDER LEAVES
                                    {"\n"}
                                    4 RAW EGG
                                    {"\n"}
                                    {"\n"}

                                    </Text>
                   </View>
                                   
                   
                </View>

                <View >
                <Text style={{color:"white" , marginLeft:100}}>
                   Steps: 
                   </Text>
                   <View style={{marginLeft:200 , alignItems:"center"}}>
                   <Text style={styles.text}>
                                                           {"\n"}
                              1. Boil the EGG in SALT WATER for 10-12 minutes.
                               {"\n"}
                              2. Peel and Cut the BOILED EGGS into small dice.
                              {"\n"}
                              3. Fine chop the ONION , TOMATO , GREEN CHILLIES and CORIANDER LEAVES
                              {"\n"}
                              4. Take a mixing bowl, add dices of BOILED EGG along with ONION , TOMATO , CORIANDER , GREEN CHILLIES , SALT and PEPPER. Mix it well to combine evrything and set aside.
                              {"\n"}
                              5. Place the mixture on a BREAD SLICE and sandwich it with another slice. Repeat the same with other BREAD SLICES.
                              {"\n"}
                              4. Heat the pan , add a little OIL. Place
                              {"\n"}
                              5.Your healthy meal is Ready!!
                              {"\n"}

                                   
                   </Text>
                </View>
                </View>

                <View style={{alignItems:"center"}}>
                   <Text style={styles.text}>

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
    
