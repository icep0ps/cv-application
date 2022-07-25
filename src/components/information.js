import React, { Component } from 'react';
import Preview from './Preview';
import Editing from './Editing';

export class Information extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: 'General Information',
      firstName: { value: '', label_title: 'First Name', id: 'firstName' },
      lastName: { value: '', label_title: 'Last Name', id: 'lastName' },
      email: { value: '', label_title: 'Email', id: 'email', type: 'email' },
      teleNumber: {
        value: '',
        label_title: 'Phone Number',
        id: 'teleNumber',
        type: 'telephone',
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
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.teleNumber,
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

export default Information;
