/* eslint new-cap: 0 */

import Immutable from 'immutable';
import * as actionTypes from '../constants/charactersConstants';

export const initialState = Immutable.fromJS({
  currentCharacterId: null,
});

export default function currentCharacterReducer(state = initialState, action = null) {
  const { type, characterSheet } = action;

  switch (type) {
    case actionTypes.PROCESS_TURN_SUCCESS: {
      return state.merge({
        characterSheet: characterSheet
      });
    }

    default: {
      return state;
    }
  }
}
