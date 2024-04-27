import { Text, View } from "react-native";

export default function ErrorMessage({ message }) {
  return (
    <View className='w-2/3 p-2'>
      <Text className='text-left text-red-700'>{message}</Text>
    </View>
  );
}
