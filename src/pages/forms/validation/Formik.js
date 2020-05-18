import { Formik } from 'formik';
import React, { Component } from 'react';
import Loader from 'components/Loader';
import InputFormItem from 'components/FormItems/items/InputFormItem';
import SwitchFormItem from 'components/FormItems/items/SwitchFormItem';
import RadioFormItem from 'components/FormItems/items/RadioFormItem';
import ImagesFormItem from 'components/FormItems/items/ImagesFormItem';
import usersFields from 'components/Users/usersFields';
import IniValues from 'components/FormItems/iniValues';
import FormValidations from 'components/FormItems/formValidations';

class UsersForm extends Component {
  iniValues = () => {
    return IniValues(usersFields, this.props.record || {});
  }

  formValidations = () => {
    return FormValidations(usersFields, this.props.record || {});
  }

  handleSubmit = () => {
    return null;
  };

  passwordSchema = {
    currentPassword: { type: 'string', label: 'Current Password' },
    newPassword: { type: 'string', label: 'New Password' },
    confirmNewPassword: { type: 'string', label: 'Confirm new Password' },
  };

  renderForm() {
    const { saveLoading } = this.props;

    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={this.iniValues()}
        validationSchema={this.formValidations()}
        render={(form) => {
          return (
            <form onSubmit={form.handleSubmit}>

              <InputFormItem
                name={'firstName'}
                schema={usersFields}
              />

              <InputFormItem
                name={'lastName'}
                schema={usersFields}
              />

              <InputFormItem
                name={'phoneNumber'}
                schema={usersFields}
              />

              <InputFormItem
                name={'email'}
                schema={usersFields}
              />

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

              <>
                <RadioFormItem
                  name={'role'}
                  schema={usersFields}
                />

                <SwitchFormItem
                  name={'disabled'}
                  schema={usersFields}
                />
              </>

              <ImagesFormItem
                name={'avatar'}
                schema={usersFields}
                path={'users/avatar'}
                fileProps={{
                  size: undefined,
                  formats: undefined,
                }}
                max={undefined}
              />

              <div className="form-buttons">
                <button
                  className="btn btn-primary"
                  disabled={saveLoading}
                  type="button"
                  onClick={form.handleSubmit}
                >
                  Save
                </button>{' '}{' '}

                <button
                  className="btn btn-light"
                  type="button"
                  disabled={saveLoading}
                  onClick={form.handleReset}
                >
                  Reset
                </button>{' '}{' '}
              </div>
            </form>
          );
        }}
      />
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
