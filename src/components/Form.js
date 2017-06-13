import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ data, onSubmit }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit(data);
    }}
  >
    <input placeholder="name" />
    <input placeholder="surname" />
    <input placeholder="email" />
    <input placeholder="phone" />
    <button>Add data</button>
  </form>
);

Form.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
