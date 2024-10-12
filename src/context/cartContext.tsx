import {createContext, useEffect, useState} from 'react';
import {CartType} from '../utils/data';
import useGetCart from '../hooks/useGetCart';
import {setItem} from '../utils/asyncStorage';
import Toast from 'react-native-toast-message';

type Props = {
  cartItems: CartType[];
  addToCartItem: (item: CartType) => Promise<void>;
  deleteCartItem: (title: string) => Promise<void>;
  totalPrice: number;
  emptyCart: () => void;
  subTractItem: (title: string) => void;
};

const defaultAddItemToCart: Props['addToCartItem'] = async () => {
  console.log('Default function: No action taken.');
};
const defaultDeleteItemToCart: Props['deleteCartItem'] = async () => {
  console.log('Default function: No action taken.');
};

export const CartContext = createContext<Props>({
  cartItems: [],
  addToCartItem: defaultAddItemToCart,
  deleteCartItem: defaultDeleteItemToCart,
  totalPrice: 0,
  emptyCart() {
    console.log('Default function: No action taken.');
  },
  subTractItem() {
    console.log('Default function: No action taken.');
  },
});

export const CartProvider = ({children}: {children: React.JSX.Element}) => {
  const [cartItems, setCartItems] = useState<CartType[]>(useGetCart());
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadCartItems = async () => {
    // setCartItems(cartItem as CartType[]);
    calculateTotalPrice(cartItems);
  };

  const addToCartItem = async (item: CartType) => {
    let isExist = cartItems.findIndex(cart => cart.title === item.title);
    if (isExist === -1) {
      cartItems.push(item);
      calculateTotalPrice(cartItems);
      setCartItems(cartItems);
      await setItem('cart', cartItems);
      Toast.show({
        type: 'success',
        text1: 'Added to Cart Successfully',
      });
    } else {
      cartItems?.map((items, index) => {
        if (items.title === item.title) {
          cartItems[index].number = cartItems[index].number + 1;
          calculateTotalPrice(cartItems);
        } else {
          return item;
        }
      });
      await setItem('cart', cartItems);
      Toast.show({
        type: 'success',
        text1: 'Added to Cart Successfully',
      });
    }
  };

  const subTractItem = async (title: string) => {
    cartItems?.map((items, index) => {
      if (items.title === title) {
        if (cartItems[index].number !== 1) {
          cartItems[index].number = cartItems[index].number - 1;
          calculateTotalPrice(cartItems);
        }
      }
    });
    await setItem('cart', cartItems);
  };

  const deleteCartItem = async (title: string) => {
    let cartItem = cartItems.filter(item => item.title !== title);
    setCartItems(cartItem);
    calculateTotalPrice(cartItem);
    await setItem('cart', cartItem);
    Toast.show({
      type: 'success',
      text1: 'Removed from Cart Successfully',
    });
  };

  const emptyCart = async () => {
    setCartItems([]);
    await setItem('cart', []);
    Toast.show({
      type: 'success',
      text1: 'Emptied Cart Successfully',
    });
  };

  const calculateTotalPrice = (cart: CartType[]) => {
    let totalSum = cart.reduce(
      (total, item) => total + item.price * item.number,
      0,
    );
    totalSum = Number(totalSum.toFixed(2));
    setTotalPrice(totalSum);
  };
  const value = {
    cartItems,
    addToCartItem,
    deleteCartItem,
    totalPrice,
    emptyCart,
    subTractItem,
  };
  // eslint-disable-next-line react/react-in-jsx-scope
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
