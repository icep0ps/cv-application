import React, { Component } from 'react';
import Preview from './Preview';
import Editing from './Editing';

export class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: 'Education',
      schoolName: { value: '', label_title: 'School name', id: 'schoolName' },
      Degree: { value: '', label_title: 'Degree Stuided', id: 'Degree' },
      startDate: {
        value: '',
        label_title: 'Start Date',
        id: 'startDate',
        type: 'date',
      },
      graduation: {
        value: '',
        label_title: 'Graduation',
        id: 'graduation',
        type: 'date',
      },
      EnablePreview: false,
    };

    this.getFields = this.getFields.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: {
        value: event.target.value,
        label_title: event.target.className,
        id: event.target.id,
      },
    });
  }

  handleState(event) {
    event.preventDefault();
    this.setState({
      EnablePreview: !this.state.EnablePreview,
    });
  }

  getFields() {
    const fields = [
      this.state.schoolName,
      this.state.Degree,
      this.state.startDate,
      this.state.graduation,
    ];
    return fields;
  }

  render() {
    let ComponentToBeRendered;
    if (this.state.EnablePreview) {
      ComponentToBeRendered = (
        <Preview
          getFields={this.getFields}
          handleState={this.handleState}
          properties={this.state}
        />
      );
    } else {
      ComponentToBeRendered = (
        <Editing getFields={this.getFields} handleChange={this.handleChange} />
      );
    }
    return (
      <fieldset>
        <h3>{this.state.section}</h3>
        {ComponentToBeRendered}
        <button onClick={this.handleState}>Save</button>
      </fieldset>
    );
  }
}

export default Education;
