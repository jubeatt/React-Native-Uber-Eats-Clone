import { NavigationContainer } from "@react-navigation/native";
import HomeStack  from "./navigations/HomeStack";
import { store } from "./redux/store"; 
import { Provider } from "react-redux";
import { LogBox } from "react-native";
import ignoreWarnings from "ignore-warnings";

ignoreWarnings('warn',['ViewPropTypes','[lottie-react-native]'])

LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
])

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </Provider>
  );
}
