import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

const items = [
  {
    name: 'Farmhouse Kitchen Thai Cuisine',
    image: 'https://media.timeout.com/images/105825245/750/422/image.jpg',
    rating: 4
  },
  {
    name: 'FIG Restaurant',
    image: 'https://www.hotelfigueroa.com/wp-content/uploads/2021/07/18113432/cafe-fig-breakfast-1350x900.jpg',
    rating: 4
  },
  {
    name: 'Farmhouse Kitchen Thai Cuisie',
    image: 'https://media.timeout.com/images/105825245/750/422/image.jpg',
    rating: 4
  },
  {
    name: 'Farmhouse Kitchen Thai Cuisie',
    image: 'https://media.timeout.com/images/105825245/750/422/image.jpg',
    rating: 4
  },
  {
    name: 'Farmhouse Kitchen Thai Cuisie',
    image: 'https://media.timeout.com/images/105825245/750/422/image.jpg',
    rating: 4
  },
  {
    name: 'Farmhouse Kitchen Thai Cuisie',
    image: 'https://media.timeout.com/images/105825245/750/422/image.jpg',
    rating: 4
  },
  {
    name: 'Farmhouse Kitchen Thai Cuisie',
    image: 'https://media.timeout.com/images/105825245/750/422/image.jpg',
    rating: 4
  },
  {
    name: 'Farmhouse Kitchen Thai Cuisie',
    image: 'https://media.timeout.com/images/105825245/750/422/image.jpg',
    rating: 4
  },
  {
    name: 'Farmhouse Kitchen Thai Cuisie',
    image: 'https://media.timeout.com/images/105825245/750/422/image.jpg',
    rating: 4
  },
  {
    name: 'Farmhouse Kitchen Thai Cuisie',
    image: 'https://media.timeout.com/images/105825245/750/422/image.jpg',
    rating: 4
  },
]

const RestaurantImage = ({ image }) => (
  <View>
    <Image 
      source={{ uri: image }}
      resizeMode="cover"
      style={{
        width: '100%',
        height: 180,
        marginBottom: 10
      }}
    />
    <TouchableOpacity style={{
      position: 'absolute',
      top: 10,
      right: 10,
    }}>
      <FontAwesome5
        name="heart"
        size={24}
        color="white"
      />
    </TouchableOpacity>
  </View>
)

const RestaurantInfo = ({ name, rating }) => (
  <View style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    <View>
      <Text style={{
        fontWeight: "bold",
        fontSize: 16
      }}>{name}</Text>
      <Text style={{
        color: '#999'
      }}>35-45・min</Text>
    </View>
    <View style={{
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#ddd'
    }}>
      <Text style={{
        textAlign: 'center',
        lineHeight: 30,
      }}>{rating}</Text>
    </View>
  </View>
)

export default function RestaurantItems ({ restaurants, navigation }) {
  return (
    restaurants 
    ?  restaurants.map((resturant) => (
        <TouchableOpacity
          key={resturant.id}
          activeOpacity={1}
          style={{
            backgroundColor: 'white',
            padding: 16,
            marginBottom: 16,
          }}
          onPress={() => navigation.navigate('Detail', resturant)}
          >
          <RestaurantImage image={resturant.image_url} />
          <RestaurantInfo name={resturant.name} rating={resturant.rating} />
        </TouchableOpacity>))
    : <></>
  )
}



