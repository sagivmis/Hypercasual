import React, { useEffect, useLayoutEffect, useState } from "react"
import { StyleSheet, Text, ScrollView, View } from "react-native"
import { todosStyle } from "../../styles"
import YearsTasks from "../YearsTasks/YearsTasks"

const Todos = (props) => {
  const { todos, setTodos, darkMode } = props
  const [sorted, setSorted] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState(-1)

  const [years, setYears] = useState()
  const [months, setMonths] = useState()
  const [days, setDays] = useState()

  const yearSet = new Set()
  const daySet = new Set()

  const sortByYear = () => {
    todos.sort((a, b) => {
      yearSet.add(a.date.year)
      yearSet.add(b.date.year)
      return a.date.year - b.date.year
    })
    setTodos(todos)
    return extractByYear()
  }

  const extractByYear = () => {
    const tempYears = {}
    yearSet.forEach((year) => {
      tempYears[`${year}`] = []
    })
    todos.map((todo) => {
      for (const year of yearSet.values()) {
        if (todo.date.year === year) tempYears[`${year}`].push(todo)
      }
    })
    setYears(tempYears)
    return tempYears
  }

  const extractByMonth = () => {
    const tempMonths = {}
    monthSet.forEach((month) => {
      tempMonths[`${month}`] = []
    })

    Object.entries(years).forEach((year) => {
      year[1].forEach((month) => {
        for (const monthItem of monthSet.values()) {
          if (month.date.month === monthItem && month.date.year === year)
            tempMonths[`${month}`].push(month)
        }
      })
    })
  }
  useEffect(() => {
    sortByYear()
  }, [todos])

  useLayoutEffect(() => {
    setTimeout(() => {
      // timers and intervals remain in seperate queue than synchronous code
      // while the former fires immediately after the latter
      // so '0ms' timeout is the actuall useEffect. used useLayoutEffect for better
      // readability
      setSorted(true)
    }, 0)
  }, [])
  return (
    sorted && (
      <ScrollView style={todosStyle.todosContainer}>
        <View onStartShouldSetResponder={() => true}>
          {years &&
            Object.entries(years).map(([year, yearArray], index) => (
              <YearsTasks
                year={year}
                yearArray={yearArray}
                selectedTodo={selectedTodo}
                setSelectedTodo={setSelectedTodo}
                todos={todos}
                setTodos={setTodos}
                darkMode={darkMode}
              />
            ))}
        </View>
      </ScrollView>
    )
  )
}

export default Todos
