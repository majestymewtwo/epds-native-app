import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import ErrorMessage from "../components/Error";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ValidateOTP({ navigation }) {
  const { API_URL } = process.env;
  const [otp, setOTP] = useState("");
  const [error, setError] = useState({
    visible: false,
    message: "",
  });

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
          if (res.status === 200) navigation.navigate("Home");
        });
      })
      .catch((err) => {
        if (err.status === 401) {
          setError({
            visible: true,
            message: "Invalid OTP",
          });
        } else {
          console.error(err);
        }
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
  );
}
