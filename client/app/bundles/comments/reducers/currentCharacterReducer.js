/* eslint new-cap: 0 */

import Immutable from 'immutable';
import * as actionTypes from '../constants/currentCharacterConstants';

export const initialState = Immutable.fromJS({
  currentCharacterId: null,
});

export default function currentCharacterReducer(state = initialState, action = null) {
  const { type } = action;

  switch (type) {

    default: {
      return state;
    }
  }
}
