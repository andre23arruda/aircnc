import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import SpotsList from "./pages/SpotsList";
import Booking from "./pages/Booking";

const AppStack = createStackNavigator()

function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={ Login } />
                <AppStack.Screen name="SpotsList" component={ SpotsList } />
                <AppStack.Screen name="Booking" component={ Booking } />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes