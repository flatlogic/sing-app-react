import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import { Button, Tooltip } from 'reactstrap';

import s from './TooltipItem.scss';

class TooltipItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    item: PropTypes.shape({
      text: PropTypes.string.isRequired,
      placement: PropTypes.string,
    }),
  };

  static defaultProps = {
    item: { placement: '' },
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color="default" id={`Tooltip-${this.props.id}`}>
          {this.props.item.text}
        </Button>
        <Tooltip
          placement={this.props.item.placement} isOpen={this.state.tooltipOpen}
          target={`Tooltip-${this.props.id}`} toggle={this.toggle}
        >
          Tooltip Content!
        </Tooltip>
      </span>
    );
  }
}

export default withStyles(s)(TooltipItem);
