import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import SpotsList from "./pages/SpotsList";
import Booking from "./pages/Booking";
import BookingList from "./pages/BookingList";


const AppStack = createStackNavigator()

function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={ Login } />
                <AppStack.Screen name="SpotsList" component={ SpotsList } />
                <AppStack.Screen name="Booking" component={ Booking } />
                <AppStack.Screen name="BookingList" component={ BookingList } />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes