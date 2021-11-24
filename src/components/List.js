import React from 'react'
import {handleVote} from '../actions/questions.js'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'
import Poll from './Poll'
import PropTypes from 'prop-types'

class List extends React.Component {

static propTypes = {
currentUser: PropTypes.any,
userObj: PropTypes.object
}

 _Vote(e) {
if (!this.props.currentUser) {alert("King"); return;}

this.props.dispatch(handleVote({
qid: e.currentTarget.id,
authedUser: this.props.currentUser,
answer: e.target.value
}, ()=>{}));
}

  render() {
return (
    <div>
      { Object.values(this.props.questions).map(question => 
(        <Link key={question.id} style={{textDecoration:'none', color:'inherit'}} to={"/questions/"+question.id} component={<Poll />} >
        <div key={question.id} style={{textAlign: 'center', margin: '2em', border:'1px solid black'}}>
 <h3 > Would you rather.. </h3> 
<p> 
<img width="50px" height="50px" alt="" src={(this.props.users[question.author]["avatarURL"])} /> By {question.author} </p>

      <h3 > {question.optionOne["text"] }
</h3>
<span style={{color:'black'}}> ~~~ OR ~~~ </span>
<h3 > {question.optionTwo["text"] }
</h3>

</div>
</Link>
      )) }
  </div>
  )
}
}

export default connect((state) => ({
currentUser: state.user,
userObj: state.users[state.user]
}))(List)