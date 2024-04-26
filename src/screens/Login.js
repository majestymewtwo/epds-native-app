import axios from "axios";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login({ navigation }) {
  const [phone, setPhone] = useState("");

  const sendOTP = () => {
    axios
      .get(`http://192.168.1.7:8080/api/auth`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
      <TouchableOpacity
        onPress={sendOTP}
        className='bg-slate-700 p-2 rounded-md w-1/3'>
        <Text className='text-white text-center'>Get OTP</Text>
      </TouchableOpacity>
    </View>
  );
}
