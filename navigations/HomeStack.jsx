import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import OrderCompleted from "../screens/OrderCompleted";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

export default function HomeStack () {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={MainTab} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
    </Stack.Navigator>
  )
}
