import { assign } from 'lodash';

import {
  FETCH_SERVICES_COMPLETE
} from './actions';

const initialState = {
  services: {
    items: [],
    nextToken: null
  },
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES_COMPLETE:
      return assign({}, state, {
        services: {
          items: action.services,
          nextToken: action.nextToken
        },
        error: null
      });
    default:
      return state;
  }
}
