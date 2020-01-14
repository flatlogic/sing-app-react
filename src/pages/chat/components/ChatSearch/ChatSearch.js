import React from 'react';
import {
    InputGroupAddon,
    InputGroup,
    Input,
} from 'reactstrap';
import s from './ChatSearch.module.scss';

const ChatSearch = (props) => (
    <div className={`${s.searchBox} chat-section bg-white ${props.classProp ? props.classProp : ""}`}>
    <InputGroup className={'input-group-no-border'}>
    <Input className={s.chatInput} placeholder="Search" />
    <InputGroupAddon addonType="prepend">
      <i className="la la-search" />
    </InputGroupAddon>
    </InputGroup>
  </div>
)

export default ChatSearch;
