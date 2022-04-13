import React from 'react';
import logo from './logo.svg';
import './App.css';

interface IDataInterface {
  name: string;
  age: number
}

function App(props: IDataInterface) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {props.name}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

interface IEmployee {
  name: string;
  id: number;
  avatar: string;
  createdAt: string
}

type MyState = {
  employeeList: Array<IEmployee>
}

export default class EmployeeComponent<MyProps, MyState> extends React.Component {

  constructor() {
      super();
      this.state = {
          employeeList: []
      }

      Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login").then((response) => {
          this.setState({
              employeeList: response.data
          });
      })

      this.alertUser = this.alertUser.bind(this)
  }

  alertUser(event) {
      alert("Employee Clicked is: " + this.employeeList);
  }

  render() {
      debugger;
      return (
          <>
          <h1>List of Employees is Given Below: </h1>
              {this.state.employeeList.map((employee) => {
                  return (
                      <EmployeeDetailComponent employee={employee} alertUser={this.alertUser}></EmployeeDetailComponent>
                  )
              })}
          </>
      )
  }
}
