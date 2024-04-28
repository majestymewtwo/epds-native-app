import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRecoilState } from "recoil";
import { CartAtom } from "../../atoms/Cart";
import CartCard from "../components/CartCard";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import EmptyCart from "../components/EmptyCart";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [cart, setCart] = useRecoilState(CartAtom);
  const { API_URL } = process.env;

  const checkOut = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;
    axios
      .post(
        `${API_URL}/product/checkout`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
            "ngrok-skip-browser-warning": "69420",
          },
        }
      )
      .then((res) => {
        Toast.show({
          type: "success",
          text1: res.data,
        });
        setCart({
          fetching: true,
          data: [],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCart = async (data) => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;
    axios
      .post(`${API_URL}/product/updateCart`, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeCart = async (id) => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;
    axios
      .delete(`${API_URL}/product/removeFromCart/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        Toast.show({
          type: "info",
          text1: res.data,
        });
        setCart({
          fetching: true,
          data: [],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View className='flex-1 items-center justify-between bg-white min-h-screen'>
      <Header />
      <ScrollView className='p-2 flex-1 w-full'>
        <Text className='text-xl font-semibold px-4 text-center'>My Cart</Text>
        {cart.data.length > 0 ? (
          <View className='w-full flex items-center'>
            {/* Products List */}
            {cart.data.map((product, index) => (
              <CartCard
                key={index}
                id={product.id}
                productId={product.productId}
                quantity={product.quantity}
                title={product.name}
                image={product.image}
                price={product.price}
                scale={product.scale}
                updateCart={updateCart}
                removeCart={removeCart}
              />
            ))}
            <TouchableOpacity
              onPress={checkOut}
              className='bg-green-700 p-2 rounded-md flex-row space-x-2 items-center'>
              <Text className='text-white'>Checkout Cart</Text>
              <FontAwesomeIcon color='white' icon={faBasketShopping} />
            </TouchableOpacity>
          </View>
        ) : (
          <EmptyCart />
        )}
      </ScrollView>
      <Navbar />
      <Footer />
    </View>
  );
};

export default Cart;
