import {
  RECEIVE_DATA
} from '../actions/shared'
import {VOTE, ADD_QUESTION} from '../actions/questions.js'

export default function questions (state = {}, action) {

  switch(action.type) {
    case ADD_QUESTION: {
          return Object.assign({}, state, {[action.question.author]:{
         ...state[action.question.author],
          questions: [ action.question.id, ...state[action.question.author]["questions"] ]
      }}); }
    case RECEIVE_DATA :
      return action.users
    case VOTE: {
let obj = state[action.authedUser];
obj.answers[action.qid] = action.answer;
return state;
}
    default :
      return state
  }
}