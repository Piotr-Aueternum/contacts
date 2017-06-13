import * as c from '../constants/actions';


const initialState = {
  data: [{
    _id: 1,
    name: 'Jean',
    surname: 'Paul',
    email: 'jean@paul.com',
    phone: '123456789',
  }, {
    _id: 2,
    name: 'Alexandr',
    surname: 'Pożarow',
    email: 'alexandr.pozarov@nicecompany.ru',
    phone: '987654321',
  }],
};


export default function data(state = initialState, action) {
  switch (action.type) {
    case c.FETCH_DATA: {
      return { ...state, ...action.payload };
    }
    case c.CREATE_CONTACT: {
      return { ...state };
    }
    case c.REMOVE_CONTACT: {
      return { ...state };
    }
    case c.UPDATE_CONTACT: {
      return { ...state };
    }
    default:
      return state;
  }
}
