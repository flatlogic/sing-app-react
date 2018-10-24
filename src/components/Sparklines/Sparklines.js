import React from 'react';

import $ from 'jquery';
import PropTypes from 'prop-types';

/* eslint-disable */
import 'imports-loader?jQuery=jquery,this=>window!jquery-sparkline';
/* eslint-enable */

class Sparklines extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number),
    ),
    options: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
        }),
      ),
      PropTypes.shape({
        type: PropTypes.string.isRequired,
      }),
    ]),
  };

  static defaultProps = {
    data: [],
    options: {},
  };

  componentDidMount() {
    this.initSparkline();
  }

  initSparkline() {
    const $el = $(this.sparklineRef);

    const model = $.type(this.data) === 'string' ?
      this.props.data.replace(/(^,)|(,$)/g, '')
      : this.props.data;
    const options = this.props.options;

    if ($.type(model) === 'array' && $.type(options) === 'array') {
      options.forEach((singleOptions, i) => {
        if (i === 0) {
          $el.sparkline(model[i], singleOptions);
        } else { // set composite for next calls
          $el.sparkline(model[i], $.extend({ composite: true }, singleOptions));
        }
      });
    } else {
      const data = $.type(model) === 'array' ? model : model.split(',');
      $el.sparkline(data, options);
    }
  }

  render() {
    return (
      <div
        className="sparkline" ref={(r) => {
          this.sparklineRef = r;
        }}
      />
    );
  }
}

export default Sparklines;
