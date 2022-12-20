import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import colors from "../../config/colors"
import { MONTHS } from "../../constants"
import { globalStyle } from "../../styles"
import Todo from "../Todo/Todo"

const YearsTasks = (props) => {
  const {
    year,
    yearArray,
    selectedTodo,
    setSelectedTodo,
    todos,
    setTodos,
    darkMode
  } = props
  const monthSet = new Set()
  const [months, setMonths] = useState()
  const sortByMonth = () => {}
  const extractMonths = () => {
    // yearArray
    if (yearArray.length > 1)
      yearArray.sort((a, b) => {
        monthSet.add(a.date.month)
        monthSet.add(b.date.month)
        return a.date.month - b.date.month
      })
    else
      yearArray.forEach((a) => {
        monthSet.add(a.date.month)
      })

    const tempMonths = {}
    monthSet.forEach((month) => {
      tempMonths[`${month}`] = []
    })

    yearArray.map((todo) => {
      for (const month of monthSet.values()) {
        if (todo.date.month === month) tempMonths[`${month}`].push(todo)
      }
    })
    setMonths(tempMonths)
    return tempMonths
  }

  useEffect(() => {
    extractMonths()
  }, [])

  const capitalizeString = (e) => {
    return e.charAt(0).toUpperCase() + e.slice(1)
  }
  // const displayMonth =
  return (
    <View key={yearArray[0].id}>
      <Text
        key={year}
        style={darkMode ? globalStyle.textDark : globalStyle.text}
      >
        {year}
      </Text>
      {months &&
        Object.entries(months).map(([month, monthArray]) => (
          <View>
            <Text style={darkMode ? globalStyle.textDark : globalStyle.text}>
              {capitalizeString(MONTHS[month])}
            </Text>
            {monthArray.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                selected={selectedTodo === todo.id ? true : false}
                setSelectedTodo={setSelectedTodo}
                todos={todos}
                setTodos={setTodos}
                darkMode={darkMode}
              />
            ))}
          </View>
        ))}
      {/* {yearArray.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          selected={selectedTodo === todo.id ? true : false}
          setSelectedTodo={setSelectedTodo}
          todos={todos}
          setTodos={setTodos}
        />
      ))} */}
    </View>
  )
}

export default YearsTasks
