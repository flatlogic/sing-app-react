import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Table, Input, FormGroup, Label } from 'reactstrap';

import Widget from '../../../../components/Widget';
import MessageTableHeader from '../MessageTableHeader/MessageTableHeader';
import Pagination from '../Pagination/Pagination';
import Compose from '../Compose/Compose';
import Message from '../Message/Message';

import mock from '../../mock';
import s from './MessageTable.module.scss';

class MessageTable extends Component {
  state = {
    messages: mock,
    checkedIds: [],
    searchString: '',
  }

  componentWillReceiveProps(nextProps) {
    const { filter } = this.props;

    if (filter !== nextProps.filter) {
      this.chooseNone();
      this.setState({ openedMessage: null });
    }
  }

  chooseAll = () => {
    const { messages } = this.state;
    const { filter } = this.props;
    const newCheckedIds = [];

    if (filter) {
      messages
        .filter(message => message[filter])
        .forEach(message => newCheckedIds.push(message.id));
    } else {
      messages.forEach(message => newCheckedIds.push(message.id));
    }

    this.setState({ checkedIds: newCheckedIds });
  }

  chooseNone = () => {
    this.setState({ checkedIds: [] });
  }

  chooseRead = () => {
    const { messages } = this.state;
    const newCheckedIds = [];

    messages.forEach((message) => {
      if (!message.unreaded) {
        newCheckedIds.push(message.id);
      }
    });

    this.setState({
      checkedIds: newCheckedIds,
    });
  }

  chooseUnread = () => {
    const { messages } = this.state;
    const newCheckedIds = [];

    messages.forEach((message) => {
      if (message.unreaded) {
        newCheckedIds.push(message.id);
      }
    });

    this.setState({
      checkedIds: newCheckedIds,
    });
  }

  choose(id) {
    const { checkedIds } = this.state;
    const indexOfId = checkedIds.indexOf(id);

    if (indexOfId === -1) {
      this.setState({ checkedIds: [...checkedIds, id] });
    } else {
      const newCheckedIds = [...checkedIds];
      newCheckedIds.splice(indexOfId, 1);
      this.setState({ checkedIds: newCheckedIds });
    }
  }

  markUnread = () => {
    const { messages, checkedIds } = this.state;
    const newMessages = [...messages];

    newMessages.map((message) => {
      if (checkedIds.indexOf(message.id) !== -1) {
        message.unreaded = true;
      }
      return message;
    });

    this.setState({ messages: newMessages });
  }

  markRead = () => {
    const { messages, checkedIds } = this.state;
    const newMessages = [...messages];

    newMessages.map((message) => {
      if (checkedIds.indexOf(message.id) !== -1) {
        message.unreaded = false;
      }
      return message;
    });

    this.setState({ messages: newMessages });
  }

  delete = () => {
    const { messages, checkedIds } = this.state;
    const newMessages = [...messages];

    newMessages.map((message) => {
      if (checkedIds.indexOf(message.id) !== -1) {
        message.deleted = true;
      }
      return message;
    });

    this.setState({
      messages: newMessages.filter(message => !message.deleted),
      checkedIds: [],
    });
  }

  starItem(id) {
    const { messages } = this.state;
    const isAlreadyStarred = messages.find(m => m.id === id).starred;
    const newMessages = [...messages];

    newMessages.map((message) => {
      if (message.id === id) {
        message.starred = !isAlreadyStarred;
      }
      return message;
    });

    this.setState({ messages: newMessages });
  }

  handleOpenMessage(id) {
    const newMessages = [...this.state.messages];

    newMessages.map((message) => {
      if (message.id === id) {
        message.unreaded = false;
      }

      return message;
    });

    this.setState({ messages: newMessages });

    this.props.openMessage(id);
  }

  search = (value) => {
    this.setState({ searchString: value.toLowerCase() });
  }

  _searchable(m) {
    const { searchString } = this.state;

    if (searchString) {
      return (m.content.toLowerCase().indexOf(searchString) !== -1 ||
        m.from.toLowerCase().indexOf(searchString) !== -1 ||
        m.theme.toLowerCase().indexOf(searchString) !== -1);
    }

    return true;
  }

  render() {
    const { messages, checkedIds } = this.state;
    const { filter, openedMessage, openMessage, compose, composeData, changeCompose } = this.props;
    const filteredMessages = messages.filter(message => message[filter]);
    const dataToDisplay = filter ? filteredMessages : messages;
    return (
      <div className={s.messages}>
        {openedMessage === null && !compose
          ? <Pagination />
          : <button className={cx('btn btn-default', s.backButton)} onClick={() => openMessage(null)}>
            <i className="fa fa-angle-left fa-lg" />
          </button>
        }
        {/* eslint-disable */}
        {openedMessage === null && !compose
          ? <Widget>
            <MessageTableHeader
              all={this.chooseAll}
              none={this.chooseNone}
              read={this.chooseRead}
              unread={this.chooseUnread}
              markRead={this.markRead}
              markUnread={this.markUnread}
              deleteItems={this.delete}
              search={this.search}
            />
            <Table striped hover>
              <thead>
                <tr>
                  <th>
                    <FormGroup className="checkbox abc-checkbox" check>
                      <Input
                        id="checkbox-main"
                        type="checkbox"
                        onChange={dataToDisplay.length !== checkedIds.length ? this.chooseAll : this.chooseNone}
                        checked={dataToDisplay.length !== 0 && checkedIds.length === dataToDisplay.length}
                      />{' '}
                      <Label for="checkbox-main" check />
                    </FormGroup>
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataToDisplay
                  .filter((m) => this._searchable(m))
                  .map(message =>
                    (<tr
                      key={message.id}
                      className={cx({ [s.unreadedMessage]: message.unreaded })}
                    >
                      <td className={s.messageCheckbox} >
                        <FormGroup className="checkbox abc-checkbox" check>
                          <Input
                            id={`checkbox${message.id}`}
                            type="checkbox"
                            checked={checkedIds.indexOf(message.id) !== -1}
                            onChange={() => this.choose(message.id)}
                          />{' '}
                          <Label for={`checkbox${message.id}`} check />
                        </FormGroup>
                      </td>
                      <td
                        className={s.messageStar}
                        onClick={() => this.starItem(message.id)}>{message.starred
                          ? <span className={s.messageStarred}><i className="fa fa-star text-primary" /></span>
                          : <span><i className="fa fa-star-o" /></span>}
                      </td>
                      <td
                        className={s.messageFrom}
                        onClick={() => this.handleOpenMessage(message.id)}
                      >{message.from}</td>
                      <td onClick={() => this.handleOpenMessage(message.id)}>{message.theme}</td>
                      <td className={s.messageClip}>{message.attachments && <i className="fa fa-paperclip" />}</td>
                      <td className={s.messageDate}>{message.date}</td>
                    </tr>),
                )}
              </tbody>
            </Table>
          </Widget>
          : compose
            ? <Compose data={composeData} />
            : <Message message={messages[openedMessage]} compose={changeCompose} />
        }
        {/* eslint-enable */}
      </div>
    );
  }
}

MessageTable.propTypes = {
  filter: PropTypes.string,
  openedMessage: PropTypes.number,
  openMessage: PropTypes.func.isRequired,
  compose: PropTypes.bool.isRequired,
  composeData: PropTypes.shape({
    from: PropTypes.string,
    theme: PropTypes.string,
  }),
  changeCompose: PropTypes.func.isRequired,
};

MessageTable.defaultProps = {
  filter: null,
  openedMessage: null,
  composeData: null,
};

export default MessageTable;
