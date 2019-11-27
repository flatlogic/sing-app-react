import React, { Component } from 'react';
import s from './ColorPicker.module.scss';

class CustomColorPicker extends Component {

  static defaultProps = {
    activeColor: "#000000",
  };

  render() {
    const { colors, activeColor } = this.props;
    return (
      <div>
        <ul className={s.colorsList}>
          {colors.map(color => {
            return (
                <li
                  key={color}
                  className={`${s.colorBox} ${(activeColor === color) ? s.active : ""}`}
                  style={{ background: color }}
                ></li>
             )
            }
          )}
        </ul>
      </div>
    )
  }
}

export default CustomColorPicker