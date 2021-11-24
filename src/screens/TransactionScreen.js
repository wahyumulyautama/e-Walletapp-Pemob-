import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CardTransaction from '../components/CardTransaction';

const TransactionScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{marginHorizontal: 15, marginVertical: 5}}>
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
      </ScrollView>
    </View>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
