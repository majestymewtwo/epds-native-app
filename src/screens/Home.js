import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserStats from "../components/UserStats";
import Navbar from "../components/Navbar";

export default function Home({ navigation }) {
  return (
    <View className='flex-1 items-center justify-between bg-white min-h-screen'>
      <Header />
      <ScrollView className='p-2'>
        <Hero />
        <UserStats />
      </ScrollView>
      <Navbar />
      <Footer />
    </View>
  );
}
