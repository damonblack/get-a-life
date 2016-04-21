import React from 'react';
import _ from 'lodash';

import BaseComponent from '../../../libs/components/BaseComponent';

export default class AttributesRow extends BaseComponent {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name,
      modified: false
    };

    _.bindAll(this, [
      '_updateName',
      '_onKeyDown',
      '_saveName'
    ]);
  }

  _updateName(event) {
    this.setState({
      name: event.target.value,
      modified: true
    })
  }

  _onKeyDown(event) {
    if (event.keyCode === 13) {
      this._saveName(event);
    }
  }

  _saveName(event) {
    if (this.state.modified) {
      this.setState({modified: false});
      this.props.updateName({
        characterSheet: {
          name: event.target.value
        }
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type = "text"
          placeholder = "Enter a name"
          value = {this.state.name}
          onChange = {this._updateName}
          onBlur = {this._saveName}
          onKeyDown = {this._onKeyDown}
        />
      </div>
    );
  }
}

