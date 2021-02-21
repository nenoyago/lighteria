import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import { ProductProps } from '../interfaces/ProductInterface';
import { Colors, FontSizes } from '../styles/global';

import { formatCurrency } from '../utils/util';

import { DataContext } from '../provider/ProductProvider';

const CheckoutItem = (product: ProductProps) => {
  const { addOrRemoveItem } = useContext(DataContext);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.descTitle}>{product.itemName}</Text>
        <Text style={styles.descSubTitle}>{product.title}</Text>

      </View>
      <View style={styles.rightContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            {formatCurrency(product.price * product.qty)}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <BorderlessButton onPress={() => addOrRemoveItem(product, 'add')}>
            <Feather name="plus" size={25} color={Colors.LIGHT_BLUE} />
          </BorderlessButton>
          <Text style={styles.quantityText}>{product.qty}</Text>
          <BorderlessButton onPress={() => { addOrRemoveItem(product, 'remove') }}>
            <Feather name="minus" size={25} color={Colors.DANGER} />
          </BorderlessButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },

  imageContainer: {
    flex: 20,
    backgroundColor: '#F7F8FC',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 48,
    height: 84
  },

  descContainer: {
    flex: 25,
    padding: 18,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  descTitle: {
    fontWeight: '500',
    fontSize: FontSizes.FONT_SIZE_LARGE,
  },

  descSubTitle: {
    marginTop: 4,
    fontSize: FontSizes.FONT_SIZE_MEDIUM
  },

  rightContainer: {
    flex: 35,
    padding: 18,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  priceContainer: {
    flex: 2,
  },

  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  quantityText: {
    paddingHorizontal: 8,
    fontSize: FontSizes.FONT_SIZE_MEDIUM,
    color: Colors.DARK
  },

  priceText: {
    fontSize: FontSizes.FONT_SIZE_MEDIUM
  },

  buttonsGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default CheckoutItem;