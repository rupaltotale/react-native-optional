/*
 * @providesModule Optional
 *
 */
import React from 'react';

import PropTypes from 'prop-types';

// This is a dummy element. 
// The only part that matter is the keyword Optional and the prop type test (and its value)
// The render function does have any effect. 
export default class Optional extends React.Component {

  static propTypes = {
    test: PropTypes.oneOfType([
      // these types can all evaluate to a boolean
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
    ...React.Component.propTypes
  };

  constructor(props) {
    if (!props.test) {
      super({});
    } else {
      super(props);
    }
    this.test = props.test;

  }

  render() {
    if (this.test) {
      return React.Children.only(this.props.children);
    }
    return null;
  }
}

