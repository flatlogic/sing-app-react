import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './GridFilter.scss';

import grid2 from '../../../../images/grid/2grid.svg';
import grid3 from '../../../../images/grid/3grid.svg';
import grid4 from '../../../../images/grid/4grid.svg';

const GridFilter = (props) => {
  const { onChange, dispatch } = props;
  const buttons = [
    {
      img: grid4,
      alt: '4 columns',
      item: 'Four',
      id: 0,
    },
    {
      img: grid3,
      alt: '3 columns',
      item: 'Three',
      id: 1,
    },
    {
      img: grid2,
      alt: '2 columns',
      item: 'Two',
      id: 2,
    },
  ];
  return (
    <div className={s.gridFilter}>
      {buttons.map(({ img, alt, item, id }) =>
        <button className={s.gridButton} key={id} onClick={() => dispatch(onChange(item))}>
          <img src={img} alt={alt} />
        </button>,
      )}
    </div>
  );
};

GridFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default withStyles(s)(GridFilter);
