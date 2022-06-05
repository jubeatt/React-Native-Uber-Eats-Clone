import { useEffect, useState, useRef } from "react";
import { SafeAreaView, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import { getDocs, query, orderBy, limit, collection } from "firebase/firestore";

import MenuItems from "../components/Detail/MenuItems";
import { db } from "../firebase";

export default function OrderCompleted () {

  const animationCheck = useRef(null);
  const animationCook = useRef(null);

  const [orderItem, setOrderItem] = useState(null);
  const restaurantName = useSelector(state => state.selectedItems.restaurantName);
  const cartItems = useSelector(state => state.selectedItems.items);
  const total = cartItems
    .map(cartitem => Number(cartitem.prize.replace('$', '')))
    .reduce((prev, current) => prev + current, 0)
    .toLocaleString('en', {
      style: 'currency',
      currency: 'USD'
    })

  useEffect(() => {
    animationCook.current?.play();
    animationCheck.current?.play();

    const q = query(
      collection(db, 'orders'),
      orderBy('createdAt', 'desc'),
      limit(1)
    )
    getDocs(q)
      .then(querySnapshot => {
        querySnapshot.empty
          ? alert('Order not exist.')
          : querySnapshot.forEach(document => setOrderItem(document.data()))
      })
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <LottieView
          ref={animationCheck}
          autoPlay={true}
          loop={false}
          speed={0.75}
          style={{ height: 100, marginBottom: 30, alignSelf: 'center' }}
          source={require('../assets/animations/check-mark.json')}
        />
        <Text style={{ marginBottom: 30, paddingHorizontal: 10, fontSize: 18, fontWeight: 'bold' }}>
          Your order at {restaurantName} has been placed for {total} 🚀
        </Text>
        {orderItem ? 
          <View style={{ maxHeight: 370 }}>
            <MenuItems checkbox={false} menu={orderItem.items} /> 
          </View>
        : <></>}
        <LottieView
          ref={animationCook}
          autoPlay={true}
          loop={true}
          speed={0.75}
          style={{ 
            width: '100%',
            height:200, 
            alignSelf: 'center', 
          }}
          source={require('../assets/animations/cooking.json')}
        />
      </View>
    </SafeAreaView>
  )
}