(
        <div key={question.id} style={{textAlign: 'center', margin: '2em'}}>
         <Link to={"/questions/"+question.id} component={<Poll />} ><h3 > Would you rather.. </h3> </Link>
<p> 
<img width="50px" height="50px" alt="" src={(this.props.users[question.author]["avatarURL"])} /> By {question.author} </p>
<form id={question.id} onChange={e => this._Vote(e)}>  
      <label htmlFor={question.optionOne["text"]}> {question.optionOne["text"] }
</label>
       <input checked={this.props.userObj.answers[question.id] === "optionOne" || false}  type="radio" value="optionOne" id={question.optionOne["text"]} name={question.id} 
/>
<label htmlFor={question.optionTwo["text"]}> {question.optionTwo["text"] }
</label>
       <input checked={this.props.userObj.answers[question.id] === "optionTwo" || false} type="radio" value="optionTwo" id={question.optionTwo["text"]} name={question.id} 
/>
</form>
</div>
      )