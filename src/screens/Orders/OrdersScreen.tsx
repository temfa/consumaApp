/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import InfoText from '../../components/InfoText';
import SingleCart from '../../components/SingleCart';
import Modals from '../../components/Modals';
import OrderHeader from '../../components/OrderHeader';
import PrimaryButton from '../../components/PrimaryButton';
import {formatter} from '../../utils/formatter';
import {CartContext} from '../../context/cartContext';

const OrdersScreen = ({navigation}: {navigation: any}) => {
  const [visible, setVisible] = useState(false);
  const {cartItems, totalPrice, emptyCart, addToCartItem, subTractItem} =
    useContext(CartContext);
  return (
    <View style={styles.container}>
      <OrderHeader active="Cart" />
      <View style={styles.totalItems}>
        <Text style={styles.totalItemsText}>
          Total Items{' '}
          <Text style={{fontFamily: fonts.Bold}}>({cartItems.length})</Text>
        </Text>
        <TouchableOpacity style={styles.emptyCart} onPress={emptyCart}>
          <Text style={styles.emptyCartText}>Empty Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.summary}>
        <Text style={styles.cartSummary}>Cart Summary</Text>
        <View style={styles.subTotal}>
          <Text style={styles.cartSummary}>Sub-Total</Text>
          <Text style={styles.total}>
            {cartItems.length === 0
              ? formatter.format(0)
              : formatter.format(totalPrice)}
          </Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 16}}>
        <InfoText text="This does not include delivery fee. Delivery fee will be determined once location is confirmed" />
      </View>
      <ScrollView style={styles.cartContainer}>
        {cartItems?.map((item, index) => {
          return (
            <SingleCart
              key={index}
              add={() => {
                const data = {
                  id: item.id,
                  image: item.image,
                  title: item.title,
                  size: item.size,
                  price: item.price,
                  number: item.number,
                };
                addToCartItem(data);
              }}
              minus={() => subTractItem(item.title)}
              name={item.title}
              number={item.number}
              img={item.image}
              price={item.price}
              size={item.size}
            />
          );
        })}
      </ScrollView>
      <View style={{marginHorizontal: 16, marginBottom: 10}}>
        <PrimaryButton
          action={() => setVisible(true)}
          title="Proceed to checkout"
          active={cartItems.length === 0 ? false : true}
        />
      </View>
      <Modals
        visible={visible}
        points={['25%', '50%']}
        setFalse={() => setVisible(false)}>
        <View style={styles.contentContainer}>
          <Image source={require('../../assets/location.png')} />
          <TouchableOpacity
            style={styles.shareContainer}
            onPress={() => {
              setVisible(false);
              navigation.navigate('Checkout');
            }}>
            <Text style={styles.shareText}>Share Location</Text>
          </TouchableOpacity>
          <Text style={styles.style}>
            Kindly share your location so we get ur exact address. We are happy
            to have you here.
          </Text>
        </View>
      </Modals>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 16,
  },
  totalItems: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginTop: 24,
    alignItems: 'center',
  },
  totalItemsText: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    lineHeight: 16.8,
    color: '#000000',
  },
  emptyCart: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#FEF2F2',
  },
  emptyCartText: {
    color: '#F64C4C',
    lineHeight: 14.4,
    fontFamily: fonts.SemiBold,
    fontSize: 12,
  },
  summary: {
    padding: 16,
    gap: 16,
    backgroundColor: '#FBFEFC',
    borderRadius: 8,
    elevation: 0.5,
    margin: 16,
  },
  cartSummary: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    lineHeight: 14.4,
    color: '#555555',
  },
  subTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    color: '#252525',
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    lineHeight: 16.8,
  },
  cartContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
    height: 250,
    paddingBottom: 16,
  },
  contentContainer: {alignItems: 'center', gap: 16},
  shareContainer: {
    width: 185,
    paddingVertical: 14,
    backgroundColor: colors.primaryGreen,
    borderRadius: 6,
    alignItems: 'center',
  },
  shareText: {
    color: '#F2F2F2',
    fontFamily: fonts.SemiBold,
    lineHeight: 19.2,
    fontSize: 16,
  },
  style: {
    width: 262,
    fontSize: 12,
    lineHeight: 14.4,
    fontFamily: fonts.Medium,
    color: '#555555',
    textAlign: 'center',
  },
});
