import React from 'react';
import _ from 'lodash';

import BaseComponent from '../../../libs/components/BaseComponent';

export default class AttributesRow extends BaseComponent {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let attrs = this.props.attrs ? this.props.attrs.toJS() : null;

    return (
      <div>
        { _.toPairs(attrs).map(function(attr) {
          return (
            <span className='attribute' key={attr[0]}>
              {`${attr[0]}: ${attr[1]} `}
            </span>
          );
        })}
      </div>
    );
  }
}
