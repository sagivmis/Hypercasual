import colors from "../config/colors"

export const TASK = "task"
export const TIME = "time"
export const STATUS = "status"
export const ALARM = "alarm"
export const NAME = "name"
export const HOUR = "hour"
export const MINUTE = "minute"

export const JAN = "january"
export const FEB = "februar"
export const MAR = "march"
export const APR = "april"
export const MAY = "may"
export const JUN = "juny"
export const JUL = "july"
export const AUG = "august"
export const SEP = "september"
export const OCT = "october"
export const NOV = "novermber"
export const DEC = "december"

export const MONTHS = {
  1: JAN,
  2: FEB,
  3: MAR,
  4: APR,
  5: MAY,
  6: JUN,
  7: JUL,
  8: AUG,
  9: SEP,
  10: OCT,
  11: NOV,
  12: DEC
}

export const todosDummy = [
  {
    id: 0,
    task: "Walk Jacky",
    time: {
      hour: 19,
      minute: 0
    },
    date: {
      day: 12,
      month: 3,
      year: 2022
    },
    status: false,
    alarm: true
  },
  {
    id: 1,
    task: "Study",
    time: {
      hour: 10,
      minute: 0
    },
    date: {
      day: 12,
      month: 1,
      year: 2022
    },
    status: false,
    alarm: true
  },
  {
    id: 6,
    task: "Eat",
    time: {
      hour: 10,
      minute: 0
    },
    date: {
      day: 12,
      month: 4,
      year: 2022
    },
    status: false,
    alarm: true
  },
  {
    id: 2,
    task: "Go to the gym",
    time: {
      hour: 21,
      minute: 0
    },
    date: {
      day: 22,
      month: 9,
      year: 2021
    },
    status: false,
    alarm: true
  },
  {
    id: 3,
    task: "Sleep",
    time: {
      hour: 23,
      minute: 0
    },
    date: {
      day: 12,
      month: 12,
      year: 2022
    },
    status: false,
    alarm: true
  },
  {
    id: 4,
    task: "Rave",
    time: {
      hour: 23,
      minute: 0
    },
    date: {
      day: 12,
      month: 12,
      year: 2023
    },
    status: false,
    alarm: true
  },
  {
    id: 5,
    task: "Repeat",
    time: {
      hour: 23,
      minute: 0
    },
    date: {
      day: 12,
      month: 12,
      year: 2024
    },
    status: false,
    alarm: true
  }
]

export const customInputStackStyle = {
  borderColor: colors.primary,
  borderWidth: 1
}
export const customDarkInputStackStyle = {
  borderColor: colors.secondary,
  borderWidth: 1
}
