import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import check from '../../../../images/check.svg';

import s from './MobileMenuOption.module.scss';

const MobileMenuOption = (props) => {
  const { active, children, onClick } = props;
  return (
    /*eslint-disable*/
    <li
      className={cx('option', s.option, { [s.active]: active })}
      onClick={onClick}
    >
      {/*eslint-enable*/}
      <span>
        <img src={check} alt="check" />
      </span>
      {children}
    </li>
  );
};

MobileMenuOption.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

MobileMenuOption.defaultProps = {
  active: false,
};

export default MobileMenuOption;
