import { connect } from 'react-redux';
import Form from '../components/Form';
import { contacts } from '../actions';

const mapStateToProps = state => ({
  data: state.inputs,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (data) => {
    dispatch(contacts.create(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
