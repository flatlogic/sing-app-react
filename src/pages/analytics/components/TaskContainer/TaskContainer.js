import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import Widget from '../../../../components/Widget';
import Task from '../Task/Task';

export default class TasksContainer extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    ).isRequired,
  }

  componentWillMount() {
    const tasks = this.props.data;

    tasks.map((task) => {
      task.complited = false;
      return task;
    });

    this.setState({ tasks });
  }

  toggleTaskState = (index) => {
    const newTasks = [...this.state.tasks];

    newTasks[index].complited = !this.state.tasks[index].complited;

    this.setState({ tasks: newTasks });
  }

  render() {
    const { tasks } = this.state;
    const totalComplited = tasks.filter(i => i.complited).length;
    return (
      <Widget
        className="mb-xlg pb-2"
        bodyClass="task-container mt"
        title={
          <div>
            <h4>Today&apos;s Tasks <span className="badge badge-pill badge-success fw-normal pull-right mt-xs">{tasks.length}</span></h4>
            <p className="text-primary mb-0"><small>{totalComplited} of {tasks.length} complited</small></p>
          </div>
        }
      >
        {tasks.map((item, index) =>
          <Task key={item.id} index={index} toggle={this.toggleTaskState} {...item} />)}
        <Button color="transparent" className="bg-white w-100 text-center text-muted">
          See All <i className="la la-arrow-down" />
        </Button>
      </Widget>
    );
  }
}
