import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function Home({ navigation }) {
  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      console.log(token);
    });
  }, []);

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const logOut = () => {
    AsyncStorage.removeItem("token").then(() => {
      navigation.navigate("Login");
    });
  };

  return (
    <View className='flex-1 items-center justify-center bg-white min-h-screen'>
      <Text>This is Home Page</Text>
      <Button title='Logout' onPress={logOut} />
    </View>
  );
}
