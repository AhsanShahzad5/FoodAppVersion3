import { createContext , PropsWithChildren, useContext, useState } from "react";
import { CartItem, PizzaSize, Product } from "../types";

type CartType = {
    items : CartItem[],
    addItem : (product :Product  , size : CartItem['size'] ) =>void
    updateQuantity : ()=>void;
}

export const CartContext = createContext<CartType>({
    items:[],
    addItem:()=>{},
    updateQuantity:()=>{}
});

const CartProvider = ({ children }:PropsWithChildren) => {
    const [items,setItems] = useState<CartItem[]>([]);
   
    const addItem = (product :Product  , size : CartItem['size'])=>{
        const newCartItem:CartItem = {
            // id:product.id.toString(),
            id:'1',
            product,
            product_id: product.id,
            size,
            quantity:1
        }
        setItems([newCartItem,...items]) 
    };

    const updateQuantity = ()=>{
        console.log('hi');
        
    }

    return (
        <CartContext.Provider value={{ items, addItem , updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = ()=>useContext(CartContext);