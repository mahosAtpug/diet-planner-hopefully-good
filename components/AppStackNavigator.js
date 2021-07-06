import React from "react";
import breakfastScreen from "../screens/breakfastScreen"
import snacksScreen from "../screens/snacksScreen"
import lunchScreen from "../screens/lunchScreen"
import dinnerScreen from "../screens/dinnerScreen"
import {createStackNavigator} from "react-navigation-stack"
import RecipiesAndDrinks from "../screens/recipiesAndDrinksScreen"
import SnacksScreen from "../screens/snacksScreen";
import Breakfast1 from "../screens/breakfast1";
import Breakfast2 from "../screens/breakfast2"
import Breakfast3 from "../screens/breakfast3"
import Breakfast4 from "../screens/breakfast4"
import Snack1 from "../screens/snack1";
import Snack2 from "../screens/snack2";
import Snack3 from "../screens/snack3";
import Lunch1 from "../screens/lunch1";
import Lunch2 from "../screens/lunch2";
import Lunch3 from "../screens/lunch3";
import Dinner2 from "../screens/dinner2";
import Dinner1 from "../screens/dinner1";
import Dinner3 from "../screens/dinner3";

export const AppStackNavigator = createStackNavigator({
    RecipiesAndDrinks:{
        screen:RecipiesAndDrinks,
        navigationOptions:{
            headerShown:false
        }
    },

    Breakfast:{
        screen:breakfastScreen,
        navigationOptions:{
            headerShown:false
        }
    },

    Lunch:{
        screen:lunchScreen,
        navigationOptions:{
            headerShown:false
        }
    },

    Snacks:{
        screen:snacksScreen,
        navigationOptions:{
            headerShown:false
        }
    },

    Dinner:{
        screen:dinnerScreen,
        navigationOptions:{
            headerShown:false
        }
    },

    Breakfast1:{
        screen:Breakfast1,
        navigationOptions:{
            headerShown:false
        }
    },

    Breakfast2:{
        screen:Breakfast2,
        navigationOptions:{
            headerShown:false
        }
    },

    Breakfast3:{
        screen:Breakfast3,
        navigationOptions:{
            headerShown:false
        }
    },

    Breakfast4:{
        screen:Breakfast4,
        navigationOptions:{
            headerShown:false
        }
    },

    Dinner1:{
        screen:Dinner1,
        navigationOptions:{
            headerShown:false
        }
    },

    Dinner2:{
        screen:Dinner2,
        navigationOptions:{
            headerShown:false
        }
    },

    Dinner3:{
        screen:Dinner3,
        navigationOptions:{
            headerShown:false
        }
    },

    Lunch1:{
        screen:Lunch1,
        navigationOptions:{
            headerShown:false
        }
    },

    Lunch2:{
        screen:Lunch2,
        navigationOptions:{
            headerShown:false
        }
    },

    Lunch3:{
        screen:Lunch3,
        navigationOptions:{
            headerShown:false
        }
    },

    Snack1:{
        screen:Snack1,
        navigationOptions:{
            headerShown:false
        }
    },

    Snack2:{
        screen:Snack2,
        navigationOptions:{
            headerShown:false
        }
    },

    Snack3:{
        screen:Snack3,
        navigationOptions:{
            headerShown:false
        }
    },

},

{
 initialRouteName:"RecipiesAndDrinks"

}

)