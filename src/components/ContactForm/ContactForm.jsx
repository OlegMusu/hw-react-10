import { Component } from "react";
import { nanoid } from "nanoid";

import "./ContactForm.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      // name: event.target.value
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addContact(newContact);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit} className="contact-form">
          <label className="contact-form-label">
            <p>Name:</p>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              name="name"
              className="contact-form-input"
            />
          </label>
          <label className="contact-form-label">
            <p>Number:</p>
            <input
              onChange={this.handleChange}
              value={this.state.number}
              type="tel"
              name="number"
              className="contact-form-input"
            />
          </label>
          <button type="submit" className="contact-form-button">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
