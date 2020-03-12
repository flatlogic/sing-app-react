import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';

import reactLogo from '../../images/react-logo.svg'

import Widget from '../../components/Widget';

import s from './Dashboard.module.scss';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            graph: null,
            checkedArr: [false, false, false],
        };
        this.checkTable = this.checkTable.bind(this);
    }

    checkTable(id) {
        let arr = [];
        if (id === 0) {
            const val = !this.state.checkedArr[0];
            for (let i = 0; i < this.state.checkedArr.length; i += 1) {
                arr[i] = val;
            }
        } else {
            arr = this.state.checkedArr;
            arr[id] = !arr[id];
        }
        if (arr[0]) {
            let count = 1;
            for (let i = 1; i < arr.length; i += 1) {
                if (arr[i]) {
                    count += 1;
                }
            }
            if (count !== arr.length) {
                arr[0] = !arr[0];
            }
        }
        this.setState({
            checkedArr: arr,
        });
    }

    render() {
        return (
            <div className={s.root}>
                <h1 className="page-title">Dashboard &nbsp;
                    <small>
                        <small>The Lucky One</small>
                    </small>
                </h1>

                <Row>
                    <Col lg={6}>
                        <Widget title={"Widget Example"}>
                            <Row className={"align-items-center"}>
                                <Col md={6}>
                                    <img src={reactLogo} alt="react"/>
                                </Col>
                                <Col md={6}>
                                    Sing App React Template is an dashboard template built with React 16.5.2. Sing App
                                    goes beyond usual admin templates and provides you entire intuitive programming
                                    framework. Server Side Rendering and Node.js backend will even further speed up your
                                    development. You can use Sing App React to build any type of web applications like
                                    SAAS, CMS, financial dashboards, project management tools, etc.
                                </Col>
                            </Row>
                        </Widget>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Dashboard;
