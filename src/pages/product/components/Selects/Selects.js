import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

import s from './Selects.module.scss';

class Selects extends Component {
  state = {
    currentSize: 'Select size',
    currentQuantity: 1,
  }

  changeState(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    const { sizes, quantity } = this.props;
    const { currentSize, currentQuantity } = this.state;
    return (
      <div className={s.selects}>
        <UncontrolledButtonDropdown>
          <DropdownToggle
            caret color="default"
            className="dropdown-toggle-split mr-xs"
          >
            {currentSize === 'Select size'
              ? currentSize
              : `Size: ${currentSize}`}
          </DropdownToggle>
          <DropdownMenu>
            {sizes.map(item =>
              <DropdownItem key={item} onClick={() => this.changeState('currentSize', item)}>{item}</DropdownItem>,
            )}
          </DropdownMenu>
        </UncontrolledButtonDropdown>
        <UncontrolledButtonDropdown>
          <DropdownToggle
            caret color="default"
            className="dropdown-toggle-split mr-xs"
          >
            {currentQuantity}
          </DropdownToggle>
          <DropdownMenu>
            {quantity.map(item =>
              <DropdownItem key={item} onClick={() => this.changeState('currentQuantity', item)}>{item}</DropdownItem>,
            )}
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
    );
  }
}

Selects.propTypes = {
  sizes: PropTypes.any.isRequired,
  quantity: PropTypes.any.isRequired,
};

export default Selects;
