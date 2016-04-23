/* eslint new-cap: 0 */

import Immutable from 'immutable';
import * as actionTypes from '../constants/rosterConstants';

export const initialState = Immutable.fromJS({
  roster: [],
});

export default function rosterReducer(state = initialState, action = null) {
  const { type, roster } = action;

  switch (type) {

    case actionTypes.CREATE_CHARACTER_SUCCESS: {
      return state.merge({
        roster: roster
      });
    }

    default: {
      return state;
    }
  }
}
