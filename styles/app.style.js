import { StyleSheet } from "react-native"
import colors from "../config/colors"

const appStyle = StyleSheet.create({
  app: {
    flex: 1,
    position: "relative",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "10%",
    paddingBottom: "10%"
  },

  appDark: {
    flex: 1,
    position: "relative",
    backgroundColor: colors.primaryDark,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "10%",
    paddingBottom: "10%"
  },
  introBtnContainer: {
    width: 200,
    flex: 1,
    position: "absolute",
    bottom: "3%"
  },

  container: {
    backgroundColor: colors.white,
    width: "70%",
    height: "20%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
    position: "relative"
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "800",
    fontFamily: "MouseMemoirs"
  },

  text: {
    color: colors.black,
    width: "100%",
    textAlign: "center",
    flex: 3
  },

  mainTitle: {
    fontSize: 54,
    fontWeight: "600"
  },

  addIcon: {
    marginRight: 0,
    fontSize: 15,
    color: colors.primary
  },

  addIconDark: {
    marginRight: 0,
    fontSize: 15,
    color: colors.secondary
  },

  addIconContainer: {
    backgroundColor: colors.secondary,
    marginBottom: 0
  },

  addIconContainerDark: {
    backgroundColor: colors.primary,
    marginBottom: 0
  },

  controlStack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    backgroundColor: "transparent",
    marginBottom: 10
  }
})

export default appStyle
