import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import ModalMenuOption from '../MobileMenuOption/MobileMenuOption';

import closeImg from '../../../../images/cancel.svg';
import backImg from '../../../../images/back.svg';

import s from './MobileModal.scss';

class MobileModal extends Component {
  state = {
    data: this.props.data,
    isPages: typeof this.props.data.data[0] !== 'string',
    isPageOpened: false,
    activePageId: 0,
    activeOptions: [],
  }

  toggleOptionActive(option) {
    const { activeOptions } = this.state;
    const index = activeOptions.indexOf(option);
    const newActiveOptions = [...activeOptions];

    if (index === -1) {
      newActiveOptions.push(option);
    } else {
      newActiveOptions.splice(index, 1);
    }

    this.setState({ activeOptions: newActiveOptions });
  }

  handleBackClick = () => {
    this.setState({ activePageId: null, isPageOpened: false });
  }

  handleCloseClick = () => {
    this.setState({ activePageId: null, isPageOpened: false });

    this.props.close();
  }

  openPage(index) {
    this.setState({ activePageId: index, isPageOpened: true });
  }

  render() {
    const { active } = this.props;
    const { activePageId, isPages, isPageOpened, data: { data, title }, activeOptions } = this.state;
    const openedPage = isPageOpened && data[activePageId];
    return (
      <div className={cx(s.mobileModal, { [s.mobileModalActive]: active })}>
        <div className={s.mobileModalTitle}>
          <button onClick={openedPage ? this.handleBackClick : this.handleCloseClick}>
            <img className={cx({ back: openedPage })} src={openedPage ? backImg : closeImg} alt="close" />
          </button>
          <h5>{openedPage ? openedPage.label : title}</h5>
        </div>
        <ul className={s.mobileModalBody}>
          {/* eslint-disable */}
          {isPages
            ? !isPageOpened
              ? data.map(({ label, id }, index) => <li onClick={() => this.openPage(index)} key={id}>{label}</li>)
              : openedPage.options.map((option, index) => <ModalMenuOption
                active={activeOptions.indexOf(option) !== -1}
                onClick={() => this.toggleOptionActive(option)}
                key={index}
              >
                {option}
              </ModalMenuOption>)
            : data.map((option, index) => <ModalMenuOption
              active={activeOptions.indexOf(option) !== -1}
              onClick={() => this.toggleOptionActive(option)}
              key={index}
            >
              {option}
            </ModalMenuOption>)}
          {/* eslint-enable */}
        </ul>
      </div >
    );
  }
}

MobileModal.propTypes = {
  active: PropTypes.bool,
  close: PropTypes.func.isRequired,
  data: PropTypes.any.isRequired,
};

MobileModal.defaultProps = {
  active: false,
};

export default withStyles(s)(MobileModal);
