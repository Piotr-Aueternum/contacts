import * as c from '../constants/actions';
import * as contacts from './contacts';

export const fetchStats = payload => ({
  type: c.FETCH_STATS,
  payload,
});

export { contacts };

