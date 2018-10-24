import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Table, Button } from 'reactstrap';

import s from './TableContainer.module.scss';

const states = {
  sent: 'info',
  pending: 'success',
  declined: 'danger',
};

class TableContainer extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        product: PropTypes.string,
        price: PropTypes.string,
        date: PropTypes.string,
        city: PropTypes.string,
        status: PropTypes.string,
      }),
    ).isRequired,
  }

  render() {
    const { data } = this.props;
    const keys = Object.keys(data[0]).map(i => i.toUpperCase());
    keys.shift(); // delete "id" key
    return (
      <Table className={cx('mb-0', s.table)} borderless responsive>
        <thead>
          <tr className="text-muted">
            {keys.map((key, index) => (
              index === 0
              ? <th key={key} scope="col"><span className="pl-2">{key}</span></th>
              : <th key={key} scope="col">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-dark">
          {
            data.map(({ name, email, product, price, date, city, status }) => (
              <tr key={name}>
                <td className="pl-3 fw-normal">{name}</td>
                <td>{email}</td>
                <td>{product}</td>
                <td>{price}</td>
                <td>{date}</td>
                <td>{city}</td>
                <td>
                  <Button
                    color={states[status.toLowerCase()]}
                    size="xs"
                    className="px-2"
                  >
                    {status}
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
}

export default TableContainer;
