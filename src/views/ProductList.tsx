import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Header from '../components/Header';
import Product from '../components/Product';

import { data } from '../utils/data';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => <Product {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Header />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 16
  }
});

export default ProductList;