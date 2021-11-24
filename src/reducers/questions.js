import {
  ADD_QUESTION,
  VOTE
} from '../actions/questions'

import {
  RECEIVE_DATA
} from '../actions/shared'

export default function questions(state = {}, action) {


  switch(action.type) {
    case ADD_QUESTION :
      return Object.assign({}, {[action.question.id]: action.question}, state )
    
    case VOTE: {
 let qid = action.qid;
let Q = state[qid], otherOption = action.answer === "optionOne" ? "optionTwo" : "optionOne";
	return  Object.assign({}, state, {
    [qid]: {
    ...Q,
   [action.answer]: {
  text: Q[action.answer]["text"], 
   votes: [...(new Set( [...Q[action.answer]["votes"], action.authedUser] ))]
},
 [otherOption]: {
text: Q[otherOption]["text"], 
votes: [...Q[otherOption]["votes"].filter(u => u !== action.authedUser)] 
}



} // 
})}
    case RECEIVE_DATA :
      return action.questions 
    default :
      return state
  }
}