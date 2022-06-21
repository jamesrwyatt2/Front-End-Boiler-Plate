import React from "react";
import axios from 'axios';
import StudentAdd from './StudentAdd';
import StudentDelete from './StudentDelete';

function makeGetUserCall(){
  
}

export default class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          students:[]
        };
      }



    // when compoent is loaded, make calls
      componentDidMount() {
        
        const sendToken =  "Bearer " + JSON.parse(this.props.token);
        fetch(`http://localhost:8080/users/current`,{
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          'Authorization': sendToken
          },
          })
          .then(res =>  res.json())
          .then(data => 
            this.setState({ students :data })
          )
            console.log(this.state.students)

      }
      
      getStudents = async () =>{
        console.log("getting Token for currentUser: " + this.props.token)
        const sendToken =  "Bearer " + JSON.parse(this.props.token);

        const userData = await makeGetUserCall(sendToken);
        console.log(userData)

        this.setState({ students : userData });

      }
    
      render() {
        return (
            <>
            <h1>User Management </h1>
        <StudentAdd getStudents={this.getStudents} />
            {console.log(this.state.students)}
          <ul>
          <li key={this.state.students.id}> {this.state.students.fullName} | {this.state.students.username} | <StudentDelete getStudents={this.getStudents} id={this.state.students.id} /> </li>
          </ul>
          </>
        )
      }
  }