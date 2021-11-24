import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import PropTypes from 'prop-types'
class Questions extends React.Component {

state = {
show: false
}

static propTypes = {
questions: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  currentUser: PropTypes.any
}


_handleShow = show => {


this.setState(prevState => ({show: show}))
}
  render() {

    return (
      <div>
        <center><h1>Question List</h1>
   
     <button style={{margin:'2em', backgroundColor:this.state.show? 'initial':'green'}} onClick={e=>{this._handleShow(false) }} > Show Unanswered </button>

     <button style={{margin:'2em', backgroundColor: !this.state.show? 'initial':'green'}} onClick={e =>{
this._handleShow(true)}} > Show Answered </button>
</center>
    
 <List
          toggle={this.toggleItem}
          questions={this.state.show ? (Object.values(this.props
 .questions)
.filter(e => this.props.users[this.props.currentUser]["answers"][e.id])) : (Object.values(this.props
 .questions)
.filter(e => !this.props.users[this.props.currentUser]["answers"][e.id]))}
          users={this.props.users}
          remove={this.removeItem}
        />
        
      </div>
    )
  }
}

export default connect((state) => ({
  questions: state.questions,
  users: state.users,
  currentUser: state.user
}))(Questions)