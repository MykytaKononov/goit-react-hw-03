import React from "react";

export default function Contact({ contact, onDelete }) {
  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}
