import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import BaseComponent from 'libs/components/BaseComponent';

import './Layout.scss';

export default class Layout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <section>
        <header>
          <ul>
            <li>What?</li>
          </ul>
        </header>
        {this.props.children}
      </section>
    );
  }
}
