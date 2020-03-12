import React from 'react';
import s from "../dashboard/Dashboard.module.scss";
import {Col, Row} from "reactstrap";

const AnotherPage = () => {
    return (
        <div className={s.root}>
            <h1 className="page-title">Another page &nbsp;
                <small>
                    <small>Just like that</small>
                </small>
            </h1>

            <Row>
                <Col>
                    <p>Some page content. Feel free to place whatever you want here</p>
                </Col>
            </Row>

        </div>
    );
};

export default AnotherPage;
