import React from 'react'
import {  useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import {handleVote} from '../actions/questions.js'
import PropTypes from 'prop-types'

function D(props){

return <p>
 Chosen By {props.number} people, Percentage: {props.number/props.sum * 100} % </p>
 
}

function Poll(props) {

const _Vote = (e) => {
if (!props.user) {alert("King"); return;}

props.dispatch(handleVote({
qid: e.currentTarget.id,
authedUser: props.user,
answer: e.target.value
}, ()=>{}));
}


let question, optOneVotes, optTwoVotes,
    sum, author, showRes;
const { question_id } = useParams();
question = props.questions[question_id];
let userObj = props.users[props.user];
showRes = userObj["answers"][question_id] !== undefined;

if (!question) {
   return <center><h3> 404 <br /> No poll found with this id </h3> </center>
}
optOneVotes = question["optionOne"]["votes"].length || 0;
optTwoVotes = question["optionTwo"]["votes"].length || 0;
sum = (optOneVotes + optTwoVotes) || 1; author = question["author"]

  return (
<div>
<center>
<h1>Would you rather.. </h1>
<p> By Author: {author} | <img width="50px" height="50px" 
  src={props.users[props.user]["avatarURL"]} alt="" /> </p>

<form id={question.id} onChange={e => _Vote(e)}>  
  <div style={{border:'1px solid black'}}>    
<label htmlFor="optionOne">
{question.optionOne["text"]} {showRes ? (<D number={optOneVotes} sum={sum} />) : '' }
</label>
<input defaultChecked={userObj.answers[question_id] === "optionOne"}  type="radio" value="optionOne" id="optionOne" name={question_id} 
/>
</div>
<div style={{border:'1px solid black'}}>
<label htmlFor="optionTwo"> { question.optionTwo["text"] } {showRes ? (<D number={optTwoVotes} sum={sum} />) : '' } 
</label>
       <input  defaultChecked={userObj.answers[question_id] === "optionTwo"} type="radio" value="optionTwo" id="optionTwo" name={question_id} 
/>
</div>
</form>

</center>
</div>
)

 
}



Poll.propTypes = {
user: PropTypes.any,
users: PropTypes.object.isRequired,
questions: PropTypes.object.isRequired
}

export default connect((state)=>({
questions: state.questions,
user: state.user,
users: state.users
}))(Poll)