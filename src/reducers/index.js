import { combineReducers } from 'redux'

import questions from './questions'
import users from './users'
import user from './user'
import show from './show'
export default combineReducers({
  questions,
  users,
  user,
  show
})
