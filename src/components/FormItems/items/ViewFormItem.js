import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FastField } from 'formik';

class ViewFormItemNotFast extends Component {
  render() {
    const { label, name, form } = this.props;

    return (
      <div className="form-group">
        <label className="col-form-label" htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          readOnly
          className="form-control-plaintext"
          id={name}
          value={form.values[name]}
        />
      </div>
    );
  }
}

ViewFormItemNotFast.defaultProps = {};

ViewFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

class ViewFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <ViewFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default ViewFormItem;
