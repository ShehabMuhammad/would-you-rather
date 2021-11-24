import { combineReducers } from 'redux'

import questions from './questions'
import loading from './loading'
import users from './users'
import user from './user'
import show from './show'
export default combineReducers({
  questions,
  loading,
  users,
  user,
  show
})