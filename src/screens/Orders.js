import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OrderCard from "../components/OrderCard";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faDolly,
  faSquareCheck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import Emptyhistory from "../components/EmptyHistory";

const Orders = () => {
  const [products, setProducts] = useState([]);
  const isFocused = useIsFocused();
  const { API_URL } = process.env;

  const getAllOrders = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;
    axios
      .get(`${API_URL}/product/orderHistory`, {
        headers: {
          Authorization: "Bearer " + token,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setProducts(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllOrders();
  }, [isFocused]);

  return (
    <View className='flex-1 items-center justify-between bg-white min-h-screen'>
      <Header />
      <ScrollView className='py-2 px-6 w-full'>
        <Text className='text-xl font-semibold px-4 text-center'>
          Order History
        </Text>
        <Text className='px-4 pb-4 font-light text-center'>
          View your history of orders
        </Text>
        {products.length === 0 && <Emptyhistory />}
        <View className='flex space-y-2 items-center pb-6'>
          {/* Products List */}
          {products.map((order, index) => (
            <View
              key={index}
              className='border border-gray-300 p-2 rounded-md w-full'>
              <View className='flex-row justify-between items-center'>
                <Text className='font-bold'>Phone no :</Text>
                <Text>{order.clientPhone}</Text>
              </View>
              <View className='flex-row justify-between items-center'>
                <Text className='font-bold'>Order Date :</Text>
                <Text>{new Date(order.createdAt).toDateString()}</Text>
              </View>
              <View className='flex-row flex-wrap justify-between items-center py-4'>
                {order.orderItems.map((product, index) => (
                  <OrderCard
                    key={index}
                    id={product.id}
                    image={product.image}
                    quantity={product.quantity}
                    scale={product.scale}
                    title={product.name}
                  />
                ))}
              </View>
              <Status
                isDelivered={order.isDelivered}
                isDispatched={order.isDispatched}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <Navbar />
      <Footer />
    </View>
  );
};

const Status = ({ isDelivered, isDispatched }) => {
  if (isDelivered)
    return (
      <View className='flex-row space-x-3 justify-end items-center'>
        <FontAwesomeIcon color='#4d7c0f' size={21} icon={faSquareCheck} />
        <Text className='text-green-700 font-bold text-base'>
          Delivered Successfully
        </Text>
      </View>
    );
  if (isDispatched)
    return (
      <View className='flex-row space-x-3 justify-end items-center'>
        <FontAwesomeIcon color='#a16207' size={21} icon={faTruckFast} />
        <Text className='text-yellow-700 font-bold text-base'>
          Out for Delivery
        </Text>
      </View>
    );
  return (
    <View className='flex-row space-x-3 justify-end items-center'>
      <FontAwesomeIcon color='#a16207' size={21} icon={faDolly} />
      <Text className='text-yellow-700 font-bold text-base'>
        Order is being Shipped
      </Text>
    </View>
  );
};

export default Orders;
