import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import AttributesRow from './AttributesRow.jsx';

import BaseComponent from '../../../libs/components/BaseComponent';

export default class CharacterSheet extends BaseComponent {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let characterSheet = this.props.character.get('characterSheet');

    return (
      <div>
        <h2>{characterSheet.get('name')}</h2>
        <AttributesRow attrs={ characterSheet.get('attributes')}/>
        <AttributesRow attrs={ characterSheet.get('skills')}/>
        <Link to={`/characters/${this.props.character.get('id')}`}>Play</Link>
      </div>
    );
  }
}
