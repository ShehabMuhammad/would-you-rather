import React from 'react'
import {handleAddQuestion } from '../actions/questions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';


function Add(props) {
let optOne, optTwo;
let nav = useNavigate();
  
  let addQuestion = (e) => {

     e.preventDefault();
     const { currentUser } = props;
 
    if(!currentUser || 
      optOne.value.trim() === '' ||
      optTwo.value.trim() === '' ){ return;}

    props.dispatch(handleAddQuestion(

      {optionOneText: optOne.value, 

       optionTwoText: optTwo.value, 

       author: currentUser },


      () => {/* ~~~\/|^_^|\/ ~~~ */ } ));
 
  nav("/");
    
  }



return (
 <div>
<center>
  <h2> Would you Rather </h2>
  <form onSubmit={(event)=>{addQuestion(event)}} action="/">
  <input type="text" id="optionOne" ref={one => {optOne = one}} placeholder="optionOne" />   &nbsp;  &nbsp; 
  <input type="text" id="optionTwo" ref={two => {optTwo = two}} placeholder="optionTwo" />
<p>{props.Questions} </p>
  <button  > Add Question
</button>
</form>
</center>
</div> 
)

}



Add.propTypes = {
currentUser: PropTypes.string
}

const mapStateToProps = (state, ownProps) => ({
 currentUser: state.user,
 goHome: state.goHome
});

export default (connect(mapStateToProps)(Add))