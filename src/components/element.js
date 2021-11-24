import React from 'react'


function Element(props) {


return (
<div>
<p> 
<img width="50px" height="50px" alt="" src={(props.users[question.author]["avatarURL"])} /> By {question.author} </p>
<form id={question.id} onChange={e => _Vote(e)}>  
      <label htmlFor={question.optionOne["text"]}> {question.optionOne["text"] }
</label>
       <input checked={props.userObj.answers[question.id] === "optionOne" || false}  type="radio" value="optionOne" id={question.optionOne["text"]} name={question.id} 
/>
<label htmlFor={question.optionTwo["text"]}> {question.optionTwo["text"] }
</label>
       <input checked={props.userObj.answers[question.id] === "optionTwo" || false} type="radio" value="optionTwo" id={question.optionTwo["text"]} name={question.id} 
/>
</form>
</div>
      )) }


)

}

export default connect((state, ownProps) => ({


}))(Element)