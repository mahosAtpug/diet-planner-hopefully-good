import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/myHeader';


export default class NotificationsScreens extends React.Component{

    constructor(){
        super()
        this.state={
            userId: firebase.auth().currentUser.email,
            allNotifications:[],

        }
        this.notificationRef=null
    }

    getNotifications=()=>{
        this.notificationRef = db.collection("notifications")
        
        .onSnapshot((snapshot)=>{
            var allNotifications = []
            snapshot.docs.map((doc)=>{
                var notification = doc.data()
                notification["doc_id"] = doc.id
                allNotifications.push (notification)
            })
            this.setState(
                {
                  allNotifications :allNotifications
                }
            )
        })
    }

    componentDidMount (){
        this.getNotifications()
    }

    keyExtractor = (item , index) => {index.toString()}

    renderItem = ({item , i}) =>{

        return (
            <ListItem key={i} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>
                        {item.message}
                    </ListItem.Title>
                </ListItem.Content>

            </ListItem>
        )
    }


   render(){
       return(
           <View style={{flex:1, backgroundColor:'#207FA1'}}>

               <View style={{flex:0.1}}>
                    <MyHeader title={"Notifications"} navigation={this.props.navigation} />
               </View>

               <View style={{flex:0.9}}>
                   {
                       this.state.allNotifications.length===0
                       ?(
                           <View>
                              <Text>
                                  You Have No Notifications
                              </Text>
                           </View>
                       ):
                       <FlatList 
                       keyExtractor={this.keyExtractor}
                       data={this.state.allNotifications}
                       renderItem={this.renderItem}/>
                   }
               </View>
           </View>
       )
   }
}