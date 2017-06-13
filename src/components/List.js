import React from 'react';
import PropTypes from 'prop-types';

const List = ({ data }) => (
  <ul>
    {data.map((item, key) => (
      <li key={key}>
        <div>{item.name}|{item.surname}|{item.email}</div>
        <div>{item.phone}|<button>EDIT</button>|<button>DELETE</button></div>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
