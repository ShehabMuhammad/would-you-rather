import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

class Leaderboard extends Component {

static propTypes = {
users: PropTypes.object.isRequired
}


render() {

return (
<div>
<center> <h1> Leader Board </h1> </center>
 <center> 
<ol>
{
Object.values(this.props.users).sort((a, b) => (b.questions.length + Object.keys(b.answers).length ) -
(a.questions.length + Object.keys(a.answers).length )
).map(user =>     (
<li style={{margin:'1em'}}key={user.id}>  
<strong> {user.name} </strong>
<img width="50px" height="50px" style={{borderRadius:'50%', verticalAlign:'middle', margin:'0px 10px'}} alt={user.id} src={user.avatarURL}  />
{` Asked: ${user.questions.length}  questions | Answered: ${Object.keys(user.answers).length} questions` }    </li>)    )
}
</ol>
</center>
</div>
)
  }
}

export default connect((state)=>({
users: state.users
}))(Leaderboard)