import React, { Component } from 'react';

export class Preview extends Component {
  render() {
    const fields = this.props.getFields;
    return (
      <div>
        <legend>{this.props.properties.section}</legend>
        {fields().map((field) => (
          <p>
            {field.label_title}: {field.value}
          </p>
        ))}
      </div>
    );
  }
}

export default Preview;
