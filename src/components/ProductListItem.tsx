import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import products from '@/assets/data/products';
import Colors from '@/src/constants/Colors';
import { Product } from '@/src/types';
import { Link } from 'expo-router';

//linking bwteen screens

type ProductListItemProps = {
    product: Product
}

const defaultImageUrl = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        // aschild likha take main container ke styles khrab na hon
        // <Link href={"/product"} asChild > //this when we dont have dynamuc route
        <Link href={`/menu/${product.id}`} asChild >
            <Pressable style={styles.container}>
                <Image
                    source={{ uri: product.image || defaultImageUrl }}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.title}> {product.name} </Text>
                <Text style={styles.price}> {product.price} </Text>

                {/* one way of linking 
            <Link href={"/product"}>Show Details</Link>
            */}
            </Pressable>
        </Link>
    )
}

export default ProductListItem


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        maxWidth: '50%'
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    title: {
        fontWeight: '600',
        fontSize: 18,
        marginVertical: 10,
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold'
    },
});