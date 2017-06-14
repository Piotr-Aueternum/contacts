import * as c from '../constants/actions';
import * as util from '../util';
import { inputs, data as initialData } from '../initialState';

const initialState = {
  inputs,
  data: initialData,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case c.CREATE_CONTACT: {
      const contact = {};
      const data = {};
      const array = [...state.data];
      let lastIndex = 0;
      if (array.length > 0) {
        array.sort((a, b) => a.id - b.id);
        lastIndex = array[array.length - 1].id;
      }
      action.payload.forEach((item) => {
        Object.assign(contact, { id: lastIndex + 1 });
        Object.assign(data, { [item.name]: item.value });
      });
      Object.assign(contact, { data });
      return { ...state, data: [...state.data, contact] };
    }
    case c.REMOVE_CONTACT: {
      const array = util.removeElement(state.data, action.payload);
      return { ...state, data: array };
    }
    case c.UPDATE_CONTACT: {
      const { data, id } = action.payload;
      const array = util.updateElement(state.data, id, data);
      return { ...state, data: array };
    }
    default:
      return state;
  }
}
