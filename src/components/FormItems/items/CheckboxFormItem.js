import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'components/FormItems/formErrors';
import { FastField } from 'formik';

export class CheckboxFormItemNotFast extends Component {
  render() {
    const {
      name,
      form,
      hint,
      size,
      inputProps,
      errorMessage,
      required,
    } = this.props;

    const { label } = this.props.schema[name];

    const sizeLabelClassName =
      {
        small: 'col-form-label-sm',
        large: 'col-form-label-lg',
      }[size] || '';

    return (
      <div className="form-group">
        {!!label && (
          <label
            className={`col-form-label ${
              required ? 'required' : null
            } ${sizeLabelClassName}`}
            htmlFor={name}
          >
            {label}
          </label>
        )}

        <div>
          <input
            type="checkbox"
            id={name}
            name={name}
            onChange={(event) => {
              form.setFieldValue(
                name,
                !!event.target.checked,
              );
              form.setFieldTouched(name);
            }}
            checked={!!form.values[name]}
            {...inputProps}
          />
        </div>

        <div className="invalid-feedback">
          {FormErrors.displayableError(
            form,
            name,
            errorMessage,
          )}
        </div>

        {!!hint && (
          <small className="form-text text-muted">
            {hint}
          </small>
        )}
      </div>
    );
  }
}

CheckboxFormItemNotFast.defaultProps = {};

CheckboxFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  hint: PropTypes.string,
  size: PropTypes.string,
  errorMessage: PropTypes.string,
  inputProps: PropTypes.object,
};

class CheckboxFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <CheckboxFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default CheckboxFormItem;
