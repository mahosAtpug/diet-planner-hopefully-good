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
                 <View>
                                <Header  
                                leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                                centerComponent={{ text:" Palak Paneer ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                
               </View>
               <ScrollView style={{width:"100%"}}>
               <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Serves: 3
                       {"\n"}
                       Time: 25 mins
                       {"\n"}
                       Difficulty: Intermediate       
                       {"\n"}
                   </Text>

                <Text style={{color:"white" , marginLeft:100}}>
                {"\n"}
                       Ingredients: 
                       </Text>
                       <View style={{marginLeft:200 }}>

                       <Text style={styles.text}>
                       {"\n"}
                                   2 teaspoons REFINED OIL
                                   {"\n"}
                                    1 teaspoon CUMIN
                                    {"\n"} 
                                    1 teaspoon GARAM MASSALA
                                    {"\n"}
                                    1 teaspoon SALT
                                    {"\n"}
                                    2 tablespoons CASHEW SPLIT
                                    {"\n"}
                                    1 1/2 teaspoons TURMERIC POWDER
                                    {"\n"}
                                    800g SPINACH w/o ROOTS
                                    {"\n"}
                                    8g GINGER
                                    {"\n"}
                                    2 ONIONS
                                    {"\n"}
                                    1 TOMATO
                                    {"\n"}
                                    350g PANEER
                                    {"\n"}
                                    2 RED CHILLIES
                                    {"\n"}
                                    3 GREEN CHILLIES
                                    {"\n"}
                                    10g GARLIC
                                    {"\n"}
                                    1 cup WATER
                                    {"\n"}
                   </Text>
                </View>

                <Text style={{color:"white" , marginLeft:100}}>
                       Steps:
                       
                       </Text>
                       
                       <View style={{marginLeft:200}}>
                             <Text style={styles.text}>
                             {"\n"}
                              1. Fine chop ONION , GINGER , TOMATO , GARLIC and GREEN CHILLI and set aside. Wash the SPINACH properly. Shred the SPINACH well
                              {"\n"}
                              2. Heat OIL in a pan , add CUMIN SEEDS, WHOLE RED CHILLI and allow to crackle. Add chopped GARLIC. Saute it till Golden Brown Color. Add chopped ONION and cook till Golden Brown 
                              {"\n"}
                              3. Add TURMERIC POWDER and cook for a minute. Add chopped GINGER well. Add shredded SPINACH and cook till it gets mashy
                              {"\n"}
                              4. Add TOMATO along with POWDERED SPICES except GARAM MASALA and cook till TOMATO gets mushy.
                              {"\n"}
                              5. Once the SPINACH gets cooked , remove it from the heat and cool down , make a fine paste of the cooked SPINACH.
                              {"\n"}
                              6. Take out the SPINACH puree. In the pan , add little WATER along with PANEER dieces. Allow it to cook till it gets a thick consistency.
                              {"\n"}
                              7. Finish it with GARAM MASALA.
                              {"\n"}
                              8.Your healthy meal is Ready!!
                                   
                   </Text>
                
                </View>
                

                <View style={{marginLeft:20 , alignItems:"center"}}>
                <Text style={{color:"white" , marginLeft:100}}>
                    {"\n"}
                       I hope you had fun in making the dish. Enjoy the meal!
                                   
                   </Text>
                </View>
                </View>
                </ScrollView>
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