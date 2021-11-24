import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {changeUser, logOut} from '../actions/user.js'


class Login extends React.Component {
static propTypes = {
users: PropTypes.object.isRequired,
user: PropTypes.any
}
 
 Exit = (e) => {
this.props.dispatch(logOut())
} 
  componentDidMount() {

  }

 _changeUser = (event) => {
  const targetUser = event.currentTarget.value
  if (targetUser === "null") {this.Exit(event); return;} 
  const { dispatch } = this.props;
  dispatch(changeUser(event.currentTarget.value));

 // Once the user logs in, The Home page is shown.
  document.getElementById("Home").click();
} 
render() {
return (
<div>
<button onClick={(e)=>{this.Exit()}}> Log Out</button>
<span> {this.props.user ? `Current User: ${this.props.user}` : "No Current User" } </span>
  <select value={this.props.user || "None"} style={{display:'inline-block', float:'right', margin:'0'}} onChange={event => {this._changeUser(event)}}>
<option key="null" value="null">
None
</option>
{
Object.values(this.props.users).map((user, index) => 
(
<option key={user.id} value={user.id}>
{user.name}
</option>
)

)
}
</select>
 </ div>
)
}

}

const mapStateToProps = (state, ownProps) => ({
users: state.users,
user: state.user,
});

export default connect(mapStateToProps)(Login)