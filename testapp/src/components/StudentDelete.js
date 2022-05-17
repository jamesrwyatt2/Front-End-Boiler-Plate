import React from 'react';
import axios from 'axios';



export default class StudentDelete extends React.Component {


    handleSubmit = event => {
        event.preventDefault();
        this.makeDeleteCall();
      }

    makeDeleteCall(){
        axios.delete(`http://localhost:8080/students/${this.props.id}`)        
        .then(res => {
          	console.log(res);
          	if(res.status === 200){
            	this.props.getStudents()
          	}
        })
    }

    render(){
        return(
        	<div>
          		<form onSubmit={this.handleSubmit}>
           			<button type="submit">Delete</button>
           		</form>
           </div>)
      }

}