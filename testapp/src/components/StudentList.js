import React from "react";
import axios from 'axios';
import StudentAdd from './StudentAdd';
import StudentDelete from './StudentDelete';

export default class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          students:[]
        };
      }
    // when compoent is loaded, make calls
      componentDidMount() {
          this.getStudents()
      }
      
      getStudents = () =>{
        axios.get(`http://localhost:8080/students`)
          .then(res => {
            console.log(res);
            const students = res.data;
            this.setState({ students });
          })
      }
    
      render() {
        return (
            <>
        <StudentAdd getStudents={this.getStudents} />
          <ul>
            {
              this.state.students
                .map(student =>
                <>
                  <li key={student.id}>{student.name} | {student.email} | <StudentDelete getStudents={this.getStudents} id={student.id} /> </li>
                  
                </>
                )
            }
          </ul>
          </>
        )
      }
  }