
import { Text, View, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

export default function MenuItems ({ checkbox, menu, restaurantName, total }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.selectedItems.items);

  return (
    <ScrollView style={ total ? { marginBottom: 70 } : {}}>
      {menu.map((menuItem, index) => (
        <View key={index}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 15
          }}>
            {checkbox 
              ? <BouncyCheckbox
                isChecked={cartItems.some(cartItem => cartItem.name === menuItem.name)}
                size={28}
                iconStyle={{ borderRadius: 0, borderColor: '#ddd' }}
                fillColor="green"
                onPress={(isChecked) => 
                  isChecked 
                  ? dispatch({
                      type: 'ADD_TO_CART',
                      payload: {
                        menuItem,
                        restaurantName
                      }
                    }) 
                  : dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: menuItem.name
                    })
                  }
              />
              : <></>
            }
            <View style={{ marginRight: 10, flexShrink: 1 }}>
              <Text style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 8
              }}>{menuItem.name}</Text>
              <Text style={{ marginBottom: 8 }}>{menuItem.desc}</Text>
              <Text>{menuItem.prize}</Text>
            </View>
            <View>
              <Image source={{ uri: menuItem.image }} style={{
                width: 110,
                height: 110,
                resizeMode: 'cover',
                borderRadius: 10,
                left: 25
              }}/>
            </View>
          </View>
          <Divider style={{ marginHorizontal: 8 }} />
        </View>
      ))}
    </ScrollView>
  )
}