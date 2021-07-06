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
                                centerComponent={{ text:" Dabeli ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
                                backgroundColor = "#73B8C7"
                                />                
               </View>

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Serves: 6
                       {"\n"}
                       Time: 45 mins - 1 hr
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
                       <View style={{marginRight:580 , alignItems:"center"}}>
                       <Text style={styles.text}>
                       {"\n"}
                                         1/4 cups PEANUTS WITH SKIN
                                         {"\n"}
                                         1/4 teaspoons RED CHILLI POWDER
                                         {"\n"}
                                         2 teaspoons OIL
                                         {"\n"}
                                         1/2 teaspoons JAGGERY POWDER
                                         {"\n"}
                                         1/2 cups CHANA/CHIKPEAS
                                         {"\n"}
                                         1 teaspoon SALT
                                         {"\n"}
                                         1 teaspoon CHAT MASALA
                                         {"\n"}
                                         1/2 teaspoons CHANNA MASALA
                                         {"\n"}
                                         1/2 teaspoons TURMERIC POWDER
                                         {"\n"}
                                         1 ONION
                                         {"\n"}
                                         1 POMEGRANTE
                                         {"\n"}
                                         6 WHITE PAV
                                         {"\n"}
                                         6g CORIANDER LEAVES 
                                         {"\n"}
                                         1/4 cups GARLIC CHUTNEY
                                         {"\n"}
                                         1/4 cups TAMARIND CHUTNEY
                                         {"\n"}
                                   
                   </Text>
                </View>
                </View>

                

                <View>
                <Text style={{color:"white" , marginLeft:100}}>
                       Steps: 
                       </Text>
                       <View style={{marginLeft:230}}>
                              <Text style={{color:"white"}}>
                              {"\n"}
                              1. Clean the POMEGRANTE, remove seeds , and set aside. Chop ONION and CORIANDER and set aside.
                              {"\n"}
                              2. Soak CHIKPEAS/CHANA in water for 4-6 hours overnight. Pressure Cook the CHIKPEAS/CHANA until soft. Drain the water and mash the CHANA till fine. Set Aside
                              {"\n"}
                              3. Heat saucepan. Add OIL and chopped ONION. Saute till golden brown. 
                              {"\n"}
                              4. Add the CHANA MASALA, RED CHILI POWDER, TURMERIC POWDER, CHAT MASALA and SALT to taste. Allow the masalas to cook.
                              {"\n"}
                              5. Add mashed CHIKPEAS and a little WATER. Let it cook for 2 mins and finish it with CORIANDER and LEMON JUICE. Add 1 tbsp TAMARIND CHUTNEY , JAGGERY POWDER and mix well. Let it cook untill the mixture gets thick.
                              {"\n"}
                              6. Finish with CORIANDER, LEMON JUICE , check Seasoning and set aside to cool down. As cooled add half of the pomegrante seeds in and mix.
                              {"\n"}
                              7. Roast PEANUTS in a pan and let it cool down and remove the skin. Add 1/2 tsp of OIL , SALT , RED CHILI POWDER , CHAT MASALA. Mix well and turn off the flame. Add some LEMON JUICE.
                              {"\n"}
                              8. Take a WHOLE WHEAT PAV , slice it , and spread TAMARIND CHUTNEY on both sides. Add the stuffing and put some MASALA PEANUTS.
                              {"\n"}
                              9. Close the PAV and roll in some POMEGRANTE SEEDS. Serve
                              {"\n"}
                              10.Your healthy meal is Ready!!
                              {"\n"}
                                
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