import { View } from "react-native";
import { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

export default function Loading () {
  const animation = useRef(null);

  useEffect(() => {
    animation.current?.play();
  }, [])

  return (
    <View style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 999,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <View>
        <LottieView
          ref={animation}
          autoPlay={true}
          loop={true}
          speed={3}
          style={{ height: 150 }}
          source={require('../../assets/animations/scanner.json')}
        />
      </View>
    </View>
  )
}