import React, { createContext, useState, useEffect } from 'react';
//create context

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([])

  //item amount state
  const [itemAmount, setItemAmount] = useState(0)

  //total price state
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((accumulator, currenItem) => {
      return accumulator + currenItem.price * currenItem.amount
    },0);
    setTotal(total)
  })

  //update item amount
  useEffect(() => {
    if(cart){
      const amount = cart.reduce((accumulator, currenItem) => {
        return accumulator + currenItem.amount
      },0);
      setItemAmount(amount)
    }
  }, [cart])

  //add to cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
    //check if item is already present  in the the cart
    const cartItem = cart.find(item => {
      return item.id === id;
    })
    //if cartItem is already present in the cart
    if(cartItem){
      const newCart = [...cart].map(item => {
        if(item.id === id){
          return {...item, amount: cartItem.amount + 1};

        } else{
          return item
        }
      })
      setCart(newCart)
    } else{
      setCart([...cart, newItem])
    }
  }
  //remove from cart 
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    });
    setCart(newCart)
  }

  //clear cart

  const clearCart = () => {
    setCart([]);
  }
  //console.log(cart)
  //increment amount
  const incrementAmount = (id) => {
    const cartItem =cart.find((item) => item.id === id)
    addToCart(cartItem, id)
  }

  //decrement amount

  const decrementAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if(cartItem){
      const newCart = cart.map(item => {
        if(item.id === id){
          return {...item, amount: cartItem.amount - 1}
        }
        else{
          return item
        }
      })
      setCart(newCart)
    }
    
      if(cartItem.amount < 2){
        removeFromCart(id)
      }
    
  }


  return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, incrementAmount, decrementAmount, itemAmount,total}}>{children}</CartContext.Provider>
};

export default CartProvider;
