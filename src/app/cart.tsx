
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCart } from '../providers/CartProvider';

export default function CartScreen () {
 const {items} = useCart();

  return (
    <View style={styles.container}> 
      <Text>Cart</Text>
      <View style={styles.box}>
        <Text>Cart items length {items.length}</Text>
       
      </View>
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
