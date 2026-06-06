import { Component } from "react";
import "./ContactItem.css";

class ContactItem extends Component {
  render() {
    const { id, name, number, onDelete } = this.props;

    return (
      <>
        <li className="contact-item">
          <span className="contact-name">{name}</span>: <span className="contact-number">{number}</span>
          <button className="delete-button" type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      </>
    );
  }
}

export default ContactItem;
