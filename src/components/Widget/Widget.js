import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Widget.scss';

class Widget extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    body: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    close: PropTypes.bool,
    collapse: PropTypes.bool,
    refresh: PropTypes.bool,

  };

  static defaultProps = {
    title: null,
    body: null,
    className: '',
    children: [],
    close: false,
    collapse: false,
    refresh: false
  };

  render() {
    return (
      <section className={[s.widget, this.props.className].join(' ')}>
        {
          this.props.title && (
            typeof this.props.title === 'string'
              ? <h5 className={s.title}>{this.props.title}</h5>
              : <header className={s.title}>{this.props.title}</header>
          )
        }
        <div className={s.widgetControls}>
          {this.props.refresh && (
            <a href="#"><i className="fa fa-refresh"/></a>
          )}
          {this.props.collapse && (
            <span>
              <a data-widgster="collapse" title="Collapse" href="#"><i
                className="glyphicon glyphicon-chevron-down"/></a>
              {/*<a data-widgster="expand" title="Expand" href="#"><i className="glyphicon glyphicon-chevron-up"/></a>*/}
            </span>
          )}

          {this.props.close && (
            <a href="#" data-widgster="close"><i className="glyphicon glyphicon-remove"/></a>

          )}
        </div>

        {this.props.body && (
          <div className={s.widgetBody}>
            {this.props.body}
          </div>
        )}
        {this.props.children}
      </section>
    );
  }
}

export default withStyles(s)(Widget);
