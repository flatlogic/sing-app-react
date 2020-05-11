import { Formik } from 'formik';
import React, { Component } from 'react';
import Loader from 'components/Loader';
import InputFormItem from '../../../components/FormItems/items/InputFormItem';
import Widget from 'components/Widget';

class UsersForm extends Component {
  handleSubmit = (values) => {
    const { ...data } = values || {};
    this.props.onSubmit(data);
  };

  title = () => {
    return 'Change Password';
  };

  passwordSchema = {
    currentPassword: { type: 'string', label: 'Current Password' },
    newPassword: { type: 'string', label: 'New Password' },
    confirmNewPassword: { type: 'string', label: 'Confirm new Password' },
  };

  renderForm() {
    const { saveLoading } = this.props;

    return (
      <Widget title={<h4>{this.title()}</h4>} collapse close>
        <Formik
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>

                <InputFormItem
                  name={'currentPassword'}
                  password
                  schema={this.passwordSchema}
                />

                <InputFormItem
                  name={'newPassword'}
                  schema={this.passwordSchema}
                  password
                />

                <InputFormItem
                  name={'confirmNewPassword'}
                  schema={this.passwordSchema}
                  password
                />

                <div className="form-buttons">
                  <button
                    className="btn btn-primary"
                    disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                  >
                    {' '}
                    Change Password
                  </button>{' '}

                  <button
                    className="btn btn-light"
                    type="button"
                    disabled={saveLoading}
                    onClick={() => this.props.onCancel()}
                  >
                    {' '}
                    Cancel
                  </button>
                </div>
              </form>
            );
          }}
        />
      </Widget>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Loader />;
    }

    if (isEditing && !record) {
      return <Loader />;
    }

    return this.renderForm();
  }
}

export default UsersForm;
