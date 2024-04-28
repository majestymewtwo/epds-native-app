import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const categories = [
  {
    image: require("../../assets/grains.jpg"),
    name: "Grains",
  },
  {
    image: require("../../assets/dairy.jpg"),
    name: "Dairy",
  },
  {
    image: require("../../assets/fruits.jpeg"),
    name: "Fruits",
  },
  {
    image: require("../../assets/veggies.jpg"),
    name: "Veggies",
  },
  {
    image: require("../../assets/others.png"),
    name: "Others",
  },
];

const Sidebar = () => {
  return (
    <View className='w-1/4 bg-gray-100 p-2'>
      <Text className='text-sm font-bold mb-2 w-full text-center'>
        Categories
      </Text>
      {categories.map((category, index) => (
        <View key={index} className='mb-2'>
          <View className='rounded-full overflow-hidden h-20 w-20 bg-black'>
            <Image
              source={category.image}
              resizeMode='cover'
              className='w-full h-full'
            />
          </View>
          <Text className='text-md text-center w-full'>{category.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Sidebar;
