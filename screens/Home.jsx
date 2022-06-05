import { useState, useEffect } from "react";
import { View, ScrollView, SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { API_END_POINT, API_KEY } from "../constants";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems from "../components/home/RestaurantItems";


export default function Home ({ navigation }) {
  const [restaurants, setRestaurants] = useState([]);
  const [currentTab, setCurrentTab] = useState('Delivery');
  const [city, setCity] = useState('Queens');

  useEffect(() => {
    const fetchRestaurants = () => {
      fetch(`${API_END_POINT}/search?location=${encodeURIComponent(city)}`, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        }
      })
      .then(response => response.json())
      .then(json => {
        const filterRestaurants = json.businesses.filter(restaurant =>
          restaurant.transactions.some(transaction =>
            transaction === currentTab.toLowerCase()))
        setRestaurants(filterRestaurants);
      })
    }
    fetchRestaurants()
  }, [city, currentTab])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{
        backgroundColor: '#ddd',
        flex: 1
      }}>
        <View style={{ backgroundColor: 'white', padding: 15 }}>
          <HeaderTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          <SearchBar setCity={setCity} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems restaurants={restaurants} navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}