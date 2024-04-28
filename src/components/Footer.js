import React from "react";
import { Image, Text, View } from "react-native";

const Footer = () => {
  return (
    <View className='flex flex-row items-center space-x-1 w-full bg-slate-800 px-2 py-3'>
      <Image
        source={require("../../assets/tngovt.png")}
        alt='Govt Logo'
        resizeMode='contain'
        className='h-12 w-12'
      />
      <View>
        <Text className='text-slate-50 text-xs font-bold'>
          OFFICIAL APP OF CIVIL SUPPLIES AND CONSUMER
        </Text>
        <Text className='text-slate-50 text-xs font-bold'>
          PROTECTION DEPARTMENT, GOVERNMENT OF TAMILNADU
        </Text>
        <Text className='text-slate-50 text-xs'>
          E-Public Distribution System
        </Text>
      </View>
    </View>
  );
};

export default Footer;
