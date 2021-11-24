import React from 'react'
import Questions from './Questions'
import Add from './Add'
import Login from './Login'
import Leaderboard from './Leaderboard'
import Poll from './Poll'
import { connect } from 'react-redux'
import {
  populate
} from '../actions/shared'
import { Link, Routes, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

class App extends React.Component {
static propTypes = {
user: PropTypes.string
}
 
 componentDidMount () {
    const { dispatch } = this.props
    dispatch(populate())
  }

  render() {

    return (

      <div>
        <header className = "app-header" style={{height:'2rem', width:'100%', padding:'1rem', marginBottom:'2em', borderBottom: '2px solid black'}}> 
	  <Link style={{margin:'5px'}} id="Home" to="/"> Home </Link>
	  <Link style={{margin:'5px'}} to="/add" > Add </Link>
	  <Link style={{margin:'5px'}} to="/leaderboard" > Leaderboard </Link>
	  <Login />
	</header>

{!this.props.user ?  (<center><h3> Please Log in </h3></center>) : (<Routes>
        <Route exact path="/" element={<Questions />}>
</Route>
<Route exact path="/leaderboard" element={<Leaderboard />}>
</Route>
<Route exact path="/add" element={<Add />}>
</Route>
<Route path="/questions/:question_id" element={<Poll />}>

</Route>
</Routes>      
)}
</div>
    )
  }
}

export default connect((state) => ({
  user: state.user
}))(App)