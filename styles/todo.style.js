import { StyleSheet } from "react-native"
import colors from "../config/colors"

const todoStyle = StyleSheet.create({
  todoContainer: {
    backgroundColor: colors.secondary,
    width: "100%",
    minHeight: 70,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    marginBottom: 5,
    padding: 5
  },
  selectedTodoContainer: {
    backgroundColor: colors.secondary,
    width: "100%",
    minHeight: 70,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: colors.borderPrimary
  },
  todoContainerDark: {
    backgroundColor: colors.primary,
    width: "100%",
    minHeight: 70,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    marginBottom: 5,
    padding: 5
  },
  selectedTodoContainerDark: {
    backgroundColor: colors.primary,
    width: "100%",
    minHeight: 70,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: colors.borderPrimary
  },
  deleteBtn: {
    backgroundColor: colors.warning,
    width: 17.5,
    padding: 2.5,
    marginRight: 0,
    color: "red"
  },
  btnContainer: {
    position: "absolute",
    left: "-10%",
    top: 3,
    width: 17.5,
    paddingTop: 3,
    marginLeft: 3
  },
  deleteIcon: {
    marginRight: 0,
    fontSize: 15
  },
  todoTask: {
    fontWeight: "500",
    fontSize: 18
  },
  todoTime: {
    fontWeight: "300",
    fontSize: 18,
    position: "absolute",
    right: "15%"
  },
  taskStack: {
    left: "10%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
})

export default todoStyle
