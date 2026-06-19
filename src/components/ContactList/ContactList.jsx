import { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css";

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <>
        <h2 className="contact-list-title">Contacts</h2>
        {contacts.length === 0 ? (
          <p>there are no cards</p>
        ) : (
          <ul className="contact-list">
            {contacts.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                onDelete={onDelete}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ContactList;
