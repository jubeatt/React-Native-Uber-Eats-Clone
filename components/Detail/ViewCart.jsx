import { View, Text, TouchableOpacity } from "react-native";

export default function ViewCart ({ total, setModalOpen }) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={{
        position: 'absolute',
        bottom: 30,
        width: '100%',
        alignItems: 'center',
      }}
      onPress={() => setModalOpen(true)}
    >
      <View style={{
        width: '80%',
        backgroundColor: 'black',
        borderRadius: 99,
        padding: 15,
        alignItems: 'center'
      }}>
        <Text style={{
          color: 'white',
          fontSize: 18
        }}>View Cart</Text>
        <Text style={{
          position: 'absolute',
          right: 20,
          top: 18,
          color: 'white',
          fontSize: 14
        }}>{total.toLocaleString('en', {
          style: 'currency',
          currency: 'USD'
        })}</Text>
      </View>
    </TouchableOpacity>
  )
}