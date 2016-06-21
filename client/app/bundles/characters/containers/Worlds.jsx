import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CharacterSheet from '../components/CharacterSheet';
import { bindActionCreators } from 'redux';
import * as rosterActionCreators from '../actions/charactersActionCreators';

import BaseComponent from '../../../libs/components/BaseComponent';

function loadWorlds(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { data: state.rosterStore };
}

class Worlds extends BaseComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    location: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
  };

  render() {
    console.log('RENDERING WORLDS');
    const { dispatch, data } = this.props;
    const actions = bindActionCreators(rosterActionCreators, dispatch);

    return (
      <div>
        <select value='worldId'>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <Roster roster={data.get('roster')}></Roster>
      </div>
    );
  }
}

export default connect(loadWorlds)(Worlds);
