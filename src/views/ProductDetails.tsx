import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { useNavigation, useRoute } from '@react-navigation/native';

import imgBackground from '../assets/images/bgimg.jpg';
import { BorderlessButton } from 'react-native-gesture-handler';
import Bag from '../components/Bag';

import { ProductProps } from '../interfaces/ProductInterface';
import ProductDescription from '../components/ProductDescription';

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params as ProductProps;

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.bgContainer}>
        <ImageBackground
          resizeMode="cover"
          source={imgBackground}
          style={styles.imageBackground}
        >
          <View style={styles.headerBackground}>
            <BorderlessButton onPress={handleNavigateBack}>
              <Feather name="arrow-left" size={32} color="#FFA500" />
            </BorderlessButton>
            <Bag />
          </View>
        </ImageBackground>
      </View>
      <ProductDescription {...params}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  bgContainer: {
    flex: 6
  },

  imageBackground: {
    width: Dimensions.get('window').width,
    height: '100%'
  },

  headerBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingHorizontal: 16
  }
});

export default ProductDetails;