import React from 'react';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
      console.log("Component Did Catch Error");
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

    render() {
        return (
          <div>
            { !this.state.hasError && <EmployeeDetails /> }
            { this.state.hasError && <ErrorComponent /> }
          </div>
        )
    }
}

function ErrorComponent() {
  return <h2>Do not enter empty spaces in the User Name Input Box</h2>
}

export class EmployeeDetails extends React.Component {
  updateName(event) {
    if(event.target.value.indexOf(" ") > -1) {
      throw "Name Cannot Contain blank Spaces";
    }
  }
  render() {
    return (
      <div>
        Enter Name: <input type="text" placeholder="Enter Name" onChange={this.updateName} />
      </div>
    )
  }
}