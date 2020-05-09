import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { verifyEmail } from '../../../actions/auth';
import { connect } from 'react-redux';

class Verify extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const token = params.get('token');
        if (token) {
            this.props.dispatch(verifyEmail(token));
        }
    }

    render() {
      return (
        <></>
      );
    }
}

export default withRouter(connect()(Verify));

