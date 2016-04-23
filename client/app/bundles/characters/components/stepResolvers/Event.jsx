import React from 'react';
import _ from 'lodash';

import BaseComponent from '../../../../libs/components/BaseComponent';

export default class Event extends BaseComponent {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <span>A resolution frame for an Event</span>
      </div>
    );
  }
}
