import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import ErrorMessage from "../components/Error";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useIsFocused } from "@react-navigation/native";

export default function ValidateOTP({ navigation }) {
  const { API_URL } = process.env;
  const [otp, setOTP] = useState("");
  const [error, setError] = useState({
    visible: false,
    message: "",
  });
  const isFocused = useIsFocused();

  const validateOTP = async () => {
    if (otp.length !== 4) {
      setError({
        visible: true,
        message: "Please enter a valid OTP",
      });
      return;
    }
    const phone = await AsyncStorage.getItem("user-phone");
    axios
      .post(`${API_URL}/auth/validateOTP/${phone}&&${otp}`)
      .then((res) => {
        AsyncStorage.removeItem("user-phone").then(() => {
          if (res.status === 200) {
            const { token } = res.data;
            AsyncStorage.setItem("token", token).then(() => {
              navigation.navigate("Home");
            });
          }
        });
      })
      .catch((err) => {
        setError({
          visible: true,
          message: "Invalid OTP",
        });
        console.log(err);
      });
  };

  useEffect(() => {
    if (error.visible) {
      setTimeout(() => {
        setError({
          visible: false,
          message: "",
        });
      }, 3000);
    }
  }, [error.visible]);

  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      if (token) navigation.navigate("Home");
    });
  }, [isFocused]);

  return (
    <View className='flex-1 relative items-center justify-between bg-slate-400'>
      <Header />
      <View className='flex flex-col space-y-4 items-center justify-center bg-white w-[80%] h-[50vh] border border-gray-300 rounded-md'>
        <Text className='text-lg'>Validate your OTP</Text>
        <Image
          source={require("../../assets/tngovt.png")}
          alt='Govt Logo'
          resizeMode='contain'
          className='h-32 w-32'
        />
        <TextInput
          className='px-2 py-1 border border-slate-300 rounded-md w-2/3 text-center text-lg'
          value={otp}
          placeholder='Enter your OTP'
          keyboardType='number-pad'
          onChangeText={setOTP}
        />
        {error.visible && <ErrorMessage message={error.message} />}
        <TouchableOpacity
          onPress={validateOTP}
          className='bg-slate-700 p-2 rounded-md w-1/3'>
          <Text className='text-white text-center'>Verify OTP</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}
