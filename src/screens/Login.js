import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import ErrorMessage from "../components/Error";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const { API_URL } = process.env;
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({
    visible: false,
    message: "",
  });

  const sendOTP = async () => {
    if (phone.length !== 10) {
      setError({
        visible: true,
        message: "Please enter a valid phone number",
      });
      return;
    }
    await AsyncStorage.setItem("user-phone", phone);
    axios
      .post(`${API_URL}/auth/getOTP/${phone}`)
      .then((res) => {
        if (res.status === 200) navigation.navigate("Validate");
      })
      .catch((err) => {
        setError({
          visible: true,
          message: "An error has occured, please try again later",
        });
        console.error(err);
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

  return (
    <View className='flex flex-col space-y-4 items-center justify-center bg-white min-h-screen'>
      <Image
        source={require("../../assets/tngovt.png")}
        alt='Govt Logo'
        resizeMode='contain'
        className='h-32 w-32'
      />
      <TextInput
        className='px-2 py-1 border border-slate-300 rounded-md w-2/3'
        value={phone}
        placeholder='Enter your phone'
        keyboardType='number-pad'
        onChangeText={setPhone}
      />
      {error.visible && <ErrorMessage message={error.message} />}
      <TouchableOpacity
        onPress={sendOTP}
        className='bg-slate-700 p-2 rounded-md w-1/3'>
        <Text className='text-white text-center'>Get OTP</Text>
      </TouchableOpacity>
    </View>
  );
}
