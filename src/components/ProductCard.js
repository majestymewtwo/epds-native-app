import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ProductCard = ({ title, price, image, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const addToCart = () => {
    increment();
  };

  return (
    <View className="bg-white p-4 m-2 rounded-lg shadow-md w-5/12">
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: 100, resizeMode: "contain" }}
      />
      <Text className="text-lg font-bold mt-2">{title}</Text>
      <Text className="text-gray-500">{price}</Text>
      <View className="flex-row items-center mt-2">
        {quantity === 0 ? (
          <TouchableOpacity
            onPress={addToCart}
            className="border-yellow-400 border-2 text-white p-2 rounded w-full justify-center"
          >
            <Text className="text-center text-yellow-400 font-extrabold">Add</Text>
          </TouchableOpacity>
        ) : (
          <View className="flex-row items-center w-full justify-center">
            <TouchableOpacity
              onPress={decrement}
              className="bg-yellow-400 p-2 rounded"
            >
              <Text className="text-white font-extrabold">-</Text>
            </TouchableOpacity>
            <Text className="mx-4">{quantity}</Text>
            <TouchableOpacity
              onPress={increment}
              className="bg-yellow-400 p-2 rounded"
            >
              <Text className="text-white font-extrabold">+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default ProductCard;
