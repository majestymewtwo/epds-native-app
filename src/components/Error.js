import { Text, View } from "react-native";

export default function ErrorMessage({ message }) {
  return (
    <View className='p-2'>
      <Text className='text-center text-red-700'>{message}</Text>
    </View>
  );
}
