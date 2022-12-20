import {
  Text,
  View,
  Switch,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native"
import { useEffect, useState } from "react"
import { useFonts } from "expo-font"
import { appStyle, globalStyle } from "./styles"
import MainTitle from "./components/MainTitle/MainTitle"
import Todos from "./components/Todos/Todos"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import AddNewTodo from "./components/AddNewTodo/AddNewTodo"
import { todosDummy } from "./constants"
import colors from "./config/colors"

const debugLogs = true

export default function App() {
  debugLogs && console.log("App initiated")
  const [name, setName] = useState("")
  const [viewOnly, setViewOnly] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [loaded] = useFonts({
    MouseMemoirs: require("./assets/fonts/MouseMemoirs-Regular.ttf"),
    Roboto: require("./assets/fonts/Roboto/Roboto-Black.ttf")
  })
  const [todos, setTodos] = useState(todosDummy)

  if (!loaded) {
    return null
  }

  const handleAddNewTodo = () => {
    setViewOnly(false)
  }

  const cancelAddNewTodo = () => {
    setViewOnly(true)
  }
  const toggleSwitch = () => setDarkMode((mode) => !mode)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={darkMode ? appStyle.appDark : appStyle.app}
        onPress={Keyboard.dismiss}
      >
        <Switch
          trackColor={{ false: colors.primaryDark, true: colors.primary }}
          thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor='#3e3e3e'
          onValueChange={toggleSwitch}
          value={darkMode}
        />
        <MainTitle />
        <View style={appStyle.controlStack}>
          {!!name && (
            <Text style={darkMode ? globalStyle.textDark : globalStyle.text}>
              Welcome {`${name}`},
            </Text>
          )}
          {!!name && (
            <FontAwesome.Button
              name={viewOnly ? "plus" : "remove"}
              style={
                darkMode
                  ? appStyle.addIconContainerDark
                  : appStyle.addIconContainer
              }
              onPress={viewOnly ? handleAddNewTodo : cancelAddNewTodo}
              backgroundColor='transparent'
              iconStyle={darkMode ? appStyle.addIconDark : appStyle.addIcon}
            ></FontAwesome.Button>
          )}
        </View>
        {!!name && viewOnly && (
          <Todos todos={todos} setTodos={setTodos} darkMode={darkMode} />
        )}
        {(!viewOnly && (
          <AddNewTodo
            name={name}
            setName={setName}
            todos={todos}
            setTodos={setTodos}
            debugLogs={debugLogs}
            setViewOnly={setViewOnly}
            darkMode={darkMode}
          />
        )) ||
          (!name && (
            <AddNewTodo
              name={name}
              setName={setName}
              todos={todos}
              setTodos={setTodos}
              debugLogs={debugLogs}
              setViewOnly={setViewOnly}
              darkMode={darkMode}
            />
          ))}
      </View>
    </TouchableWithoutFeedback>
  )
}
