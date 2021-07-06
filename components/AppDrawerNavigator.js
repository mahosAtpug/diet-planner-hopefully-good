import React from "react";
import {createDrawerNavigator} from "react-navigation-drawer";
import CustomSideBarMenu from "./customSideBarMenu";
import SettingScreen from "../screens/settingScreen";
import DietPlanner from "../screens/dietPlanner";
import NotificationScreen from "../screens/notificationsScreen"
import CreateMySchedule from "../screens/createMyScheduleScreen"
import RecipiesAndDrinks from "../screens/recipiesAndDrinksScreen"
import {AppStackNavigator} from "./AppStackNavigator"
import Welcome from "../screens/welcomeScreen"

export const AppDrawerNavigator = createDrawerNavigator({
   
    Home : {
        screen:DietPlanner
    },

    Settings : {

        screen:SettingScreen
    },

    CreateMySchedule : {
        screen : CreateMySchedule,
        navigationOptions:{
            drawerLabel:"Create My Schedule"
        }
    },

    Notifications : {
        screen:NotificationScreen
    },
     
    Navigation : {
        screen:AppStackNavigator,
        navigationOptions:{
            drawerLabel:"Recipies And Drinks"
        }
    }

 },

 {
    contentComponent : CustomSideBarMenu
 },
 
 {
     initialRouteName : "Welcome" 
 }


)