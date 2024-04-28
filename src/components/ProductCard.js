import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ProductCard = ({ title, id, price, image, scale, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <View className='bg-white m-1 rounded-lg w-[135px] border border-gray-200 shadow-lg'>
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
        <Text className='text-gray-500'>
          ₹{price.toLocaleString()}
          {" / "}
          {scale}
        </Text>
        <View className='flex-row items-center mt-2'>
          <TouchableOpacity
            onPress={handleAddToCart}
            className='border-yellow-600 border text-white px-2 py-1 rounded w-full justify-center flex flex-row items-center space-x-2'>
            <Text className='text-center text-yellow-600 font-extrabold'>
              ADD
            </Text>
            <FontAwesomeIcon color='#d97706' icon={faCartPlus} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
