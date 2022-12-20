import React, { useState } from "react"
import { TextInput, View, Text } from "react-native"
import { Button } from "react-native-web"
import {
  ALARM,
  customInputStackStyle,
  NAME,
  STATUS,
  TASK,
  TIME,
  HOUR,
  MINUTE,
  customDarkInputStackStyle
} from "../../constants/constants"

import { newTodoStyle } from "../../styles"
import InputWLabel from "../../utilComponents/InputWLabel"
import FontAwesome from "@expo/vector-icons/FontAwesome"

const AddNewTodo = (props) => {
  const { name, setName, todos, setTodos, debugLogs, setViewOnly, darkMode } =
    props
  const [task, setTask] = useState()
  const [time, setTime] = useState()
  const [hour, setHour] = useState()
  const [minute, setMinute] = useState()
  const [status, setStatus] = useState()
  const [alarm, setAlarm] = useState()

  const inputFields = [
    {
      id: 0,
      label: "Task",
      onChangeText: (e) => onChangeTask(e, TASK),
      placeholder: "Prove string theory",
      keyboardType: "default",
      customStylesInputStack: darkMode
        ? customDarkInputStackStyle
        : customInputStackStyle,
      darkMode
    },

    {
      id: 1,
      placeholder: "08:00",
      keyboardType: "decimal-pad",
      customStylesInputStack: darkMode
        ? customDarkInputStackStyle
        : customInputStackStyle,
      halfWidth: true,
      doubleInputStack: true,
      labelA: "Hour",
      labelB: "Minute",
      onChangeTextA: (e) => onChangeTask(e, HOUR),
      onChangeTextB: (e) => onChangeTask(e, MINUTE),
      darkMode
    },
    {
      id: 2,
      label: "Status",
      onChangeText: (e) => onChangeTask(e, STATUS),
      placeholder: "Nope",
      keyboardType: "default",
      customStylesInputStack: darkMode
        ? customDarkInputStackStyle
        : customInputStackStyle,
      darkMode
    },
    {
      id: 3,
      label: "Alarm",
      onChangeText: (e) => onChangeTask(e, ALARM),
      placeholder: "PLEASE",
      keyboardType: "default",
      customStylesInputStack: darkMode
        ? customDarkInputStackStyle
        : customInputStackStyle,
      darkMode
    }
  ]

  const onChangeTask = (e, field) => {
    switch (field) {
      case TASK:
        setTask(e)
        break

      case TIME:
        setTime(e)
        break

      case STATUS:
        setStatus(e)
        break

      case ALARM:
        setAlarm(e)
        break

      case NAME:
        setTempName(e)
        break

      case HOUR:
        setHour(e)
        break

      case MINUTE:
        setMinute(e)
        break
    }
  }
  const [tempName, setTempName] = useState("")

  const handleNameBtn = (e) => setName(tempName)
  const handleAddBtn = (e) => {
    const date = new Date()
    const newTodo = {
      id: todos.length,
      task: task,
      time: {
        hour: parseInt(hour),
        minute: parseInt(minute)
      },
      date: {
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getFullYear()
      },
      status: status,
      alarm: alarm
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
    debugLogs &&
      console.log(
        `Added "${newTodo.task}" (${newTodo.status ? "" : "NOT "}DONE) task (#${
          newTodo.id
        })\n@ ${newTodo.time.hour}:${newTodo.time.minute} || ${
          newTodo.date.day
        }/${newTodo.date.month}/${newTodo.date.year}\nALARM SET ${
          newTodo.alarm ? "ON" : "OFF"
        }`
      )
    setViewOnly(true)
  }
  return (
    (!!name && (
      <View
        style={darkMode ? newTodoStyle.containerDark : newTodoStyle.container}
      >
        {inputFields.map((inputData) => (
          <InputWLabel {...inputData} key={inputData.id} />
        ))}
        <FontAwesome.Button
          name={"check"}
          style={
            darkMode
              ? newTodoStyle.iconContainerDark
              : newTodoStyle.iconContainer
          }
          onPress={handleAddBtn}
          backgroundColor='transparent'
          iconStyle={darkMode ? newTodoStyle.iconDark : newTodoStyle.icon}
        ></FontAwesome.Button>
      </View>
    )) ||
    (!name && (
      <View
        style={darkMode ? newTodoStyle.containerDark : newTodoStyle.container}
      >
        <InputWLabel
          label='Your Name'
          onChangeText={(e) => onChangeTask(e, NAME)}
          value={alarm}
          placeholder='Ron Weasley'
          keyboardType='default'
          customStylesInputStack={customInputStackStyle}
          darkMode={darkMode}
        />
        <FontAwesome.Button
          name={"check"}
          style={
            darkMode
              ? newTodoStyle.iconContainerDark
              : newTodoStyle.iconContainer
          }
          onPress={handleNameBtn}
          backgroundColor='transparent'
          iconStyle={darkMode ? newTodoStyle.iconDark : newTodoStyle.icon}
        ></FontAwesome.Button>
      </View>
    ))
  )
}

export default AddNewTodo
