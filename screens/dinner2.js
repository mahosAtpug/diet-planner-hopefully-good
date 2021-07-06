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
                                centerComponent={{ text:" Paneer Bhurji ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
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
                       <View style={{marginRight:600 , alignItems:"center"}}>

                       <Text style={styles.text}>
                                2 teaspoons REFINED OIL                                  
                                 {"\n"}

                                   1/2 teaspoon CUMIN 
                                    {"\n"}

                                    1/2 teaspoon CORIANDER POWDER
                                    {"\n"}

                                    1/2 teaspoon TURMERIC POWDER
                                    {"\n"}

                                    1/2 teaspoon KASURI METHI
                                    {"\n"}

                                    1 teaspoon SALT
                                    {"\n"}

                                    1 teaspoon RED CHILLI POWDER
                                    {"\n"}

                                    1 LEMON
                                                                        {"\n"}

                                                                        2 ONIONS
                                    {"\n"}

                                    1 teaspoon GINGER
                                    {"\n"}

                                    1 TOMATO
                                    {"\n"}

                                    250g PANEER
                                    {"\n"}

                                    2 teaspoons CORIANDER LEAVES
                                    {"\n"}
                                    
                                    2 GREEN CHILLIES
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

                            1. Crumble the paneer and set aside. Fine chop the green chilli, coriander leaves, onion,ginger, and tomato.
                            {"\n"}
                            2. Heat oil in a pan, add cumin seeds, ginger and green chilli. Saute well.
                            {"\n"}
                            3. Add the chopped onion, cook until saute. Add all the powder spices and salt to taste. Saute well.
                            {"\n"}
                            4. Add tomato, cook until soft and mushy. Once the tomato is cooked add crumbled paneer and mix well.
                            {"\n"}
                            5. Add kasuri methi. finish with coriander leaves and lemon juice. 
                            {"\n"}
                            6. Serve hot.
                            {"\n"}
                            7. Your healthy meal is Ready!!
                            {"\n"}
                                   
                   </Text>
                </View>
                </View>

                <View style={{marginLeft:20 , alignItems:"center"}}>
                <Text style={{color:"white" , marginLeft:100}}>
                {"\n"}
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
