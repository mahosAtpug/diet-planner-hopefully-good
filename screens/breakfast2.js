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
                                centerComponent={{ text:" Rawa Uttapam ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                
                

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Serves: 2
                       {"\n"} 
                       Time: 25-30 mins
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
                       <View style={{marginRight:600 , alignItems:"center"}}>

                       <Text style={styles.text}>
                                    1 teaspoon SALT
                                    {"\n"}
                                    2 teaspoon OIL
                                    {"\n"}
                                    1/2(half) cup RAVA SOOJI
                                    {"\n"}
                                    1 teaspoon RED CHILLI POWDER
                                    {"\n"}
                                    1 TOMATO
                                    {"\n"}
                                    1 ONION
                                    {"\n"}
                                    1 GREEN CAPSICUM
                                    {"\n"}
                                    10g CORIANDER WITH ROOTS
                                    {"\n"}
                                    1/2(half) cup CURD
                                    {"\n"}
                                    2 GREEN CHILLIES
                                    {"\n"}
                                    1/2(half) cup WATER
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

                            1. Fine chop the ONION , TOMATO , GREEN CHILLIES ,CORIANDER LEAVES and CAPSICUM. Add it to a bowl and Mix.
                              {"\n"}
                              2. Take a mixing bowl, add RAWA with WATER and SALT, RED CHILI POWDER along with ONION , TOMATO , CORIANDER , GREEN CHILLIES and CURD.
                              {"\n"}
                              3. Mix well to avoid any lumps. The batter should have a pouring consistency.
                              {"\n"}
                              4. Heat the non - stick pan. Pour a laddle full of batter and spread in a circular motion (should be half the size of the tip of the index finger in thickness). Drizzle a little OIL.
                              {"\n"}
                              5. Once it cooks from one side, lightly release from the pan and flip and cook on the other side untill it cooks through it should be golden brown in colour.
                              {"\n"}
                              6. Once done from both the sides , serve hot with Green Chutney.
                              {"\n"}
                              7.Your healthy meal is Ready!!
                              {"\n"}

                                   
                   </Text>
                </View>
                </View>

                <View style={{marginLeft:20 , alignItems:"center"}}>
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
    