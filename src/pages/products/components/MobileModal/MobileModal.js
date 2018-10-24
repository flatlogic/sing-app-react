import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import ModalMenuOption from '../MobileMenuOption/MobileMenuOption';

import closeImg from '../../../../images/cancel.svg';
import backImg from '../../../../images/back.svg';

import s from './MobileModal.module.scss';

class MobileModal extends Component {
  state = {
    data: this.props.data,
    isPages: typeof this.props.data.data[0] !== 'string',
    isPageOpened: false,
    activePageId: 0,
    activeOptions: {},
  }

  toggleOptionActive(field, value) {
    const newActiveOption = {
      ...this.state.activeOptions,
      [field]: value,
    };

    this.setState({ activeOptions: newActiveOption });
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
    const renderedTitle = openedPage ? openedPage.label : title;
    return (
      <div className={cx(s.mobileModal, { [s.mobileModalActive]: active })}>
        <div className={s.mobileModalTitle}>
          <button onClick={openedPage ? this.handleBackClick : this.handleCloseClick}>
            <img className={cx({ back: openedPage })} src={openedPage ? backImg : closeImg} alt="close" />
          </button>
          <h5>{renderedTitle}</h5>
        </div>
        <ul className={s.mobileModalBody}>
          {/* eslint-disable */}
          {isPages
            ? !isPageOpened
              ? data.map(({ label, id }, index) => <li onClick={() => this.openPage(index)} key={id}>{label}</li>)
              : openedPage.options.map((option, index) => <ModalMenuOption
                active={activeOptions[renderedTitle] === index}
                onClick={() => this.toggleOptionActive(renderedTitle, index)}
                key={index}
              >
                {option}
              </ModalMenuOption>)
            : data.map((option, index) => <ModalMenuOption
              active={activeOptions[renderedTitle] === index}
              onClick={() => this.toggleOptionActive(renderedTitle, index)}
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

export default MobileModal;
