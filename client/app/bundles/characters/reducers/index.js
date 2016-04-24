import rosterReducer from './rosterReducer';
import currentCharacterReducer from './currentCharacterReducer';
import { initialState as rosterState } from './rosterReducer';
import { initialState as currentCharacterState } from './currentCharacterReducer';

export default {
  rosterStore: rosterReducer,
  currentCharacterStore: currentCharacterReducer,
};

export const initialStates = {
  rosterState,
  currentCharacterState
};
