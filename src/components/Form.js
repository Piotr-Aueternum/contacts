import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../style-utils';

const Input = styled.input`
`;

const Form = styled.form`
  ${media.tablet`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    ${Input} {
      width: calc(50% - 2px);
      margin: 1px;
    }
  `}
`;

export default class extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.data);
  }
  onChange(e) {
    const { value, name } = e.target;
    this.state.data.map((item) => {
      if (item.name === name) {
        item.value = value;
      }
      return '';
    });
    this.setState({ ...this.state.data, [name]: value });
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {this.state.data.map((item, key) => (
          <Input key={key} {...item} onChange={e => this.onChange(e, key)} />
        ))}
        <button>Add data</button>
      </Form>
    );
  }
}

