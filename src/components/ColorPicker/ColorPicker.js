import React, { Component } from 'react';
import ColorPicker from 'rc-color-picker';
import s from './ColorPicker.module.scss';

class CustomColorPicker extends Component {

  static defaultProps = {
    activeColor: "#000000",
  };

  render() {
    const { colors, activeColor, updateColor, customizationItem } = this.props;
    return (
      <div>
        <ul className={s.colorsList}>
          {colors.map(color => {
            return (
                <li
                  key={color}
                  className={`${s.colorBox} ${(activeColor === color) ? s.active : ""}`}
                  style={{ background: color }}
                  onClick={() => updateColor(color, customizationItem)}
                ></li>
             )
            }
          )}
          <ColorPicker className={s.colorBox} defaultColor="#333333" onChange={(e) => updateColor(e.color, customizationItem)}/>
        </ul>
      </div>
    )
  }
}

export default CustomColorPicker