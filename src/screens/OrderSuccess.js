import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";

const OrderSuccess = ({ navigation }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Orders");
    }, 5000);
  }, [isFocused]);

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Image
        resizeMode='contain'
        className='w-56'
        source={require("../../assets/order-sucess.gif")}
      />
      <Text className='text-lg'>Order Placed Successfuly</Text>
    </View>
  );
};

export default OrderSuccess;
