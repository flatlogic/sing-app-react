import React from "react";
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
        <li key="id" className="mb-xs"><a href={`#${id}`} className="text-gray">{id.split('-').join(' ')}</a></li>
      ))}
    </Scrollspy>
  </div>
)
