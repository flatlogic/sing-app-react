import React from 'react';
import {
  InputGroupAddon,
  InputGroup,
  Input,
} from 'reactstrap';

import s from './Search.module.scss'

const Search = (props) => {
  return (
    <div className={s.searchBox}>
      <InputGroup className={'input-group-no-border'}>
      <Input className={s.chatInput} placeholder="Search" />
      <InputGroupAddon addonType="prepend">
        <i className="la la-search" />
      </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default Search;