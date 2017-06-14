import React from 'react';
import PropTypes from 'prop-types';
import Editable from './Editable';

export default class extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    data: PropTypes.shape({
      name: PropTypes.string,
      surname: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = { editable: false, editButton: 'EDIT', data: this.props.data, confirmDelete: false, deleteButton: 'DELETE' };
    this.handleEvent = this.handleEvent.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });
  }
  onEdit(index, state) {
    const { editable } = this.state;
    if (editable) {
      this.setState({ editable: false, editButton: 'EDIT' });
      this.props.onEdit(index, state.data);
    } else {
      this.setState({ editable: true, editButton: 'CONFIRM' });
    }
  }
  onDelete(index) {
    const { confirmDelete } = this.state;
    if (confirmDelete) {
      this.setState({ confirmDelete: false, deleteButton: 'DELETE' });
      this.props.onDelete(index);
    } else {
      this.setState({ confirmDelete: true, deleteButton: 'CONFIRM' });
    }
    setTimeout(() => this.setState({ confirmDelete: false, deleteButton: 'DELETE' }), 5000);
  }
  handleEvent(e, key) {
    this.setState({ data: { ...this.state.data, [key]: e.target.innerHTML } });
  }
  render() {
    const { data, index } = this.props;
    const { editable, editButton, deleteButton } = this.state;
    return (
      <div>
        {Object.keys(data).map((key, itemIndex) => (
          <Editable
            key={itemIndex}
            editable={editable}
            onChange={e => this.handleEvent(e, key)}
          >
            {data[key]}
          </Editable>
        ))}
        <button onClick={() => this.onEdit(index, this.state)}>{editButton}</button>
        <button onClick={() => this.onDelete(index)}>{deleteButton}</button>
      </div>
    );
  }
}
