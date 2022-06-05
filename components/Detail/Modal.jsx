import { Modal, View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from "react-native";
import { useSelector } from "react-redux";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";


const CartItem = ({ name, prize }) => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
  }}>
    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
    <Text style={{ fontSize: 14, color: '#666' }}>{prize}</Text>
  </View>
)

export default function ModalComponent ({ navigation, modalOpen, setModalOpen, total, setLoading }) {
  const cartItems = useSelector(store => store.selectedItems.items);
  const restaurantName = useSelector(store => store.selectedItems.restaurantName);
  
  const addToFirebase = () => {
    setModalOpen(false);
    setLoading(true);
    const now = new Date().getTime().toString();
    const docRef = doc(db, 'orders', now);
    setDoc(docRef, {
      items: cartItems,
      restaurantName,
      createdAt: serverTimestamp()
    })
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('OrderCompleted')
    }, 2500)
  }
  return (
    <Modal 
      visible={modalOpen}
      animationType="slide"
      transparent={true}
      >
      {/* black area */}
      <View style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
      }}>
        {/* just for close modal */}
        <TouchableWithoutFeedback onPress={() => setModalOpen(false)}>
          <View style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '50%',
          }}>
          </View>
        </TouchableWithoutFeedback>
        {/* content area */}
        <View style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'white',
            width: '100%',
            height: '50%',
            padding: 10,
            zIndex: 999,
        }}>
          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          }}>{restaurantName}</Text>
          <ScrollView style={{ flexGrow: 0, maxHeight: 230, marginBottom: 15 }} showsVerticalScrollIndicator={false}>
            {cartItems.map((cartItem, index) => (
              <CartItem key={index} name={cartItem.name} prize={cartItem.prize}  />
            ))}
          </ScrollView>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 30,
          }}>
            <Text style={{ fontWeight: 'bold' }}>Subtotal</Text>
            <Text>{total.toLocaleString('en', {
              style: 'currency',
              currency: 'USD'
            })}</Text>
          </View>
          <TouchableOpacity style={{
              width: '80%',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 99,
              backgroundColor: 'black',
              padding: 15,
            }}
            activeOpacity={0.7}
            onPress={addToFirebase}
          >
            <Text style={{ color: 'white', fontSize: 18 }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}


