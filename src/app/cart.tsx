
import {FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCart } from '../providers/CartProvider';
import CartListItem from '../components/CartListItem';
import Button from '../components/Button';

export default function CartScreen () {
 const {items , total} = useCart();

  return (
    <View> 
      <FlatList data={items}
       renderItem={({item})=> <CartListItem cartItem={item} key={item.id}  />}
       contentContainerStyle={{ gap: 10 }}
       />
       
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '500' }}>
        ${total}
      </Text>
      <Button 
      //onPress={checkout}
       text="Checkout" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  box: {
    borderWidth: 2,      // 2px border width
    borderColor: 'red',  // Red color
    borderStyle: 'solid', // Solid border style (default, but explicitly set)
    padding: 10,
  },
});
