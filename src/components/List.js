import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Contact from './Contact';

const Pagination = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #eee;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid #aaa;
`;

const PageNumber = styled.span`
  margin: 0 5px;
`;

const ContactItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 5px 0;
  border-bottom: 1px solid #aaa;
`;

const ContactList = styled.ul`
  margin: 0;
  padding: 0;
`;

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
      page: 0,
      items: this.props.items,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ items: nextProps.items });
  }
  increment() {
    const { range, page } = this.state;
    const { pagination, items } = this.props;

    if (range + pagination < items.length) {
      this.setState({ range: range + pagination, page: page + 1 });
    } else {
      this.setState({ range });
    }
  }
  decrement() {
    const { range, page } = this.state;
    const { pagination } = this.props;

    if (range - pagination >= 0) {
      this.setState({ range: range - pagination, page: page - 1 });
    } else {
      this.setState({ range });
    }
  }
  render() {
    const { onEdit, onDelete, pagination } = this.props;
    const { range, items } = this.state;
    function contactsList(array) {
      const list = [];
      for (let i = 0 + range; i < pagination + range; i += 1) {
        const item = array[i];
        if (item) {
          list.push(<ContactItem key={i}>
            <Contact index={item.id} data={item.data} onEdit={onEdit} onDelete={onDelete} />
          </ContactItem>);
        } else {
          break;
        }
      }
      return list;
    }
    return (
      <ContactList>
        {contactsList(items)}
        <Pagination>
          <button onClick={this.decrement}>Prev</button>
          <PageNumber>{this.state.page}</PageNumber>
          <button onClick={this.increment}>Next</button>
        </Pagination>
      </ContactList>
    );
  }
}
