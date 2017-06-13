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
    this.state = { editable: false, editButton: 'EDIT', ...this.props.data };
    this.handleEvent = this.handleEvent.bind(this);
  }
  onEdit(index, state) {
    this.props.onEdit(index, state);
    const { editable } = this.state;
    if (editable) {
      this.setState({ editable: false, editButton: 'EDIT' });
    } else {
      this.setState({ editable: true, editButton: 'CONFIRM' });
    }
  }
  handleEvent(e) {
    this.setState({ name: e.target.value });
    console.log(e.type, this);
  }
  render() {
    const { onDelete, data, index } = this.props;
    const { editable } = this.state;
    console.log(data);
    return (
      <div>
        {Object.keys(data).map((key, itemIndex) => (
          <Editable
            key={itemIndex}
            editable={editable}
            onChange={(e) => { console.log('test', e); }}
          >
            {data[key]}
          </Editable>
        ))}
        <button onClick={() => this.onEdit(index, this.state)}>{this.state.editButton}</button> |
        <button onClick={() => onDelete(index)}>DELETE</button>
      </div>
    );
  }
}
