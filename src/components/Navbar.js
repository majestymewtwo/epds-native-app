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
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartAtom } from "../../atoms/Cart";
import axios from "axios";

const Navbar = () => {
  const navigation = useNavigation();
  const [cart, setCart] = useRecoilState(CartAtom);
  const { API_URL } = process.env;

  const getCartItems = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;
    axios
      .get(`${API_URL}/product/getCart`, {
        headers: {
          Authorization: "Bearer " + token,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setCart({
          fetching: false,
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCartItems();
  }, [cart.fetching]);

  const logOut = () => {
    AsyncStorage.removeItem("token").then(() => {
      navigation.navigate("Login");
    });
  };

  return (
    <View className='flex flex-row items-center justify-around bg-green-900 w-full p-2'>
      <Link link='Home' icon={faHome} navigation={navigation} />
      <Link link='Products' icon={faShop} navigation={navigation} />
      <Link
        link='Cart'
        size={cart.data.length}
        icon={faCartShopping}
        navigation={navigation}
      />
      <Link link='Orders' icon={faClipboardList} navigation={navigation} />
      <TouchableOpacity className='flex items-center' onPress={logOut}>
        <FontAwesomeIcon size={20} color='white' icon={faRightFromBracket} />
        <Text className='text-white text-xs'>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const Link = ({ link, icon, size, navigation }) => {
  const navigateToLink = () => {
    navigation.navigate(link);
  };
  return (
    <TouchableOpacity
      className='flex items-center relative'
      onPress={navigateToLink}>
      <FontAwesomeIcon size={20} color='white' icon={icon} />
      <Text className='text-white text-xs'>{link}</Text>
      {link === "Cart" && (
        <View className='bg-red-800 flex items-center justify-center absolute h-5 w-5 rounded-full -top-2 -right-3'>
          <Text className='text-xs text-white'>{size}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Navbar;
