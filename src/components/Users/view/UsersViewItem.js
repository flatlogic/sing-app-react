import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectors from 'crud/modules/users/usersSelectors';

class UsersViewItem extends Component {
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

  displayableRecord = (record) => {
    if (this.props.hasPermissionToRead) {
      return (
        <div key={record.id}>
          <Link className="btn btn-link" to={`/users/${record.id}`}>
            {record['id']}
          </Link>
        </div>
      );
    }

    return (
      <div key={record.id}>
        {record['id']}
      </div>
    );
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
        {this.valueAsArray().map((value) =>
          this.displayableRecord(value),
        )}
      </div>
    );
  }
}

UsersViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

const select = (state) => ({
  hasPermissionToRead: selectors.selectPermissionToRead(
    state,
  ),
});

export default connect(select)(UsersViewItem);
