import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TextViewItem extends Component {
  render() {
    if (
      !this.props.value &&
      this.props.value !== 0 &&
      this.props.value !== false
    ) {
      return null;
    }

    const value = `${
      this.props.prefix ? `${this.props.prefix} ` : ''
    }${this.props.value}`;

    return (
      <div className="form-group">
        <label className="col-form-label">
          {this.props.label}
        </label>

        <input
          type="text"
          readOnly
          className="form-control-plaintext"
          value={value}
        />
      </div>
    );
  }
}

TextViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  prefix: PropTypes.string,
};

export default TextViewItem;
