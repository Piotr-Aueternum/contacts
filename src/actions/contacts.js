import * as c from '../constants/actions';

export const create = payload => ({
  type: c.CREATE_CONTACT,
  payload,
});

export const update = payload => ({
  type: c.UPDATE_CONTACT,
  payload,
});

export const remove = payload => ({
  type: c.REMOVE_CONTACT,
  payload,
});
