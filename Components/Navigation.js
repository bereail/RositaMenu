import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "../Screens/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import StackScreen from "../Screens/StackScreen";
import MenuScreen from "../Screens/MenuScreen";
import ParaComer from "../Screens/ParaComer";
import ParaTomar from "../Screens/ParaTomar";

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

// Stack Navigator for Home
function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <HomeStackNavigator.Screen
        name="Stack"
        component={StackScreen}
        options={{
          title: "Stack Screen",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
            <HomeStackNavigator.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          title: "Menu Screen",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
                  <HomeStackNavigator.Screen
        name="RositaComidas"
        component={ParaComer}
        options={{
          title: "Comidas",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
                  <HomeStackNavigator.Screen
        name="Bebidas"
        component={ParaTomar}
        options={{
          title: "Bebidas",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}

// Bottom Tab Navigator
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveBackgroundColor: "purple",
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
          tabBarBadge: 10,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
            <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
                  <Tab.Screen
        name="RositaComidas"
        component={ParaComer}
        options={{
          tabBarLabel: "Comidas",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
                  <Tab.Screen
        name="RositaBebidas"
        component={ParaTomar}
        options={{
          tabBarLabel: "Bebidas",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
