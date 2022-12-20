import { StyleSheet } from "react-native"
import colors from "../config/colors"

const todosStyle = StyleSheet.create({
  todosContainer: {
    backgroundColor: colors.transparent,
    width: "90%",
    display: "flex",
    flexDirection: "column"
  }
})

export default todosStyle
