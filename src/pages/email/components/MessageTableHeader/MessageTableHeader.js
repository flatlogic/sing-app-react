import React from 'react';
import PropTypes from 'prop-types';
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
} from 'reactstrap';

import s from './MessageTableHeader.module.scss';

const MessageTableHeader = (props) => {
  const { all, none, read, unread, markRead, markUnread, deleteItems, search } = props;
  const select = [
    { id: 0, title: 'All', onClick: all },
    { id: 1, title: 'None', onClick: none },
    { id: 2 },
    { id: 3, title: 'Read', onClick: read },
    { id: 4, title: 'Unread', onClick: unread },
  ];
  const action = [
    { id: 1, title: 'Reply' },
    { id: 2, title: 'Forward' },
    { id: 3, title: 'Archive' },
    { id: 4 },
    { id: 5, title: 'Mark As Read', onClick: markRead },
    { id: 6, title: 'Mark As Unread', onClick: markUnread },
    { id: 7 },
    { id: 8, title: 'Delete', onClick: deleteItems },
  ];
  return (
    <div className={s.messageTableHeader}>
      <div>
        <UncontrolledButtonDropdown size="sm">
          <DropdownToggle
            caret color="default"
            className="dropdown-toggle-split mr-xs"
          >
            Select
        </DropdownToggle>
          <DropdownMenu>
            {select.map(item =>
              (Object.keys(item).length > 1
                ? <DropdownItem key={item.id} onClick={item.onClick}>{item.title}</DropdownItem>
                : <DropdownItem key={item.id} divider />),
            )}
          </DropdownMenu>
        </UncontrolledButtonDropdown >
        <UncontrolledButtonDropdown size="sm">
          <DropdownToggle
            caret color="default"
            className="dropdown-toggle-split mr-xs"
          >
            Actions
        </DropdownToggle>
          <DropdownMenu>
            {action.map(item =>
              (Object.keys(item).length > 1
                ? <DropdownItem key={item.id} onClick={item.onClick}>{item.title}</DropdownItem>
                : <DropdownItem key={item.id} divider />),
            )}
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <Input placeholder="Search Messages" bsSize="sm" onChange={e => search(e.target.value)} />
    </div>
  );
};

MessageTableHeader.propTypes = {
  all: PropTypes.func.isRequired,
  none: PropTypes.func.isRequired,
  read: PropTypes.func.isRequired,
  unread: PropTypes.func.isRequired,
  markRead: PropTypes.func.isRequired,
  markUnread: PropTypes.func.isRequired,
  deleteItems: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default MessageTableHeader;
