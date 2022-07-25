import React, { Component } from 'react';
import Education from './components/education';
import Experience from './components/experience';
import Information from './components/information';
import './styles/App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      degree: '',
      degreeDate: '',

      companyName: '',
      position: '',
      tasks: '',
      jobStartDate: '',
      jobEndDate: '',

      Editing: true,
    };
  }

  render() {
    return (
      <div className="App">
        <form>
          <Information />
          <Education />
          <Experience />
        </form>
      </div>
    );
  }
}

export default App;
