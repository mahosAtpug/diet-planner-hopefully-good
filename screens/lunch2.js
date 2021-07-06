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
                                centerComponent={{ text:" Aloo Matar ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                
               </View>

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Serves: 2
                       {"\n"}
                       Time: 30 mins
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
                       <View style={{marginLeft:230}}>

                       <Text style={styles.text}>
                       {"\n"}
                                    2 tablespoons REFINED OIL
                                    {"\n"}
                                    1 teaspoon CUMIN
                                    {"\n"}
                                    1 teaspoon MIRCH POWDER
                                    {"\n"}
                                    1 pinch SALT
                                    {"\n"}
                                    2 POTATOES
                                    {"\n"}
                                    1 teaspoon TURMERIC POWDER
                                    {"\n"}
                                    1/4 cups CORIANDER w/o ROOTS
                                    {"\n"}
                                    1/2 cups PEELED GREEN PEAS
                                    {"\n"}
                                    1 ONION
                                    {"\n"}
                                    2 GREEN CHILLIES
                                    {"\n"}
                                    1 cup WATER
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
                              1. Cut the POTATO into dieces , boil , strain and keep aside
                              {"\n"}
                              2. Chop ONION , GREEN CHILI , CORIANDER LEAVES and keep aside
                              {"\n"}
                              3. Heat the OIL in a pan. Add CUMIN SEEDS and allow to splutter
                              {"\n"}
                              4. Add TURMERIC POWDER , GRREN PEAS and other POWDERED SPICES
                              {"\n"}
                              5. Add chopped ONION and saute well
                              {"\n"}
                              6. Add dieced boiled POTATAO and mix again. Cook on a low flame
                              {"\n"}
                              7. Check for final Seasoning. Add chopped CORIANDER LEAVES.
                              {"\n"}
                              8. Serve hot
                              {"\n"}
                              
                                  9.Your healthy meal is Ready!!
                                  
                                   
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