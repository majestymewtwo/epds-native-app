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
        <UserStats />
        <View className='p-4'>
          <Text className='font-semibold text-base'>
            Mission of the Public Distribution System
          </Text>
          <Text className='font-light text-base'>
            The goal of the Public Distribution System in Tamil Nadu is to
            ensure food security to all citizens, particularly poor people, by
            making available essential commodities of good quality at affordable
            prices every month, through fair price shops which are easily
            accessible.
          </Text>
        </View>
        <Hero />
      </ScrollView>
      <Navbar />
      <Footer />
    </View>
  );
}
