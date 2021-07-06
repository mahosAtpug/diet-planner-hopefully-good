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
                                centerComponent={{ text:" Mango Banana Smoothie ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Serves: 1
                       {"\n"} 
                       Time: 15 mins
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
                                    1 and 1/2(half) cup MANGO PUREE
                                    {"\n"}
                                    2 tablespoons CHIA SEEDS
                                    {"\n"}
                                    10 DATES SEEDLESS
                                    {"\n"}
                                    2 BANANAS
                                    {"\n"}
                                    1/2(half) teaspoons WATER
                                    {"\n"}

                                   
                   </Text>
                </View>
                </View>

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Steps:
                       </Text>
                       <View style={{marginLeft:230}}>
                       <Text style={styles.text}>
                           {"\n"}
                              1. Soak CHIA SEEDS in a bowl for 7-10 mins.
                              {"\n"}
                              2. In a blender add chopped DATES , sliced BANANAS, MANGO PUREE soaked CHIA SEEDS, WATER and then blend.
                              {"\n"}
                              3. Pour it in a Glass and Serve Chilled
                              {"\n"}
                              4.Your healthy meal is Ready!!
                              {"\n"}
    
                   </Text>
                </View>
                </View>

                <View style={{alignItems:"center" , justifyContent:"center" , flex:1}}>                   
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
    