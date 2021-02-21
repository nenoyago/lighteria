import React, { useContext, useMemo } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import CheckoutItem from './CheckoutItem';

import { DataContext } from '../provider/ProductProvider';

import { Colors, CustomToast, FontSizes, SuccesToast } from '../styles/global';
import { formatCurrency } from '../utils/util';
import Toast from 'react-native-tiny-toast';

const Checkout = () => {
  const navigation = useNavigation();
  const { itemsCheckout, clearItems } = useContext(DataContext);

  const totalValue = useMemo(() => {
    return itemsCheckout.reduce((acc, curr) => acc + (curr.qty * curr.price), 0);
  }, [itemsCheckout]);

  const Title: React.FC = ({ children }) => <Text style={styles.titleCheckout}>{children}</Text>
  const TotalValue: React.FC = ({ children }) => <Text style={styles.totalCheckout}>{children}</Text>

  function handleNavigateToHome() {
    navigation.navigate('ProductList');
  }

  function handleClearBag() {
    clearItems();
    Toast.show('Sua lista de items na sacola foi limpa.', CustomToast);
  }

  function handleFinalizePurchase() {
    Toast.show('Parabens! Sua compra foi efetuada com sucesso.', { ...SuccesToast, position: Toast.position.BOTTOM });
  }

  return (
    <ScrollView style={styles.container}>
      <Title>Checkout</Title>
      {
        itemsCheckout.map(item => (
          <CheckoutItem key={item.id} {...item} />
        ))
      }

      {
        itemsCheckout.length > 0
          ?
          <View style={styles.priceAndClearBagContainer}>
            <TotalValue>{formatCurrency(totalValue)}</TotalValue>
            <RectButton style={styles.clearBagButton} onPress={handleClearBag}>
              <Text style={styles.clearBagText}>Esvaziar sacola</Text>
              <Feather name="trash" size={25} color={Colors.GRAY_250} />
            </RectButton>
          </View>
          :
          <Text style={styles.totalItems}>Nenhum item adicionado a sacola.</Text>
      }

      <RectButton 
      style={itemsCheckout.length === 0 ? styles.disablePurchaseButton : styles.purchaseButton} 
      enabled={itemsCheckout.length > 0}
      onPress={handleFinalizePurchase}>
        <Text style={styles.purchaseText}>Finalizar compra</Text>
      </RectButton>

      <RectButton style={styles.keepBuyingButton} onPress={handleNavigateToHome}>
        <Text style={styles.keepBuyingText}>Continuar comprando</Text>
      </RectButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  titleCheckout: {
    fontWeight: '700',
    fontSize: FontSizes.FONT_SIZE_XX_LARGE,
    marginVertical: 24
  },

  totalCheckout: {
    fontWeight: '700',
    fontSize: FontSizes.FONT_SIZE_X_LARGE,
    color: Colors.LIGHT_GREEN,
    marginVertical: 36
  },

  totalItems: {
    fontWeight: '500',
    fontSize: FontSizes.FONT_SIZE_MEDIUM,
    color: Colors.DARK,
    marginVertical: 36
  },

  priceAndClearBagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  clearBagButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 6
  },

  clearBagText: {
    fontSize: FontSizes.FONT_SIZE_MEDIUM,
    color: Colors.GRAY_250,
    marginRight: 8
  },

  purchaseButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_BLUE,
    padding: 20,
    borderRadius: 6
  },

  disablePurchaseButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_BLUE,
    opacity: 0.4,
    padding: 20,
    borderRadius: 6
  },

  purchaseText: {
    fontSize: FontSizes.FONT_SIZE_MEDIUM,
    color: Colors.WHITE
  },

  keepBuyingButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 6,
    marginVertical: 16

  },

  keepBuyingText: {
    color: Colors.LIGHT_BLUE,
    fontSize: FontSizes.FONT_SIZE_MEDIUM,
  },
});

export default Checkout;