
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';
import React from 'react';
import { StyleSheet,ScrollView, FlatList} from 'react-native';


export default function MainMenuScreen() {
  return (
    <FlatList
    //data gets the enitre data
    data={products}
    //render item gets one item on wihch we wanna apply
    //works just like map 
    renderItem={({item})=><ProductListItem product={item}/>}
    numColumns={2}
    contentContainerStyle={{ gap: 10, padding: 10 }}
    columnWrapperStyle={{ gap: 10 }}
    />
  );
}