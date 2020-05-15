import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImagesUploader from 'components/FormItems/uploaders/ImagesUploader';

class ImagesViewItem extends Component {
  valueAsArray = () => {
    const { value } = this.props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  render() {
    if (!this.valueAsArray().length) {
      return null;
    }

    return (
      <div className="form-group">
        <label className="col-form-label">
          {this.props.label}
        </label>
        <br />
        <ImagesUploader
          readonly
          value={this.valueAsArray()}
        />
      </div>
    );
  }
}

ImagesViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default ImagesViewItem;
