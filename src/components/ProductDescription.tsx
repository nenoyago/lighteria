import React, { useContext } from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Toast from 'react-native-tiny-toast'

import { ProductProps } from '../interfaces/ProductInterface';
import { DataContext } from '../provider/ProductProvider';

import { Colors, FontSizes, SuccesToast } from '../styles/global';

import { formatCurrency } from '../utils/util';

const ProductDescription = (product: ProductProps) => {
  const { addOrRemoveItem } = useContext(DataContext);

  function handleAddItemOnBag(product: ProductProps) {
    addOrRemoveItem(product, 'add');

    Toast.show(
      `${product.title} foi adicionado(a) à sacola.`,
      {
        ...SuccesToast,
        position: (Dimensions.get('window').height / 2.4)
      }
    );
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosition}>
        <View style={styles.item}>
          <View style={styles.itemHeader}>
            <View>
              <Text style={styles.mainText}>{product.studio}</Text>
              <Text style={styles.subTitleText}>{product.itemName}</Text>
              <Text style={styles.titleText}>{product.title}</Text>
            </View>
            <Image source={product.image} style={styles.itemImage} resizeMode="contain" />
          </View>
          <Text style={styles.itemDescription}>{product.itemDesc}</Text>
          <View style={styles.itemFooter}>
            <Text style={styles.itemPrice}>
              {formatCurrency(product.price)}
            </Text>
            <RectButton style={styles.itemBuyButton} onPress={() => handleAddItemOnBag(product)}>
              <Text style={styles.itemBuyText}>Comprar</Text>
            </RectButton>
          </View>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4
  },

  itemPosition: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60
  },

  item: {
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    padding: 28,
    width: '80%',
    elevation: 4
  },

  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  mainText: {
    marginBottom: 4,
    fontSize: FontSizes.FONT_SIZE_MEDIUM
  },

  subTitleText: {
    marginBottom: 4,
    fontSize: FontSizes.FONT_SIZE_X_LARGE
  },

  titleText: {
    color: Colors.GRAY_100,
    marginBottom: 12,
    fontSize: FontSizes.FONT_SIZE_SMALL
  },

  itemImage: {
    maxWidth: 48,
    maxHeight: 84
  },

  itemDescription: {
    color: Colors.GRAY_200,
    marginTop: 12,
    marginBottom: 18,
    fontSize: FontSizes.FONT_SIZE_SMALL,
  },

  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemPrice: {
    fontWeight: '700',
    fontSize: FontSizes.FONT_SIZE_LARGE,
    color: Colors.LIGHT_GREEN
  },

  itemBuyButton: {
    textAlign: 'center',
    backgroundColor: Colors.LIGHT_BLUE,
    padding: 20,
    borderRadius: 6
  },

  itemBuyText: {
    fontSize: FontSizes.FONT_SIZE_MEDIUM,
    color: Colors.WHITE
  }
});

export default ProductDescription;