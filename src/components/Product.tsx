import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { ProductProps } from '../interfaces/ProductInterface';

import { Colors } from '../styles/global';


const Product = (product: ProductProps) => {
  const navigation = useNavigation();

  function handleNavigateToProductDetails(product: ProductProps) {
    navigation.navigate('ProductDetails', product);
  }

  return (
    <RectButton style={styles.containerItem} onPress={() => handleNavigateToProductDetails(product)}>
        <Image source={product.image} style={styles.imageItem} resizeMode="contain" />
        <Text style={styles.textItem}>{product.title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },

  imageItem: {
    height: 84
  },

  textItem: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.GRAY_250
  }
});

export default Product;