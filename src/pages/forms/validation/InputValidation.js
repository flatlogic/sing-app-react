import React from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';

const InputValidation = React.createClass({ // eslint-disable-line
  propTypes: {
    trigger: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
  },

  mixins: [Formsy.Mixin],

  getDefaultProps() {
    return {
      trigger: null,
      type: 'text',
      className: '',
      name: '',
      id: '',
    };
  },

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    const errorMessageObj = (this.isFormSubmitted() || this.props.trigger) ? this.getErrorMessage() : null;
    const required = (this.isFormSubmitted() && this.showRequired()) ?
      <span className={'help-block text-danger'}>This value is required.</span> : null;
    const errorMsg = [];
    if (errorMessageObj) {
      Object.keys(errorMessageObj).forEach((type) => {
        errorMsg.push(errorMessageObj[type]);
      });
    }
    const errorList = errorMsg.map((msg, index) =>
      <span key={`msg-err-${index.toString()}`} className={'help-block text-danger'}>{msg}</span>,
    );

    return (
      <div className={this.props.className}>
        <input
          type={this.props.type || 'text'}
          name={this.props.name}
          id={this.props.id}
          className={'form-control'}
          onBlur={this.changeValue}
        />
        {required}
        {errorList}
      </div>
    );
  },
});

Formsy.addValidationRule('isRange', (values, value, array) => (value >= array[0] && value <= array[1]));

export default InputValidation;
