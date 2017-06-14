import { connect } from 'react-redux';
import List from '../components/List';
import { contacts } from '../actions';

const mapStateToProps = state => ({
  items: state.data,
});

const mapDispatchToProps = dispatch => ({
  onEdit: (id, data) => {
    dispatch(contacts.update({ id, data }));
  },
  onDelete: (id) => {
    dispatch(contacts.remove(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
