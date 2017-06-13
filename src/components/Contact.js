import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact, onEdit, onDelete }) => {
  const { name, surname, email, phone } = contact;
  return (
    <div>
      <div>
        {name}|{surname}|{email}
      </div>
      <div>{phone}|
        <button
          onClick={() => onEdit()}
        >EDIT</button>|
        <button
          onClick={() => onDelete()}
        >DELETE</button></div>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
