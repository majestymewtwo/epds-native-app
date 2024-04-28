import { faPlus, faRemove, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";
import { faSubtract } from "@fortawesome/free-solid-svg-icons/faSubtract";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CartCard = ({
  title,
  id,
  productId,
  quantity,
  price,
  image,
  scale,
  updateCart,
  removeCart,
}) => {
  const [cartQty, setCartQty] = useState(quantity);

  const handleUpdateCart = () => {
    const data = {
      id: id,
      product: {
        id: productId,
      },
      quantity: cartQty,
    };
    updateCart(data);
  };

  const handleRemoveCart = () => {
    removeCart(id);
  };

  const increaseQty = () => {
    setCartQty((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setCartQty((prev) => (prev - 1 > 0 ? prev - 1 : 1));
  };

  useEffect(() => {
    handleUpdateCart();
  }, [cartQty]);

  return (
    <View className='bg-white m-1 rounded-lg w-3/4 border border-gray-200 shadow-lg'>
      <View className='w-full h-20 rounded-t-lg'>
        <Image
          source={{ uri: image }}
          resizeMode='cover'
          className='w-full h-full'
        />
      </View>
      <View className='p-2'>
        <Text className='font-bold mt-2'>
          {title[0].toUpperCase() + title.slice(1)}
        </Text>
        <View className='flex-row justify-between'>
          <Text className='text-gray-500'>
            ₹{price.toLocaleString()}
            {" / "}
            {scale}
          </Text>
          <Text className='text-gray-500'>
            ₹{(price * cartQty).toLocaleString()}
          </Text>
        </View>
        <View className='flex-row items-center justify-between py-2'>
          <View className='flex-row space-x-4 items-center border border-yellow-600 rounded'>
            <TouchableOpacity
              onPress={increaseQty}
              className='border-yellow-600 border-r text-white p-1 justify-center flex flex-row items-center'>
              <FontAwesomeIcon color='#d97706' icon={faPlus} />
            </TouchableOpacity>
            <Text>{cartQty}</Text>
            <TouchableOpacity
              onPress={decreaseQty}
              className='border-yellow-600 border-l text-white p-1 justify-center flex flex-row items-center'>
              <FontAwesomeIcon color='#d97706' icon={faSubtract} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleRemoveCart}
            className='flex-row items-center space-x-1 border rounded border-yellow-600 py-1 px-2'>
            <Text className='text-yellow-600 text-sm'>Remove</Text>
            <FontAwesomeIcon color='#d97706' icon={faTrash} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
