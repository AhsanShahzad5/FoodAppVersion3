import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, PizzaSize, Product } from "../types";
import { randomUUID } from "expo-crypto";

type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem['size']) => void
    updateQuantity: (itemId: string, amount: -1 | 1) => void;
    total: number;
    // checkout: () => void;
}

export const CartContext = createContext<CartType>({
    items: [],
    addItem: () => { },
    updateQuantity: () => { },
    total: 0,
    // checkout: () => { },
});

const CartProvider = ({ children }: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const total = items.reduce(
        (sum, item) => (sum += item.product.price * item.quantity),
        0
      );
    
    const addItem = (product: Product, size: CartItem['size']) => {

        // if already in cart, increment quantity
        const existingItem = items.find(
            (item) => item.product === product && item.size === size
        );

        if (existingItem) {
            updateQuantity(existingItem.id, 1);
            return;
        }


        const newCartItem: CartItem = {
            // id:product.id.toString(),
            id: randomUUID(),
            product,
            product_id: product.id,
            size,
            quantity: 1
        }
        setItems([newCartItem, ...items])
    };

    const updateQuantity = (itemId: string, amount: -1 | 1) => {
        setItems(items.map((item) => item.id !== itemId ? item
            : { ...item, quantity: item.quantity + amount }
        ).filter((item) => item.quantity > 0)
        );
    };

    return (
        <CartContext.Provider value={{ items, addItem, updateQuantity , total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);