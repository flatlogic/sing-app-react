import React from 'react';
import {
  Row,
  Col,
  ButtonGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from 'reactstrap';

import moment from 'moment/moment';

import s from './Calendar.module.scss';
import Widget from '../../../components/Widget';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {Draggable} from "@fullcalendar/interaction";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";



class Calendar extends React.Component {
    constructor(props) {
      super(props)
      const date = new Date();
      const d = date.getDate();
      const m = date.getMonth();
      const y = date.getFullYear();
      this.state = {
        event: {},
        modal: false,
        modalEvent: false,
        calendarView: 'dayGridMonth',
        currentMonth: moment().format('MMM YYYY'),
        currentDay: moment().format('dddd'),
        calendarOptions: {
          header: {
            left: '',
            center: '',
            right: '',
          },
          events: [
            {
              title: 'All Day Event',
              start: new Date(y, m, 1),
              backgroundColor: '#005792',
              textColor: '#fff',
              description: 'Will be busy throughout the whole day',
            },
            {
              title: 'Long Event',
              start: new Date(y, m, d + 5),
              end: new Date(y, m, d + 7),
              backgroundColor: '#1A86D0',
              textColor: '#fff',
              description: 'This conference should be worse visiting',
            },
            {
              id: 999,
              title: 'Blah Blah Car',
              start: new Date(y, m, d - 3, 16, 0),
              allDay: false,
              textColor: '#fff',
              backgroundColor: '#FD5F00',
              description: 'Agree with this guy on arrival time',
            },
            {
              id: 1000,
              title: 'Buy this template',
              start: new Date(y, m, d + 3, 12, 0),
              allDay: false,
              backgroundColor: '#21AE8C',
              textColor: '#fff',
              description: 'Make sure everything is consistent first',
            },
            {
              title: 'Got to school',
              start: new Date(y, m, d + 16, 12, 0),
              end: new Date(y, m, d + 16, 13, 0),
              backgroundColor: '#ff7d47',
              textColor: '#fff',
              description: 'Time to go back',
            },
            {
              title: 'Study some Node',
              start: new Date(y, m, d + 18, 12, 0),
              end: new Date(y, m, d + 18, 13, 0),
              backgroundColor: '#002B49',
              textColor: '#fff',
              description: 'Node.js is a platform built '
              + 'on Chrome\'s JavaScript runtime for easily'
              + ' building fast, scalable network applications.'
              + ' Node.js uses an event-driven, non-blocking'
              + ' I/O model that makes it lightweight and'
              + ' efficient, perfect for data-intensive real-time'
              + ' applications that run across distributed devices.',
            },
            {
              title: 'Click for Flatlogic',
              start: new Date(y, m, 28),
              end: new Date(y, m, 29),
              url: 'http://flatlogic.com/',
              backgroundColor: '#21AE8C',
              textColor: '#fff',
              description: 'Creative solutions',
            },
          ],
          selectable: true,
          selectHelper: true,
          editable: true,
          droppable: true,
        },
        calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        dragOptions: { zIndex: 999, revert: true, revertDuration: 0 },
      }
    }


  componentDidMount() {
    new Draggable(this.externalEvents, {
      itemSelector: '.external-event'
    });
  }

  drop = (info) => {
    info.draggedEl.parentNode.removeChild(info.draggedEl);
  }

  handleChange = (e) => {
    this.setState({ event: { ...this.state.event, title: e.target.value } })
  }
  createEvent = () => {
    this.fullCalendar.getApi().addEvent(this.state.event);
    this.fullCalendar.getApi().unselect();
    this.toggleModal();
  }
  select = ({start, end, allDay}) => {
    this.setState({
      event: {
        start,
        end,
        allDay,
        backgroundColor: '#64bd63',
        textColor: '#fff',
        editable: true
      }
    })
    this.toggleModal();
  }
  eventClick = (e) => {
    this.setState({ event: e.event })
    this.toggleModalEvent();
  }
  prev = () => {
    this.fullCalendar.getApi().prev();
  }
  next = () => {
    this.fullCalendar.getApi().next();
  }
  today = () => {
    this.fullCalendar.getApi().today();
  }
  changeView = (view) => {
    this.fullCalendar.getApi().changeView(view);
  }
  getFormattedDate = (date) =>  {
    return moment(date).format('YYYY-MM-DD');
  }
  toggleModal = () => {
    this.setState({ modal: !this.state.modal })
  }
  toggleModalEvent = () => {
    this.setState({ modalEvent: !this.state.modalEvent })
  }

  render() {
    const { event, currentMonth, currentDay, calendarOptions, modal, modalEvent } = this.state
    return (
      <div className={s.root}>
        <Row>
          <Col lg={4} xs={12} md={6}>
            <h1 className="page-title">
              {currentMonth} - <span className="fw-semi-bold">{currentDay}</span>
            </h1>
            <h3>Draggable <span className="fw-semi-bold">Events</span></h3>
            <p>Just drap and drop events from there directly into the calendar.</p>
            <div ref={(node) => {this.externalEvents = node}} className="calendar-external-events mb-lg">
              <div 
                data-event='{ "classNames": ["bg-success", "text-white"], "title": "Make a tea" }' className="external-event draggable"
              >
                <div className={s.customExternalEvent}>
                <i className="fa fa-circle fa-fw text-success ml-xs mr-xs" />
                Make a tea
              </div>
              </div>
              <div 
                data-event='{ "classNames": ["bg-warning", "text-white"], "title": "Open windows" }' className="external-event draggable"
              >
                <div className={s.customExternalEvent}>
                <i className="fa fa-circle fa-fw text-warning ml-xs mr-xs" />
                Open windows
              </div>
              </div>
              <div 
                data-event='{ "classNames": ["bg-gray", "text-white"], "title": "Some stuff" }' className="external-event draggable"
              >
                <div className={s.customExternalEvent}>
                <i className="fa fa-circle-o fa-fw text-gray-light ml-xs mr-xs" />
                Some stuff
              </div>
              </div>
              <div
                data-event='{ "classNames": ["bg-danger", "text-white"], "title": "Study UX engineering" }' className="external-event draggable"
              >
                <div className={s.customExternalEvent}>
                <i className="fa fa-square fa-fw text-danger ml-xs mr-xs" />
                Study UX engineering
                </div>
              </div>
              <div 
                data-event='{ "classNames": ["bg-gray", "text-white"], "title": "Another stuff" }' className="external-event draggable"
              >
                <div className={s.customExternalEvent}>
                <i className="fa fa-circle-o fa-fw text-gray-light ml-xs mr-xs" />
                Another stuff
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={8} xs={12}>
            <Widget>
              <Row className="calendar-controls">
                <Col md={3}>
                  <ButtonGroup className="mr-sm">
                    <Button color="default" onClick={this.prev}>
                      <i className="fa fa-angle-left" />
                    </Button>
                    <Button color="default" onClick={this.next}>
                      <i className="fa fa-angle-right" />
                    </Button>
                  </ButtonGroup>
                  <Button color="default" onClick={this.today}>
                    Today
                  </Button>
                </Col>
                <Col md={9} className="calendar-controls text-right">
                  <ButtonGroup>
                    <Button
                      color="default" onClick={() => this.changeView('dayGridMonth')}
                      active={this.state.calendarView === 'dayGridMonth'}
                    >Month</Button>
                    <Button
                      color="default" onClick={() => this.changeView('timeGridWeek')}
                      active={this.state.calendarView === 'timeGridWeek'}
                    >Week</Button>
                    <Button
                      color="default" onClick={() => this.changeView('timeGridDay')}
                      active={this.state.calendarView === 'timeGridDay'}
                    >Day</Button>
                  </ButtonGroup>
                </Col>
              </Row>


            <FullCalendar
              ref={(node) => {this.fullCalendar = node}}
              defaultView="dayGridMonth"
              plugins={this.state.calendarPlugins}
              select={this.select}
              eventClick={this.eventClick}
              drop={this.drop}
              {...calendarOptions}
            />
            </Widget>
          </Col>
        </Row>

      <Modal isOpen={modal} toggle={this.toggleModal} id="news-close-modal">
        <ModalHeader toggle={this.toggleModal} id="news-close-modal-label">Create New Event</ModalHeader>
        <ModalBody className="bg-white">
        Just enter event name to create a new one

        <Input onChange={this.handleChange} className={s.calendarModalInput} value={event.title} type="text" name="title" placeholder="Title" />
        </ModalBody>
        <ModalFooter>
          <Button color="default" onClick={this.toggleModal} data-dismiss="modal">Close</Button>{' '}
          <Button color="success" onClick={this.createEvent} id="news-widget-remove">Create</Button>
        </ModalFooter>
      </Modal> 

      <Modal isOpen={modalEvent} toggle={this.toggleModalEvent} id="news-close-modal">
        <ModalHeader toggle={this.toggleModalEvent} id="news-close-modal-label">{event.title}</ModalHeader>
        <ModalBody className="bg-white">
        <p class="text-muted">
            <i class="la la-calendar"></i>
            {this.getFormattedDate(event.start)}
          </p>
          <p>{event.extendedProps && event.extendedProps.description}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="default" onClick={this.toggleModalEvent} data-dismiss="modal">OK</Button>
        </ModalFooter>
      </Modal> 
      </div>
    );
  }

}

export default Calendar;