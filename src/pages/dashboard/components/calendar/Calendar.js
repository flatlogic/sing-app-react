import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/* eslint-disable */
import $ from 'jquery';
import 'imports-loader?jQuery=jquery,this=>window!bootstrap';
import 'imports-loader?jQuery=jquery,this=>window!bootstrap_calendar/bootstrap_calendar/js/bootstrap_calendar';
/* eslint-enable */

import './Calendar.scss';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

class Calendar extends React.Component {
  static propTypes = {
    white: PropTypes.bool,
  }

  static defaultProps = {
    white: false,
  }

  componentDidMount() {
    const $calendar = $(this.element);
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const events = [
      [
        `2/${month}/${year}`,
        'The flower bed',
        '#',
        '#547fff',
        'Contents here',
      ],
      [
        `5/${month}/${year}`,
        'Stop world water pollution',
        '#',
        '#ffc247',
        'Have a kick off meeting with .inc company',
      ],
      [
        `18/${month}/${year}`,
        'Light Blue 2.2 release',
        '#',
        '#3abf94',
        'Some contents here',
      ],
      [
        `29/${month}/${year}`,
        'A link',
        'http://www.flatlogic.com',
        '#f55d5d',
      ],
    ];
    $calendar.calendar({
      months: monthNames,
      days: dayNames,
      events,
      popover_options: {
        placement: 'top',
        html: true,
      },
    });
    $calendar.find('.icon-arrow-left').addClass('la la-arrow-left');
    $calendar.find('.icon-arrow-right').addClass('la la-arrow-right');
    const restyleCalendar = () => {
      $calendar.find('.event').each((index, el) => {
        const $eventIndicator = $('<span></span>');
        $eventIndicator
          .css('background-color', $(el).css('background-color'))
          .appendTo($(el).find('a'));
        $(el).css('background-color', '');
      });
    };
    $calendar.find('.icon-arrow-left, .icon-arrow-right').parent().on('click', restyleCalendar);
    restyleCalendar();
  }

  render() {
    return (<div ref={(el) => this.element = el} className={cx('calendar', { 'calendar-white': this.props.white })} />);
  }
}

export default Calendar;
