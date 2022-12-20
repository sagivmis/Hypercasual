import React from "react"
import { mainTitleStyle } from "../../styles"
import { View, Image } from "react-native"
import logo from "../../assets/logo350.png"

const MainTitle = (props) => {
  const { handler } = props
  return (
    <View style={mainTitleStyle.mainTitle} onTouchStart={handler}>
      <Image source={logo} style={mainTitleStyle.logo} />
    </View>
  )
}

export default MainTitle
