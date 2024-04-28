import React from "react";
import { ScrollView, View, Text, TouchableOpacity , Image} from "react-native";

const categories = ["Grains", "Dairy", "Fruits", "Veggies", "Others"];

const Sidebar = () => {
  return (
    <View className="w-1/4 bg-gray-100 p-2">
      <Text className="text-sm font-bold mb-2 w-full text-center">Categories</Text>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} className="mb-[5px] py-4">
            <Image
        source={{ uri: "img" }}
        style={{ width: "100%", height: 57, resizeMode: "contain" }}
      />
          <Text className="text-md text-center w-full">{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Sidebar;
