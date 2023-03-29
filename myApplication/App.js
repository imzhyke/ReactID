import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import InfoId from "./InfoId";
import Display from "./Display";
import Hobbies from "./Hobbies";
import Games from "./Games";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Movies from "./Movies";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InfoId">
       <Stack.Screen name="My ID" component={InfoId} />
       <Stack.Screen name="My Hobbies" component={Hobbies} />
        <Stack.Screen name="My Games" component={Games} />
        <Stack.Screen name="My Movies" component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
