import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import { Colors } from '../styles/global';

import { DataContext } from '../provider/ProductProvider';

import bagIcon from '../assets/images/icone-sacola.png';

const Bag = () => {
  const navigation = useNavigation();
  const { itemsCheckout } = useContext(DataContext);

  return (
    <RectButton style={styles.containerBag} onPress={() => navigation.navigate('Checkout')}>
      <Image source={bagIcon} style={styles.imageBag} />
      {
        itemsCheckout.length > 0 && <View style={styles.containerQuantity}>
          <Text style={styles.textQuantity}>
            {itemsCheckout.reduce((acc, curr) => acc + curr.qty, 0)}
          </Text>
        </View>
      }
    </RectButton>
  );
};

const styles = StyleSheet.create({
  containerBag: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    width: 72,
    height: 72,
    borderRadius: 25,
  },

  imageBag: {
    width: 32,
    height: 32
  },

  containerQuantity: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DANGER,
    borderRadius: 50,
    padding: 4,
    minWidth: 24,
    minHeight: 24,
    marginTop: -12,
    marginLeft: 12
  },

  textQuantity: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.WHITE
  }
});

export default Bag;