import { StyleSheet } from "react-native"
import colors from "../config/colors"

const newTodoStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: "90%",
    borderRadius: 5,
    padding: "3%"
  },
  containerDark: {
    backgroundColor: colors.primary,
    width: "90%",
    borderRadius: 5,
    padding: "3%"
  },

  icon: {
    marginRight: 0,
    fontSize: 15,
    alignSelf: "center",
    color: colors.primary
  },

  iconDark: {
    marginRight: 0,
    fontSize: 15,
    alignSelf: "center",
    color: colors.secondary
  },

  iconContainer: {
    backgroundColor: colors.secondary,
    marginBottom: 0,
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.primary
  },

  iconContainerDark: {
    backgroundColor: colors.primaryDark,
    marginBottom: 0,
    display: "flex",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.primary
  }
})

export default newTodoStyle
