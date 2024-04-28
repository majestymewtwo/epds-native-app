import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View className='w-full bg-slate-800 px-2 pb-3 pt-10'>
      <View className='flex flex-row items-center justify-around'>
        <Text className='text-slate-50'>English</Text>
        <Text className='text-slate-50'>தமிழ்</Text>
        <Text className='text-slate-50'>+91 XXXXX XXXXX</Text>
      </View>
    </View>
  );
};

export default Header;
