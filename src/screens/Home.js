import { useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function Home({ navigation }) {
  useEffect(() => {
    alert("Hello");
  }, []);

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View className='flex-1 items-center justify-center bg-white min-h-screen'>
      <Text>This is Home Page</Text>
      <Button title='Go to Login' onPress={goToLogin} />
    </View>
  );
}
