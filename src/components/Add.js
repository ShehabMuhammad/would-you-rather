import React from 'react'
import {handleAddQuestion } from '../actions/questions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Add extends React.Component {

static propTypes = {
currentUser: PropTypes.string
}

  
  addQuestion = (e) => {
     e.preventDefault();
     const { currentUser } = this.props;
 
    if(!currentUser || 
      this.optOne.value.trim() === '' ||
      this.optTwo.value.trim() === '' ){ return;}

    this.props.dispatch(handleAddQuestion(

      {optionOneText: this.optOne.value, 

       optionTwoText: this.optTwo.value, 

       author: currentUser },

      () => {this.optOne.value = ''; this.optTwo.value = ''; 
   document.getElementById("Home").click();
/* window.history.replaceState({}, "Hakuna", "/"); */}
    ))
  }

render() {

return (
 <div>
<center>
  <h2> Would you Rather </h2>
  <form onSubmit={(event)=>{this.addQuestion(event)}} action="/">
  <input type="text" id="optionOne" ref={one => {this.optOne = one}} placeholder="optionOne" />   &nbsp;  &nbsp; 
  <input type="text" id="optionTwo" ref={two => {this.optTwo = two}} placeholder="optionTwo" />
<p>{this.props.Questions} </p>
  <button  > Add Question
</button>
</form>
</center>
</div> 
)

}

}
const mapStateToProps = (state, ownProps) => ({
 currentUser: state.user
});

export default (connect(mapStateToProps)(Add))