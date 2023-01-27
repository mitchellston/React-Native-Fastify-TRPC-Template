import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// pages
import { Home } from "../screens/home";

export type RootStackParamList = {
  Home: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
