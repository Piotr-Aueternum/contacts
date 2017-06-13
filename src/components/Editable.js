import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static propTypes = {
    editable: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      children: this.props.children,
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange(e);
  }
  render() {
    const { editable } = this.props;
    const { children } = this.state;
    return (
      <div
        contentEditable={editable}
        onInput={this.onChange}
        onPaste={this.onChange}
      >
        {children}
      </div>
    );
  }
}
