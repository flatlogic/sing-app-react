import React from 'react';
import PropTypes from 'prop-types';

class AnimateNumber extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      id: `animate-${Math.floor(Math.random() * 255)}`,
    };
  }

  componentDidMount() {
    /* eslint-disable */
    const $ = require('jquery');
    const animate = require('jquery.animate-number');
    /* eslint-enable */
    const el = $(`#${this.state.id}`);
    el.animateNumber({
      number: el.text().replace(/ /gi, ''),
      numberStep: $.animateNumber.numberStepFactories.separator(' '),
      easing: 'easeInQuad',
    }, 1000);
  }

  render() {
    return (
      <span id={this.state.id}>{this.props.children}</span>
    );
  }
}

export default AnimateNumber;
