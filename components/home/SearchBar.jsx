import { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Keyboard } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_KEY } from "../../constants";

const SearchButton = ({ autoCompleteMethod, setCity }) => (
  <TouchableOpacity style={{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 99,
    padding: 8,
    top: -2
  }} onPress={() => {
    Keyboard.dismiss();
    setCity(autoCompleteMethod.getAddressText().split(',')[0])
  }}>
    <MaterialCommunityIcons style={{ marginRight: 5 }} name="clock" size={14} />
    <Text>Search</Text>
  </TouchableOpacity>
)


export default function SearchBar ({ setCity }) {

  const ref = useRef();

  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder="Search"
        styles={{
          textInputContainer: {
            alignItems: 'center',
            backgroundColor: '#eee',
            marginRight: 10,
            borderRadius: 50,
            paddingTop: 5,
          },
          textInput: {
            backgroundColor: '#eee',
            fontWeight: 'bold'
          },
        }}
        renderLeftButton={() => (
          <View style={{
            marginLeft: 10
          }}>
            <MaterialIcons name="location-on" size={24} color="black"  />
          </View>
        )}
        renderRightButton={() => (
          <View style={{ marginHorizontal: 10 }}>
            <SearchButton autoCompleteMethod={ref.current} setCity={setCity} />
          </View>
        )}
        query={{
          key: GOOGLE_KEY
        }}
        onPress={(data) => setCity(data.description.split(',')[0])}
      />
    </View>
  )
}
