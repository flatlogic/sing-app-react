import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Widget.scss';

class Widget extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    close: PropTypes.bool,
    collapse: PropTypes.bool,
    refresh: PropTypes.bool,
    settings: PropTypes.bool,
    settingsInverse: PropTypes.bool,
  };

  static defaultProps = {
    title: null,
    className: '',
    children: [],
    close: false,
    collapse: false,
    refresh: false,
    settings: false,
    settingsInverse: false,
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
          {this.props.settings && (
            <a><i className="glyphicon glyphicon-cog" /></a>
          )}
          {this.props.settingsInverse && (
            <a className={`bg-gray-transparent ${s.inverse}`}><i className="glyphicon glyphicon-cog text-white" /></a>
          )}
          {this.props.refresh && (
            <a><i className="fa fa-refresh" /></a>
          )}
          {this.props.collapse && (
            <span>
              <a data-widgster="collapse" title="Collapse"><i
                className="glyphicon glyphicon-chevron-down"
              /></a>
            </span>
          )}

          {this.props.close && (
            <a data-widgster="close"><i className="glyphicon glyphicon-remove" /></a>

          )}
        </div>
        <div className={s.widgetBody}>
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Widget);
