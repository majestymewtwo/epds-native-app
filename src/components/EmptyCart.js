import React from "react";
import { Image, Text, View } from "react-native";

const EmptyCart = () => {
  return (
    <View className='flex items-center justify-center h-[70vh]'>
      <Image
        resizeMode='contain'
        source={require("../../assets/empty-cart.png")}
        className='w-2/3 h-52'
      />
      <Text className='text-lg'>Your cart seems to be empty</Text>
    </View>
  );
};

export default EmptyCart;
