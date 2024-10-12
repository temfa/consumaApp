/* eslint-disable curly */
import {useEffect, useState} from 'react';
import {CartType} from '../utils/data';
import {getItem} from '../utils/asyncStorage';

const useGetCart = () => {
  const [cart, setCart] = useState<CartType[]>([]);
  const getCart = async () => {
    const data = await getItem('cart');
    if (data) setCart(data as CartType[]);
  };

  useEffect(() => {
    getCart();
  }, []);
  return cart;
};

export default useGetCart;
