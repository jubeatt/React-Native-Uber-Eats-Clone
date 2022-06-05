import { Text, View, Image } from "react-native";

export default function Information ({ restaurantInfomation }) {
  const {name, image_url, price, rating, categories, review_count } = restaurantInfomation
  const categoryText = categories.map(category => category.title).join('・')
  
  return (
    <View>
      <Image 
        source={{ uri: image_url }}
        style={{
          width: '100%',
          height: 150,
          marginBottom: 15,
          resizeMode: 'cover',
        }}/>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 8
        }}>{name}</Text>
        <Text>{`${categoryText}・${price ? price : ''}・🎫・${rating}・⭐ (+${review_count})`}</Text>
      </View>
    </View>
  )
}