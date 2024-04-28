import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <View className='flex-1 items-center justify-between bg-white min-h-screen'>
      <Header />
      <ScrollView className='p-2'>
        {/* Add components here */}
        <Text className='text-xl'>Cart Page</Text>
      </ScrollView>
      <Navbar />
      <Footer />
    </View>
  );
};

export default Cart;
