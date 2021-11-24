import * as API from '../_DATA.js'
export const ADD_QUESTION = 'ADD_QUESTION'
export const VOTE = 'VOTE'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}
function Vote(option) {
return {
type: VOTE,
...option
}
}

export function handleVote(answer,  cb) {
return (dispatch) => {

   return API._saveQuestionAnswer(answer)

        .then( _ => {

       dispatch(   Vote(answer) )
       cb()
}) 
.catch(err => {console.error(err)})
}
}

export function handleAddQuestion (name, cb) {
  return (dispatch) => {
    return API._saveQuestion(name)
      .then((question) => {
        dispatch(addQuestion(question))
        cb()
      })
      .catch(err => {
        console.error(err)
      })
  }
}

