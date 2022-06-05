import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";

const items = [
  {
    name: 'Pick-up',
    image: require('../../assets/images/shopping-bag.png')
  },
  {
    name: 'Soft Drinks',
    image: require('../../assets/images/soft-drink.png')
  },
  {
    name: 'Bakery Items',
    image: require('../../assets/images/bread.png')
  },
  {
    name: 'FastFood',
    image: require('../../assets/images/fast-food.png')
  },
  {
    name: 'Pick-up',
    image: require('../../assets/images/shopping-bag.png')
  },
  {
    name: 'Soft Drinks',
    image: require('../../assets/images/soft-drink.png')
  },
  {
    name: 'Bakery Items',
    image: require('../../assets/images/bread.png')
  },
  {
    name: 'FastFood',
    image: require('../../assets/images/fast-food.png')
  },
]

const CategoryItem = ({ name, image }) => (
  <TouchableOpacity style={{
    justifyContent: 'center',
    marginRight: 20,
    alignItems: 'center'
  }}>
    <Image style={{
      width: 50,
      height: 50
    }} source={image} />
    <Text style={{
      fontSize: 16,
      fontWeight: 'bold'
    }}>{name}</Text>
  </TouchableOpacity>
)


export default function Categories () {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: 'white',
      marginTop: 5,
      marginBottom: 16,
      paddingHorizontal: 20,
      paddingVertical: 10,
    }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <CategoryItem key={index} name={item.name} image={item.image} />
        ))}
      </ScrollView>
    </View>
  )
}
