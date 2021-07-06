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
                                centerComponent={{ text:" Peanut Butter Smoothie With Oats ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                
               

                <View >
                <Text style={{color:"white" , marginLeft:100}}>
                       Serves: 2
                       {"\n"} 
                       Time: 10-15 mins
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
                    <View style={{marginRight:600 , alignItems:"center"}}>

                       <Text style={styles.text}>
                           {"\n"}
                                    2 tablespoons HONEY
                                    {"\n"}
                                    1 tablespoon ROLLED OATS
                                    {"\n"}
                                    2 BANANAS
                                    {"\n"}
                                    4 tablespoons UNSWEETENED PEANUT BUTTER
                                    {"\n"}
                                    3 cups COW MILK
                                    {"\n"}
                                    3 cups WATER
                                    {"\n"}
                                    </Text> 
                                   
                </View>
                </View>

                <View>
                   <Text style={{color:"white" , marginLeft:100}}>

                       Steps:

                       </Text>
                       <View style={{marginRight:600 , alignItems:"center"}}>

                       <Text style={styles.text}> 
                              1. Take ROLLED OATS in a bowl
                              {"\n"}
                              2. Add HONEY
                              {"\n"}
                              3. Add PEANUT BUTTER AND WATER/MILK of choice 
                              {"\n"}
                              4. Take the BANANAS and cut it in half.
                              {"\n"}
                              5. Take all ingredients in a blender and blitz!!
                              {"\n"}
                              6. Blend to a smoothie like consistency
                              {"\n"}
                              7. Drink or Serve Cold
                              {"\n"}
                              8. Enjoy your Scumptous Delight!!
                              {"\n"}
                                   
                   </Text>
                </View>
                </View>

                <View style={{marginLeft:20 , alignItems:"center"}}>
                   <Text style={styles.text}>
                       {"\n"}
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
    