import {
  faCartShopping,
  faClipboardList,
  faHome,
  faRightFromBracket,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Navbar = () => {
  const navigation = useNavigation();
  const logOut = () => {
    AsyncStorage.removeItem("token").then(() => {
      navigation.navigate("Login");
    });
  };
  return (
    <View className='flex flex-row items-center justify-around bg-green-900 w-full p-2'>
      <Link link='Home' icon={faHome} navigation={navigation} />
      <Link link='Products' icon={faShop} navigation={navigation} />
      <Link link='Cart' icon={faCartShopping} navigation={navigation} />
      <Link link='Orders' icon={faClipboardList} navigation={navigation} />
      <TouchableOpacity className='flex items-center' onPress={logOut}>
        <FontAwesomeIcon size={20} color='white' icon={faRightFromBracket} />
        <Text className='text-white text-xs'>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const Link = ({ link, icon, navigation }) => {
  const navigateToLink = () => {
    navigation.navigate(link);
  };
  return (
    <TouchableOpacity className='flex items-center' onPress={navigateToLink}>
      <FontAwesomeIcon size={20} color='white' icon={icon} />
      <Text className='text-white text-xs'>{link}</Text>
    </TouchableOpacity>
  );
};

export default Navbar;
