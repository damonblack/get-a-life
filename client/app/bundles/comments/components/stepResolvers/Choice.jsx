import React from 'react';
import _ from 'lodash';

import BaseComponent from '../../../../libs/components/BaseComponent';

export default class Choice extends BaseComponent {

  constructor(props, context) {
    super(props, context);

    this.state = {
      availableChoices: this.props.choices.toJS(),
      selectedChoices: []
    };

    _.bindAll(this, ['_select', '_deSelect']);
  }

  _select(e) {
    let choice = e.target.innerHTML
    if (this.state.selectedChoices.length < this.props.limit &&
      _.includes(this.state.availableChoices, choice)) {

      this.setState({
        availableChoices: _.without(this.state.availableChoices, choice),
        selectedChoices: _.concat(this.state.selectedChoices, choice)
      });
    }
  }

  _deSelect(e) {
    let choice = e.target.innerHTML
    if (_.includes(this.state.selectedChoices, choice)) {
      this.setState({
        selectedChoices: _.without(this.state.selectedChoices, choice),
        availableChoices: _.sortBy(_.concat(this.state.availableChoices, choice))
      });
    }

  }


  render() {
    return (
      <div>
        <div className="selected-skills">
          { this.state.selectedChoices.map((choice) => {
            return (<span key={choice} onClick={this._deSelect}>{choice}</span>);
          })}
        </div>
        <hr />
        <button>Submit</button>
        <div>
          { this.state.availableChoices.map((choice) => {
            return (<div key={choice} onClick={this._select}>{choice}</div>);
          })}
        </div>
      </div>
    );
  }
}
