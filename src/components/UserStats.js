import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import {
  faFingerprint,
  faMobileScreenButton,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, View } from "react-native";

const UserStats = () => {
  return (
    <View className='mt-6 rounded-lg border-y border-gray-300 w-[95%] mx-auto'>
      <Text className='bg-yellow-600 text-white rounded-t-lg font-semibold text-lg p-4 '>
        Family Card Details
      </Text>
      <View>
        <View className='flex flex-row'>
          <Card icon={faAddressCard} name={"family cards"} no={22419976} />
          <Card icon={faUserGroup} name={"beneficiaries"} no={70083901} />
        </View>
        <View className='flex flex-row'>
          <Card icon={faFingerprint} name={"aadhar regd."} no={69682440} />
          <Card
            icon={faMobileScreenButton}
            name={"mobile regd."}
            no={22415693}
          />
        </View>
      </View>
    </View>
  );
};

const Card = ({ no, name, icon }) => {
  return (
    <View className='w-1/2 p-2 flex flex-row items-center justify-between text-yellow-600 border border-gray-300  hover:bg-gray-200 cursor-pointer transition-colors ease-in duration-100'>
      <View>
        <Text className='text-xl'>{no.toLocaleString()}</Text>
        <Text className='capitalize'>{name}</Text>
      </View>
      <FontAwesomeIcon size={35} style={{ color: "#CA8A04" }} icon={icon} />
    </View>
  );
};

export default UserStats;
