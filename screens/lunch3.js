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
                                centerComponent={{ text:" Chocolate Peanut Butter Banana Cups ", style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
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
                                

                                   

                        1 cup DARK CHOCOLATE

                                    {"\n"}

                                    1 tablespoons JAGGERY POWDER
                                    {"\n"}

                                    1/4 teaspoons SALT                                   
                                    {"\n"}

                                                                     1 BANANAS

                                    {"\n"}

                                    4 tablespoons PEANUT BUTTER
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

                        1. Melt DARK CHOCOLATE in the microwave. Add a spoon full of melted CHOCOLATE in a silicon CUPCAKE LINER. Spread the chocolate on the edges with the spoon
                        {"\n"}

                              2. Keep it in the fridge to set. Meanwhile, add BANANA , PEANUT BUTTER , JAGGERY POWDER and SALT to blender jar.
                             
                              {"\n"}
                               3. Process untill you get a smooth creamy texture
                               {"\n"}
                               4. Remove the mold from the fridge. Fill the cups with PEANUT BUTTER mixture leaving enough room to add a layer of chocolate on top. Flatten out the mixture with a spoon and put it back in the fridge for 10 mins.
                               {"\n"}
                               5. Remove it from the fridge and put a layer of melted chocolate on top. Smoothen with the back of the spoon and let it set in the fridge for 5 mins
                               {"\n"}
                               6. Demould and serve.
                               {"\n"}
                               7. Enjoy your Dessert!!
                                   
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
    

