import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Bag from './Bag';

import { Colors } from '../styles/global';

const Header = () => {
  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Lighteria</Text>
        <Bag/>
      </View>
      <View style={styles.containerDescription}>
        <View style={styles.separator} />
        <View style={styles.containerText}>
          <Text style={styles.textDescription}>Categorias</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 6,
  },

  title: {
    fontSize: 28,
    fontWeight: '700'
  },

  containerDescription: {
    paddingHorizontal: 6
  },

  separator: {
    borderWidth: 0.5,
    borderColor: Colors.GRAY_150,
  },

  containerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46
  },

  textDescription: {
    padding: 34,
    backgroundColor: Colors.BACKGROUND,
    fontSize: 16,
    color: Colors.GRAY_150
  }
});

export default Header;
