
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
                                centerComponent={{ text:" Lemon Detox Water ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
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
                       Ingredients:
                       </Text>
                       <View style={{marginRight:600 , alignItems:"center"}}>

                       <Text style={styles.text}>

                                    1 pinch SALT  
                                    {"\n"}
                                    2 tablespoons HONEY   
                                    {"\n"}
                                    2 tablespoons APPLE CIDER VINEGAR
                                    {"\n"}
                                    2 cups WATER
                                    {"\n"}
                                    1 LEMON   
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

                            1. In a bowl, zest the LEMON , cut and squeeze the lemon juice
                            {"\n"}
                            2. Add APPLE CIDER VINEGAR, HONEY and SALT to taste. Mix well
                            {"\n"}
                            3. Add 2 cups of WATER and mix well
                            {"\n"}
                            4. The Detox Water is ready and can be consumed immediately or can be stored in fridge for later use.
                            {"\n"}
                            5.Your healthy meal is Ready!!
                            {"\n"}
                                   
                   </Text>
                </View>
                </View>

                <View style={{marginRight:200, alignItems:"center"}}>
                <Text style={{color:"white" , marginLeft:300}}>
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
    

