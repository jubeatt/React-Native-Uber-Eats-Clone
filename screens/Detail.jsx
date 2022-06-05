import { useState } from "react";
import { useSelector } from "react-redux";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native";

import Loading from "../components/Detail/Loading";
import Information from "../components/Detail/Information";
import MenuItems from "../components/Detail/MenuItems";
import ViewCart from "../components/Detail/ViewCart";
import Modal from "../components/Detail/Modal";

const menu = [
  {
    name: 'Loaded Sweet Potato Fries Bowl',
    image: 'https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    desc: 'Sweet potato fries and broccolini buddha bowl becomes a perfect meal 💗',
    prize: '$13.50'
  },
  {
    name: 'Grilled Steak with Caper-Herb Sauce',
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2009%2F04%2F15%2Fgrilled-steak-ck-1891954-x.jpg&q=60',
    desc: 'This warm weather steak dinner can be on your patio table in a flash.',
    prize: '$21.50'
  }, 
  {
    name: 'Classic American Burger',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    desc: 'A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!',
    prize: '$19.20'
  },
  {
    name: 'Seafood pasta with shrimps and tomatoes',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    desc: 'This seafood pasta is a mix of shrimp, clams, mussels and scallops 🔥',
    prize: '$37.20'
  },
  {
    name: 'Avocado Chipotle Salsa and Chips',
    image: 'https://pbs.twimg.com/media/FOfOqRTWYAU4OIu.jpg',
    desc: 'resh diced avocados, onions, tomatoes, and jalapenos. Topped with our signature blend of spices, and served with our homemade chips.',
    prize: '$7.00'
  }
]

export default function Detail ({ route, navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const cartItems = useSelector(state => state.selectedItems.items);
  const total = cartItems
  .map(cartitem => Number(cartitem.prize.replace('$', '')))
  .reduce((prev, current) => prev + current, 0);


  return (
    <>
      <Information restaurantInfomation={route.params} />
      <Divider style={{ marginVertical: 15 }} width={2} />
      <SafeAreaView style={{ flex: 1, }}>
        <MenuItems checkbox={true} restaurantName={route.params.name} menu={menu} total={total}/>
        {total ? <ViewCart total={total} setModalOpen={setModalOpen} /> : <></>}
      </SafeAreaView>
      <Modal setLoading={setLoading} navigation={navigation} modalOpen={modalOpen} setModalOpen={setModalOpen} total={total} />
      {loading ? <Loading /> : <></>}
    </>
  )
}