/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants/colors';
import Cart from '../../components/Cart';
import PaymentMethod from '../../components/PaymentMethod';
import PrimaryButton from '../../components/PrimaryButton';
import AddBank from '../../components/AddBank';
import Bank from '../../components/Bank';

const PaymentScreen = ({navigation}: {navigation: any}) => {
  const [choice, setChoice] = useState('');
  const [modal, setModal] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView>
        <Cart page="Payment" />
        <PaymentMethod
          setActive={e => {
            setChoice(e);
            setModal(e);
          }}
        />
        <View style={{marginHorizontal: 16}}>
          <PrimaryButton
            title="Proceed to confirm order"
            action={() => navigation.navigate('Confirm')}
            active={choice === '' ? false : true}
          />
        </View>
      </ScrollView>
      <AddBank
        visible={modal === 'new' ? true : false}
        action={() => setModal('')}
      />
      <Bank
        visible={modal === 'send' ? true : false}
        action={() => setModal('')}
      />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 16,
    paddingBottom: 32,
  },
});
