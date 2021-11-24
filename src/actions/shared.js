import * as DATA from '../_DATA.js';
export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData (questions, users) {

  return {
    type: RECEIVE_DATA,
    questions,
    users,
  }
}

export function populate() {
  return (dispatch) => {
    return Promise.all([
       DATA._getQuestions(),
       DATA._getUsers()
    ]).then(([ questions, users ]) => {
      dispatch(receiveData(questions,
                           users))
    })
  }
}