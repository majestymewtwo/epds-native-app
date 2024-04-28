import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const OrderCard = ({ title, quantity, image, scale }) => {
  return (
    <View className='bg-white rounded-lg w-[110px] border border-gray-200 shadow-lg'>
      <View className='w-full h-20 rounded-t-lg'>
        <Image
          source={{ uri: image }}
          resizeMode='cover'
          className='w-full h-full'
        />
      </View>
      <View className='p-2'>
        <Text className='font-bold mt-2'>
          {title[0].toUpperCase() + title.slice(1)}
        </Text>
        <Text className='text-gray-500 capitalize'>
          {quantity} {scale}
        </Text>
      </View>
    </View>
  );
};

export default OrderCard;
