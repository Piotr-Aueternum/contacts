import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

export default class extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    pagination: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      range: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    const { range } = this.state;
    const { pagination, items } = this.props;

    if (range + pagination < items.length) {
      this.setState({ range: range + pagination });
    } else {
      this.setState({ range });
    }
  }
  decrement() {
    const { range } = this.state;
    const { pagination } = this.props;

    if (range - pagination >= 0) {
      this.setState({ range: range - pagination });
    } else {
      this.setState({ range });
    }
  }
  render() {
    const { onEdit, onDelete, items } = this.props;
    const { range } = this.state;
    function contactsList(array) {
      const list = [];
      for (let i = 0 + range; i < 10 + range; i += 1) {
        if (array[i]) {
          list.push(<li key={i}>
            <Contact index={array[i].id} data={array[i].data} onEdit={onEdit} onDelete={onDelete} />
          </li>);
        } else {
          break;
        }
      }
      return list;
    }
    return (
      <ul>
        {contactsList(items)}
        <button onClick={this.decrement}>Prev</button><button onClick={this.increment}>Next</button>
      </ul>
    );
  }
}
