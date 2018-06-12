import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

/* eslint-disable */
import $ from 'jquery';
import 'imports-loader?jQuery=jquery,this=>window!bootstrap';
import 'imports-loader?jQuery=jquery,this=>window!bootstrap_calendar/bootstrap_calendar/js/bootstrap_calendar';
/* eslint-enable */

import s from './Calendar.scss';

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
    const $calendar = $('#calendar');
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const events = [
      [
        `2/${month}/${year}`,
        'The flower bed',
        '#',
        '#5d8fc2',
        'Contents here',
      ],
      [
        `5/${month}/${year}`,
        'Stop world water pollution',
        '#',
        '#f0b518',
        'Have a kick off meeting with .inc company',
      ],
      [
        `18/${month}/${year}`,
        'Light Blue 2.2 release',
        '#',
        '#64bd63',
        'Some contents here',
      ],
      [
        `29/${month}/${year}`,
        'A link',
        'http://www.flatlogic.com',
        '#dd5826',
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
    return (<div id="calendar" className={cx('calendar', { 'calendar-white': this.props.white })} />);
  }
}

export default withStyles(s)(Calendar);
