import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import $ from 'jquery';

import Widget from '../../components/Widget';
import { fetchPosts } from '../../actions/posts';

import s from './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alert1Visible: true,
      alert2Visible: true,
      alert3Visible: true,
      alert4Visible: true,
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="mb-lg">Dashboard</h1>
        <Row>
          <Col sm={6}>
            <Widget title={
              <div>Example Widget</div>
            }>
              <div>
                <p>You are looking at a completely new version of Sing App built
                with brand new <strong>Angular <em>2.0</em> Final Release</strong></p>
                <p>Made by <a href="http://flatlogic.com" target="_blank">Flatlogic</a>.</p></div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.posts.isFetching,
    posts: state.posts.posts
  };
}

export default connect(mapStateToProps)(withStyles(s)(Dashboard));
