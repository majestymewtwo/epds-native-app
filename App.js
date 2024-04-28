import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeWindStyleSheet } from "nativewind";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import ValidateOTP from "./src/screens/OTP";

NativeWindStyleSheet.setOutput({
  default: "native",
  web: "native",
});
const Stack = createNativeStackNavigator();
const navigationOptions = {
  headerBackVisible: false,
  gestureEnabled: false,
  headerShown: false,
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          options={navigationOptions}
          component={Login}
        />
        <Stack.Screen
          name='Validate'
          options={navigationOptions}
          component={ValidateOTP}
        />
        <Stack.Screen
          name='Home'
          options={navigationOptions}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
