import React from 'react';
import {
  Row,
  Col,
  Label,
  Input,
  Form,
  FormGroup,
} from 'reactstrap';
import Sortable from 'react-sortablejs'

import Widget from '../../components/Widget';
import s from './Grid.module.scss';

import mock from './mock';

const tooltipPlacement = 'bottom';

class Grid extends React.Component {

  state = {
    gridData: mock.mainData,
    updatedData: mock.updatedData,
  }

  updateWidgetData = (widget) => {
    this.setState({
      gridData: Object.assign({}, this.state.gridData, {
        [widget]: this.state.updatedData[widget]
      })
    })
  }

  render() {

    return (
      <div>
        <h1 className="page-title">Grid - <span className="fw-semi-bold">Options</span></h1>
    
        <Row> 

          <Col xl={7}>
            <Widget
              title={<h5>Draggable Grid &nbsp;<span className="badge badge-danger fw-normal">since 2.1</span></h5>}
            >
              <div>
                <p>
                  <strong>Widgster</strong> is a plugin that allows to easily implement basic widget functions that
                  lots of our customers have requested. For now it has the following essential
                  widget features:
                </p>
                <ul className="text-list">
                  <li><strong>Collapse/Expand</strong> - all widgets can be collapsed to fill only header&apos;s
                    vertical
                    space;
                  </li>
                  <li><strong>Close</strong> - closable. Any widget may be removed by clicking the close btn;</li>
                  <li><strong>Full Screen</strong> - an option to make widget fill the whole window (just like OS);</li>
                  <li><strong>Ajax Load</strong> - the hottest option allowing to load/reload widget content
                    asynchronously. You just
                    need to provide an url to fetch the data from. With loader delivered.
                  </li>
                </ul>
                <p>It&apos;s available under MIT license, check out
                  <a href="https://github.com/flatlogic/widgster" target="_blank" rel="noopener noreferrer"> github </a>
                  to find it.</p>
                <p>
                  Test it out!
                </p>
              </div>
            </Widget>
          </Col>
        </Row>
        
        <Row className="grid-demo">
          <Col className="widget-container" xl={6} xs={12}>
            <Sortable 
            options={{
              group: "shared",
              animation: 350,
              ghostClass: 'widget-placeholder-react'
            }}>
            <Widget
              updateWidgetData={this.updateWidgetData}
              widgetType="default"
              title={<h6>Default <span className="fw-semi-bold">Widget</span></h6>}
              refresh collapse fullscreen close
              showTooltip tooltipPlacement={tooltipPlacement}
            >
              <div>
              {this.state.gridData.default.map(item => (
                  
                    <p key={item.value}>{item.value}</p>
                  
                ))} 
              </div>
            </Widget>

            <Widget
              updateWidgetData={this.updateWidgetData}
              widgetType="shares"
              prompt={true}
              className="shares-widget"
              bodyClass={"pt-3 px-0 py-0"}
              showTooltip tooltipPlacement={tooltipPlacement}
              title={<h6>
                <span className="badge badge-primary"><i className="fa fa-facebook" /></span> &nbsp;
                Latest <span className="fw-semi-bold">Shares</span>
              </h6>}
              close="Close" refresh="Reload"
            >
              <div className="list-group list-group-lg">
              {this.state.gridData.shares.map(item => (
                <button key={item.name} className={`list-group-item text-left ${item.extraClass}`}>
                  <span className="thumb-sm mr">
                    <img className="rounded-circle" src={item.img} alt="..." />
                  </span>
                  <div>
                    <h6 className="m-0">{item.name}</h6>
                    <small className="text-muted">{item.comment}</small>
                  </div>
                  <i className={`fa fa-circle ml-auto text-${item.type}`} />
                </button>                
              ))}

              </div>
           </Widget>
            <Widget
              prompt={true}
              id="autoload-widget"
              title={<h6>Autoload <span className="fw-semi-bold">Widget</span></h6>}
              customDropDown={true}
            >
              <div>
                <h3 className="text-center m-0">Sign up, it&apos;s <strong>free</strong></h3>
                <p className="lead text-muted text-center">
                  Faith makes it possible to achieve that which man&apos;s mind can conceive and believe.
                </p>
                <Form>
                  <FormGroup>
                    <Label for="exampleInputEmail1"><i className="fa fa-circle text-warning" /> &nbsp; Email
                      address</Label>
                    <Input
                      type="email" id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="pswd"><i className="fa fa-circle text-danger" /> &nbsp; Password</Label>
                    <Input id="pswd" type="text" placeholder="Min 8 characters" />
                  </FormGroup>
                  <p>
                    To make a widget automatically load it's content you just need to set <strong>autoload</strong> attribute and provide an api to update the widget content.
                  </p>
                  <pre><code>&lt;Widget updateWidgetData={"{this.updateWidgetData}"} /&gt;</code></pre>
                  <p>
                    <strong>autoload</strong> may be set to an integer value. If set, for example, to 2000 will refresh widget every 2 seconds.
                  </p>
                  <div className="clearfix">
                    <div className="btn-toolbar float-right">
                      <button type="button" className="btn btn-transparent">Cancel</button>
                      <button type="button" className="btn btn-success">&nbsp;Submit&nbsp;</button>
                    </div>
                  </div>
                </Form>
              </div>
            </Widget>

           <Widget>
              <header>
                <h6>Custom <span className="fw-semi-bold">Loader</span></h6>
              </header>
              <div className="widget-body" style={{ minHeight: '140px' }}>
                <div className="loader animated fadeIn handle">
                  <span className="spinner">
                    <i className="fa fa-spinner fa-spin" />
                  </span>
                </div>
              </div>
            </Widget>
            </Sortable>
          </Col>


          <Col xl={6} className="widget-container">
          <Sortable options={{
              group: "shared",
              ghostClass: 'widget-placeholder-react',
              animation: 350,
              filter: ".locked"
            }}>
            <Widget
              updateWidgetData={this.updateWidgetData}
              widgetType="news"
              id="news-widget"
              title={<div><h6> News <span className="badge badge-pill badge-success">17</span></h6>
                <span className="text-muted">spinning refresh button & close prompt</span>
              </div>}
              customControls={true}
              prompt={true}
              customClose={true}
              customCollapse={true}
              customFullscreen={true}
              customReload={true}
              bodyClass={"pt-3 px-0 py-0"}
            >
              <ul className={'news-list stretchable'}>
                {this.state.gridData.news.map(item => (
                  <li className={item.extraClass} key={item.title}>
                    <span className={`icon text-white bg-${item.background}`}>
                      <i className={`fa fa-${item.icon}`}></i>
                    </span>
                    <div className="news-item-info">
                      <h5 className="name m-0 mb-xs"><a href="#/app/grid">{item.title}</a></h5>
                      <p className="fs-mini">
                        {item.description}
                      </p>
                      <time className="help-block">{item.date}</time>
                    </div>
                  </li>
                ))}
              </ul>



            </Widget>

            <Widget
              className="locked"
              title={<h6>Collapsed by default & locked</h6>}
              collapse close collapsed 
            >
              <div className="widget-body">
                <blockquote>
                  There are no limits. There are plateaus, but you must not stay there, you must go beyond
                  them. If it kills you, it kills you. A man must constantly exceed his level.
                  <footer>
                    Bruce Lee
                  </footer>
                </blockquote>
                <p>To make a widget initially collapsed just add <code>collapsed</code> property
                  to <code>.widget</code>.</p>
                <p>To make it locked (prevent dragging) add <code>.locked</code> class.</p>
              </div>
            </Widget>

            <Widget
              className={s.customGrayBg}
              customBody={true}
            >
            </Widget>
            </Sortable>
          </Col>  
        </Row>

      </div> 
    );
  }
}

export default Grid;

