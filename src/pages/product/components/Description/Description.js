import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Col, Row, Collapse } from 'reactstrap';

import s from './Description.scss';

class Description extends Component {
  state = {
    accordion: [false, false, false],
  };

  toggleAccordion(id) {
    const { accordion } = this.state;
    const newAccordion = [...accordion];

    newAccordion[id] = !newAccordion[id];

    this.setState({ accordion: newAccordion });
  }

  render() {
    const { description } = this.props;
    return (
      <div>
        <div className={s.productDescription}>
          {description.map(item => <div className={cx(item.extraClass, s.productDescriptionBlock)} key={item.id}>
            <h3>{item.title}</h3>
            {/* eslint-disable */}
            <div dangerouslySetInnerHTML={{ __html: item.body }} />
            {/* eslint-enable */}
          </div>)}
        </div>
        <Row className={cx(s.productDescription, s.productDescriptionMobile)}>
          <Col xs="12">
            {description.map((element, index) => (
              <div className="card panel" key={`accord-${index.toString()}`}>
                { /* eslint-disable */}
                <div
                  className={cx("card-header panel-header", { 'panel-first': index === 0 })} role="button"
                  onClick={() => { this.toggleAccordion(index); }}
                >
                  { /* eslint-enable */}
                  <div className="mb-0">
                    <a className="accordion-toggle" role="button">
                      {element.title}
                      <i className={`fa fa-angle-down fa-2x ${this.state.accordion[index] ? 'expanded' : ''}`} />
                    </a>
                  </div>
                </div>
                <Collapse className="panel-body" isOpen={this.state.accordion[index]}>
                  {/* eslint-disable */}
                  <div className="card-body" dangerouslySetInnerHTML={{ __html: element.body }} />
                  {/* eslint-enable */}
                </Collapse>
              </div>))}
          </Col>
        </Row>
      </div>
    );
  }
}

Description.propTypes = {
  description: PropTypes.any.isRequired,
};

export default withStyles(s)(Description);
