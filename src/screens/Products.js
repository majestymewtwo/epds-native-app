import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/ProductSidebar";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Toast from "react-native-toast-message";

const ProductsPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const isFocused = useIsFocused();
  const { API_URL } = process.env;

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const fetchProducts = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;
    axios
      .get(`${API_URL}/product/all`, {
        headers: {
          Authorization: "Bearer " + token,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToCart = async (id) => {
    const token = await AsyncStorage.getItem("token");
    if (!id || !token) return;
    axios
      .post(
        `${API_URL}/product/addToCart/${id}`,
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
          swipeable: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [isFocused]);

  return (
    <View className='flex-1 bg-white min-h-screen'>
      <Header toggleSidebar={toggleSidebar} />
      <View className='flex-1 flex-row'>
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <ScrollView className='p-2 w-3/4'>
          <Text className='text-xl font-semibold px-4 text-center'>
            Products Page
          </Text>
          <Text className='px-4 pb-4 font-light text-center'>
            Order from a wide variety of products
          </Text>
          <View className='flex-row flex-wrap justify-between items-center'>
            {/* Products List */}
            {products.map((product, index) => (
              <ProductCard
                key={index}
                id={product.id}
                title={product.name}
                image={product.image}
                price={product.price}
                scale={product.scale}
                addToCart={addToCart}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <Navbar />
      <Footer />
      <Toast />
    </View>
  );
};

export default ProductsPage;
