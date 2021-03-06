import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as charactersActionCreators from '../actions/charactersActionCreators';
import AttributesRow from '../components/AttributesRow'
import NameEditor from '../components/NameEditor';
import Journal from '../components/Journal';
import Immutable from 'immutable';

import BaseComponent from 'libs/components/BaseComponent';

function loadCurrentCharacter(state, ownProps) {
  let charId = ownProps.params.id;
  return {
    character: state.rosterStore.get('roster')
      .find((char) => {
        return char.get('id') == charId;
      })
  };
}

let life = Immutable.fromJS({
  id: 0,
  currentStep: {
    stepId: '#CulturalSkillChoice',
    title: 'Choose your cultural skills.',
    intro: 'Based on your education level of 11 you can choose 4 skills from the following:',
    stepType: 'choice',
    limit: 4,
    options: [
      'Admin 0',
      'Animals 0',
      'Art 0',
      'Athletics 0',
      'Carouse 0',
      'Drive 0',
      'Science 0',
      'Seafarer 0',
      'Streetwise 0',
      'Survival 0',
      'Vacc Suit 0',
      'Electronics 0',
      'Flyer 0',
      'Language 0',
      'Mechanic 0',
      'Medic 0',
      'Profession 0',
    ],
  }
});

class Play extends BaseComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
  };

  render() {
    console.log("RENDERING PLAY");
    const { dispatch, character } = this.props;
    const actions = bindActionCreators(charactersActionCreators, dispatch);

    const characterSheet = character.get('characterSheet');

    return (
      <div>
        <NameEditor name={characterSheet.get('name')} updateName={actions.updateCharacter.bind(null, character.get('id'))}/>
        <AttributesRow attrs={characterSheet.get('attributes')} />
        <AttributesRow attrs={characterSheet.get('skills')} />
        <Journal life={life} submitResponse={actions.submitResponse.bind(null, character.get('id'))}/>
      </div>
    );
  }
}

export default connect(loadCurrentCharacter)(Play);
