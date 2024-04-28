import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/ProductSidebar"; 

const ProductsPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <View className="flex-1 bg-white min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <View className="flex-row">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <ScrollView className="p-2 w-3/4">
        <Text className="text-xl p-4 text-center">Products Page</Text>
        <View className="flex-row flex-wrap justify-around items-center">
          {/* Example products, you'll replace this with data fetched from your backend */}
          <ProductCard title="Product 1" price="$20" color="bg-green-200" />
          <ProductCard title="Product 2" price="$25" color="bg-blue-200" />
          <ProductCard title="Product 3" price="$30" color="bg-yellow-200" />
          <ProductCard title="Product 4" price="$35" color="bg-green-200" />
        </View>
      </ScrollView>
      </View>
      <Navbar />
      <Footer />
    </View>
  );
};

export default ProductsPage;
