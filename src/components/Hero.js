import { faMap } from "@fortawesome/free-regular-svg-icons";
import {
  faGasPump,
  faLocationDot,
  faMapLocationDot,
  faScaleBalanced,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, View } from "react-native";

const Hero = () => {
  return (
    <View className='rounded-lg border-y border-gray-300 w-[95%] mx-auto'>
      <Text className='bg-green-800 text-white rounded-t-lg font-semibold text-lg p-4 '>
        Public Distribution System Details
      </Text>
      <View>
        <View className='flex flex-row'>
          <Card icon={faLocationDot} name={"districts"} no={39} />
          <Card icon={faMap} name={"taluks"} no={317} />
        </View>
        <View className='flex flex-row'>
          <Card icon={faWarehouse} name={"godowns"} no={255} />
          <Card icon={faScaleBalanced} name={"fair price shops"} no={34793} />
        </View>
        <View className='flex flex-row'>
          <Card icon={faGasPump} name={"kerosene bunker"} no={289} />
          <Card icon={faMapLocationDot} name={"total locations"} no={35082} />
        </View>
      </View>
    </View>
  );
};

const Card = ({ no, name, icon }) => {
  return (
    <View className='w-1/2 p-2 flex flex-row items-center justify-between text-green-800 border border-gray-300  hover:bg-gray-200 cursor-pointer transition-colors ease-in duration-100'>
      <View>
        <Text className='text-xl'>{no.toLocaleString()}</Text>
        <Text className='capitalize'>{name}</Text>
      </View>
      <FontAwesomeIcon size={35} style={{ color: "#166534" }} icon={icon} />
    </View>
  );
};

export default Hero;
