import React from 'react';
import axios from 'axios';


export default class StudentAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email:''
        };
      }

  handleSubmit = event => {
    event.preventDefault();

    axios.post(`http://localhost:8080/students`, 
    {
        name: this.state.name,
        email: this.state.email
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.getStudents();
      })
      .then(
        this.props.getStudents()
        )
      .finally(
        this.setState({ name : ''}),
        this.setState({ email : ''})
      )
      
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Student Name:
            <input type="text" name="name" value={ this.state.name } onChange={e => this.setState({ name : e.target.value})} />
          </label>
          <label>
            Student Email:
            <input type="text" name="email" value={ this.state.email } onChange={e => this.setState({ email : e.target.value})} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}