import React, { Component } from 'react';
import UsersView from 'components/Users/view/UsersView';
import actions from 'actions/usersFormActions';
import { connect } from 'react-redux';

class UsersPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
          <UsersView
            loading={this.props.loading}
            record={this.props.record}
          />
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    loading: store.users.form.loading,
    record: store.users.form.record,
  };
}

export default connect(mapStateToProps)(UsersPage);
