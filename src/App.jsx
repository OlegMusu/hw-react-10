import { Component } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    console.log("trueMount");
    const data = localStorage.getItem("contact");
    if (data) {
      this.setState({
        contacts: JSON.parse(data),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    console.log("trueUpdate");
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem("contact", JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  hamdleAddContact = (newContact) => {
    const dublicateName = this.state.contacts.some(({ name }) => {
      return name.toLowerCase() === newContact.name.toLowerCase();
    });
    if (dublicateName) {
      alert(`${newContact.name} вже існує в контактах`);
      return;
    }

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleDeleteContact = (contactsId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactsId),
    }));
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    console.log("render");

    return (
      <div className="container">
        <ContactForm addContact={this.hamdleAddContact} />

        <Filter onChange={this.handleFilter} filter={this.state.filter} />

        <ContactList
          contacts={filteredContacts}
          onDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
