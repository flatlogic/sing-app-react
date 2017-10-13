import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import jQuery from 'jquery';
import 'imports-loader?window.jQuery=jquery,this=>window!widgster'; // eslint-disable-line
import s from './Widget.scss'; // eslint-disable-line css-modules/no-unused-class

class Widget extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    close: PropTypes.bool,
    fullscreen: PropTypes.bool,
    collapse: PropTypes.bool,
    refresh: PropTypes.bool,
    settings: PropTypes.bool,
    settingsInverse: PropTypes.bool,
  };

  static defaultProps = {
    title: null,
    className: '',
    children: [],
    close: true,
    fullscreen: false,
    collapse: false,
    refresh: false,
    settings: false,
    settingsInverse: false,
  };

  componentDidMount() {
    jQuery(this.el).widgster({
      bodySelector: '.widget-body',
    });
  }

  render() {
    return (
      <section className={[s.widget, 'widget', this.props.className].join(' ')} ref={(widget) => { this.el = widget; }} >
        {
          this.props.title && (
            typeof this.props.title === 'string'
              ? <h5 className={s.title}>{this.props.title}</h5>
              : <header className={s.title}>{this.props.title}</header>
          )
        }
        <div className={s.widgetControls}>
          {this.props.settings && (
            <a href="#"><i className="glyphicon glyphicon-cog" /></a>
          )}
          {this.props.settingsInverse && (
            <a href="#" className={`bg-gray-transparent ${s.inverse}`}><i className="glyphicon glyphicon-cog text-white" /></a>
          )}
          {this.props.refresh && (
            <a href="#"><i className="fa fa-refresh" /></a>
          )}
          {this.props.fullscreen && (
          <a href="#" data-widgster="fullscreen" title="Fullscreen"><i
            className="glyphicon glyphicon-resize-full"
          /></a>
          )}
          {this.props.fullscreen && (
          <a href="#" data-widgster="restore" title="Restore"><i
            className="glyphicon glyphicon-resize-small"
          /></a>
            )}
          {this.props.collapse && (
            <span>
              <a href="#" data-widgster="collapse" title="Collapse"><i
                className="glyphicon glyphicon-chevron-down"
              /></a>
            </span>
          )}
          {this.props.collapse && (
            <span>
              <a href="#" data-widgster="expand" title="Expand"><i
                className="glyphicon glyphicon-chevron-up"
              /></a>
            </span>
          )}

          {this.props.close && (
            <a href="#" data-widgster="close"><i className="glyphicon glyphicon-remove" /></a>
          )}
        </div>
        <div className={`${s.widgetBody} widget-body`}>
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Widget);
