import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import jQuery from 'jquery';
import { UncontrolledTooltip } from 'reactstrap';
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
    close: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    fullscreen: PropTypes.bool,
    collapse: PropTypes.bool,
    refresh: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    settings: PropTypes.bool,
    settingsInverse: PropTypes.bool,
    tooltipPlacement: PropTypes.string,
    showTooltip: PropTypes.bool,
    bodyClass: PropTypes.string,
    customControls: PropTypes.node,
    options: PropTypes.object, //eslint-disable-line
  };

  static defaultProps = {
    title: null,
    className: '',
    children: [],
    close: false,
    fullscreen: false,
    collapse: false,
    refresh: false,
    settings: false,
    settingsInverse: false,
    tooltipPlacement: 'bottom',
    showTooltip: false,
    bodyClass: '',
    customControls: null,
    options: {},
  };

  constructor(prop) {
    super(prop);
    this.state = {
      randomId: Math.floor(Math.random() * 100),
    };
  }

  componentDidMount() {
    const options = this.props.options;
    options.bodySelector = '.widget-body';
    jQuery(this.el).widgster(options);
  }

  render() {
    const {
      title,
      className,
      children,
      close,
      fullscreen,
      collapse,
      refresh,
      settings,
      settingsInverse,
      tooltipPlacement,
      showTooltip,
      bodyClass,
      customControls,
      options, //eslint-disable-line
      ...attributes
    } = this.props;
    const randomId = this.state.randomId;
    const mainControls = !!(close || fullscreen || collapse || refresh || settings || settingsInverse);
    return (
      <section
        className={[s.widget, 'widget', className].join(' ')}
        ref={(widget) => { this.el = widget; }} {...attributes}
      >
        {
          title && (
            typeof title === 'string'
              ? <h5 className={s.title}>{title}</h5>
              : <header className={s.title}>{title}</header>
          )
        }
        {
          !customControls && mainControls && (
            <div className={`${s.widgetControls} widget-controls`}>
              {settings && (
                <a href="#"><i className="glyphicon glyphicon-cog" /></a>
              )}
              {settingsInverse && (
                <a href="#" className={`bg-gray-transparent ${s.inverse}`}><i
                  className="glyphicon glyphicon-cog text-white"
                /></a>
              )}
              {refresh && (
                <a href="#" data-widgster="load" id={`reloadId-${randomId}`}>
                  {typeof refresh === 'string' ?
                    <strong className="text-gray-light">{refresh}</strong> :
                    <i className="fa fa-refresh" />}
                  {showTooltip && (
                    <UncontrolledTooltip
                      placement={tooltipPlacement}
                      target={`reloadId-${randomId}`}
                    >Reload</UncontrolledTooltip>
                  )}
                </a>
              )}
              {fullscreen && (
                <a href="#" data-widgster="fullscreen" id={`fullscreenId-${randomId}`}>
                  <i className="glyphicon glyphicon-resize-full" />
                  {showTooltip && (
                    <UncontrolledTooltip
                      placement={tooltipPlacement}
                      target={`fullscreenId-${randomId}`}
                    >Fullscreen</UncontrolledTooltip>
                  )}
                </a>
              )}
              {fullscreen && (
                <a href="#" data-widgster="restore" id={`restoreId-${randomId}`}>
                  <i className="glyphicon glyphicon-resize-small" />
                  {showTooltip && (
                    <UncontrolledTooltip
                      placement={tooltipPlacement}
                      target={`restoreId-${randomId}`}
                    >Restore</UncontrolledTooltip>
                  )}
                </a>
              )}
              {collapse && (
                <span>
                  <a href="#" data-widgster="collapse" id={`collapseId-${randomId}`}>
                    <i className="glyphicon glyphicon-chevron-down" />
                    {showTooltip && (
                      <UncontrolledTooltip
                        placement={tooltipPlacement}
                        target={`collapseId-${randomId}`}
                      >Collapse</UncontrolledTooltip>
                    )}
                  </a>
                </span>
              )}
              {collapse && (
                <span>
                  <a href="#" data-widgster="expand" id={`expandId-${randomId}`}>
                    <i className="glyphicon glyphicon-chevron-up" />
                    {showTooltip && (
                      <UncontrolledTooltip
                        placement={tooltipPlacement}
                        target={`expandId-${randomId}`}
                      >Expand</UncontrolledTooltip>
                    )}
                  </a>
                </span>
              )}

              {close && (
                <a href="#" data-widgster="close" id={`closeId-${randomId}`}>
                  {typeof close === 'string' ?
                    <strong className="text-gray-light">{close}</strong> :
                    <i className="glyphicon glyphicon-remove" />}
                  {showTooltip && (
                    <UncontrolledTooltip
                      placement={tooltipPlacement}
                      target={`closeId-${randomId}`}
                    >Close</UncontrolledTooltip>
                  )}
                </a>
              )}
            </div>
          )}
        {
          customControls && (
            <div className={`${s.widgetControls} widget-controls`}>
              {customControls}
            </div>
          )
        }
        <div className={`${s.widgetBody} widget-body ${bodyClass}`}>
          {children}
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Widget);
