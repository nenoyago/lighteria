import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductList from './views/ProductList';
import ProductDetails from './views/ProductDetails';
import Checkout from './views/Checkout';
import ProductProvider from './provider/ProductProvider';

import { Platform, SafeAreaView, StyleSheet } from 'react-native';

import { Colors } from '../src/styles/global';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <ProductProvider>
        <SafeAreaView style={styles.container}>
          <Navigator
            initialRouteName="ProductList"
            screenOptions={{ headerShown: false }}
          >
            <Screen
              name="ProductList"
              component={ProductList}
            />
            <Screen
              name="ProductDetails"
              component={ProductDetails}
            />
            <Screen
              name="Checkout"
              component={Checkout}
            />
          </Navigator>
        </SafeAreaView>
      </ProductProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    paddingTop: Platform.OS === 'android' ? 50 : 25,
  }
});

export default Routes;