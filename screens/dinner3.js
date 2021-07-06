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
                                centerComponent={{ text:"Banana Dates Smoothie" , style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Serves: 1
                       {"\n"}
                       Time: 10-15 mins
                       {"\n"}
                       Difficulty: Easy       
                   </Text>
                </View>

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                {"\n"}
                       Ingredients:
                       </Text>
                       <View style={{marginLeft:200 }}>

                       <Text style={styles.text}>
                                    BANANA ROBUSTA
                                    {"\n"}
                                    DATES SEEDLESS                                    
                                    {"\n"}
                                    3 tablespoons CURD
                                    {"\n"}
                                    3/4 cups SKIMMED MILK
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

                              1. In a pan add MILK and DATES.Bring to Boil.
                              {"\n"}
                              2. In a blender add DATES, MILK and SLICED BANANAS. Blend to get a smooth consistency.
                              {"\n"}
                               3.Garnish with chopped DATES
                               {"\n"}
                              4.Your healthy meal is Ready!!
                                   
                   </Text>
                </View>
                </View>

                <View style={{marginLeft:20 , alignItems:"center"}}>
                <Text style={{color:"white" , marginLeft:100}}>
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
    

