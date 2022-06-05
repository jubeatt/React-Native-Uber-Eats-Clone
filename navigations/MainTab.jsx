import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';
import Home from "../screens/Home";
import Account from "../screens/Account";
import Browse from "../screens/Browse";
import Order from "../screens/Order";
import Grocery from "../screens/Grocery";

const Tab = createBottomTabNavigator();

export default function MainTab () {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#eee',
        borderTopColor: '#eee'
      },
      tabBarLabelStyle: {
        fontSize: 14
      },
      tabBarActiveTintColor: 'black',
    }}>
      <Tab.Screen name="HomeStack" component={Home} options={{
        title: 'Home',
        tabBarIcon: ({ focused }) => {
          return <FontAwesome5 name="home" size={26} color={ focused ? 'black' : 'rgba(0,0,0,0.5)}' } />
        }
      }}/>
      <Tab.Screen name="Browse" component={Browse} options={{
        tabBarIcon: ({ focused }) => {
          return <FontAwesome5 name="search" size={26} color={ focused ? 'black' : 'rgba(0,0,0,0.5)}' } />
        }
      }}/>
      <Tab.Screen name="Grocery" component={Grocery} options={{
        tabBarIcon: ({ focused }) => {
          return <FontAwesome5 name="shopping-bag" size={26} color={ focused ? 'black' : 'rgba(0,0,0,0.5)}' } />
        }
      }}/>
      <Tab.Screen name="Order" component={Order} options={{
        tabBarIcon: ({ focused }) => {
          return <FontAwesome5 name="receipt" size={26} color={ focused ? 'black' : 'rgba(0,0,0,0.5)}' } />
        }
      }}/>
      <Tab.Screen name="Account" component={Account} options={{
        tabBarIcon: ({ focused }) => {
          return <FontAwesome5 name="user" size={26} color={ focused ? 'black' : 'rgba(0,0,0,0.5)}' } />
        }
      }}/>
    </Tab.Navigator>
  )
}