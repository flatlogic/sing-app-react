import React, { Component } from 'react';
import ColorPicker from 'rc-color-picker';
import PropTypes from 'prop-types';
import s from './ColorPicker.module.scss';

class CustomColorPicker extends Component {

  render() {
    const { colors, activeColor, updateColor, customizationItem } = this.props;
    if(customizationItem === 'navbar') {
      return (
        <div>
          <ul className={s.colorsList}>
            {Object.entries(colors).map(color => {
              return (
                  <li
                    key={color[1]}
                    className={`${s.colorBox} ${(activeColor === color[1]) ? s.active : ""}`}
                    style={{ background: color[1] }}
                    onClick={() => updateColor(color[1])}
                  ></li>
              )
              }
            )}
            <ColorPicker className={s.colorBox} defaultColor="#333333" onChange={(e) => updateColor(e.color, customizationItem)}/>
          </ul>
        </div>
      )      
    } else {
      return (
        <div>
          <ul className={s.colorsList}>
            {Object.entries(colors).map(color => {
              return (
                  <li
                    key={color[1]}
                    className={`${s.colorBox} ${(activeColor === color[0]) ? s.active : ""}`}
                    style={{ background: color[1] }}
                    onClick={() => updateColor(color[0])}
                  ></li>
              )
              }
            )}
          </ul>
        </div>
      ) 
    }

  }
}

CustomColorPicker.propTypes = {
  colors: PropTypes.object,
  activeColor: PropTypes.string,
  updateColor: PropTypes.func,
  customizationItem: PropTypes.string,
};

export default CustomColorPicker