import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Scrollspy from "react-scrollspy";

import s from '../styles.module.scss';

export default (props) => (
  <div
    className="border-left pl-4 d-md-down-none"
    style={{
      position: 'fixed',
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 130px)',
      paddingLeft: '15px'
    }}
  >
    <h6 className="fw-semi-bold">{props.title}</h6>
    <Scrollspy
      items={props.ids}
      currentClassName={s.activeScrollSpy}
      offset={-170}
    >
      {props.ids.map((id) => (
        <li key="id" className="mb-xs"><Link to={`/documentation/${props.prefix}#${id}`} className={s.scrollSpy}>{id.split('-').join(' ')}</Link></li>
      ))}
    </Scrollspy>
  </div>
)
