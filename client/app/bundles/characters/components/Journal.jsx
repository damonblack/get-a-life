import React from 'react';
import _ from 'lodash';
import CurrentStep from './CurrentStep';

import BaseComponent from '../../../libs/components/BaseComponent';

export default class AttributesRow extends BaseComponent {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <CurrentStep step={this.props.life.get('currentStep')} submitResponse={this.props.submitResponse}/>
      </div>
    );
  }
}
