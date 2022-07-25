import React, { Component } from 'react';

export class Editing extends Component {
  render() {
    const fields = this.props.getFields();
    return (
      <section className="content">
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id}>
              {field.label_title}
              <input
                id={field.id}
                type={field.type || 'text'}
                value={field.value}
                className={field.label_title}
                onChange={this.props.handleChange}
              />
            </label>
          </div>
        ))}
      </section>
    );
  }
}

export default Editing;
