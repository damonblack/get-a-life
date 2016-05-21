import React from 'react';
import _ from 'lodash';
import css from './Choice.scss';

import BaseComponent from '../../../../libs/components/BaseComponent';

export default class Choice extends BaseComponent {

  constructor(props, context) {
    super(props, context);

    this.state = {
      availableOptions: this.props.options.toJS(),
      selectedOptions: []
    };

    _.bindAll(this, ['_select', '_deSelect', '_submitResponse']);
  }

  _select(e) {
    let choice = e.target.innerHTML
    if (this.state.selectedOptions.length < this.props.limit &&
      _.includes(this.state.availableOptions, choice)) {

      this.setState({
        availableOptions: _.without(this.state.availableOptions, choice),
        selectedOptions: _.concat(this.state.selectedOptions, choice)
      });
    }
  }

  _deSelect(e) {
    let choice = e.target.innerHTML
    if (_.includes(this.state.selectedOptions, choice)) {
      this.setState({
        selectedOptions: _.without(this.state.selectedOptions, choice),
        availableOptions: _.sortBy(_.concat(this.state.availableOptions, choice))
      });
    }

  }

  _submitResponse(e) {
    this.props.submitResponse(this.state.selectedOptions)
  }

  render() {
    return (
      <div>
        <div className={css.selected_skills}>
          { this.state.selectedOptions.map((choice) => {
            return (<span key={choice} className={css.chosen} onClick={this._deSelect}>{choice}</span>);
          })}
        </div>
        <hr />
        <button onClick={this._submitResponse}>Submit</button>
        <div>
          { this.state.availableOptions.map((choice) => {
            return (<div key={choice} onClick={this._select}>{choice}</div>);
          })}
        </div>
      </div>
    );
  }
}
