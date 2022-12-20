import React, { useState } from "react"
import { globalStyle, todoStyle } from "../../styles"
import { View, Text, Pressable } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"

const Todo = (props) => {
  const { todo, selected, setSelectedTodo, todos, setTodos, darkMode } = props
  const [timer, setTimer] = useState()

  const handleTouch = () => {
    clearTimeout(timer)
    setSelectedTodo(todo.id)
    const timeout = setTimeout(() => {
      setSelectedTodo(-1)
    }, 5000)
    setTimer(timeout)
  }

  const displayHour =
    todo.time.hour < 10 ? `0${todo.time.hour}` : todo.time.hour
  const displayMinute =
    todo.time.minute < 10 ? `0${todo.time.minute}` : todo.time.minute

  const handleRemoveTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((checkTodo) => checkTodo.id !== todo.id)
    )
  }

  const [touchX, setTouchX] = useState(-1)
  const [touchY, setTouchY] = useState(-1)

  return (
    <Pressable
      style={
        selected
          ? darkMode
            ? todoStyle.selectedTodoContainerDark
            : todoStyle.selectedTodoContainer
          : darkMode
          ? todoStyle.todoContainerDark
          : todoStyle.todoContainer
      }
      onLongPress={handleTouch}
      delayLongPress={100}
      onTouchStart={(e) => setTouchX(e.nativeEvent.pageX)}
      onTouchEnd={(e) => {
        if (e.nativeEvent.pageX - touchX > 20) console.log("swipe right")
      }}
    >
      <View style={todoStyle.taskStack}>
        <View style={todoStyle.btnContainer}>
          {selected && (
            <FontAwesome.Button
              name='remove'
              style={todoStyle.deleteBtn}
              iconStyle={todoStyle.deleteIcon}
              onPress={handleRemoveTodo}
            ></FontAwesome.Button>
          )}
        </View>

        <Text
          style={
            darkMode
              ? [todoStyle.todoTask, globalStyle.textDark]
              : [todoStyle.todoTask, globalStyle.text]
          }
        >
          {todo.task}
        </Text>
        <Text
          style={
            darkMode
              ? [todoStyle.todoTime, globalStyle.textDark]
              : [todoStyle.todoTime, globalStyle.text]
          }
        >
          {displayHour}:{displayMinute}
        </Text>
      </View>
    </Pressable>
  )
}

export default Todo
