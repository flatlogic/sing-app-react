import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Row,
  Col,
  Label,
  Input,
  Form,
  FormGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import $ from 'jquery';
import 'imports-loader?window.jQuery=jquery,this=>window!jquery-ui/ui/widgets/sortable'; //eslint-disable-line

import Widget from '../../components/Widget';
import s from './Grid.scss';

import peopleA1 from '../../images/people/a1.jpg';
import peopleA2 from '../../images/people/a2.jpg';
import peopleA3 from '../../images/people/a3.jpg';
import peopleA4 from '../../images/people/a4.jpg';


const sortOptions = {
  connectWith: '.widget-container',
  handle: 'header, .handle',
  cursor: 'move',
  iframeFix: false,
  items: '.widget:not(.locked)',
  opacity: 0.8,
  helper: 'original',
  revert: true,
  forceHelperSize: true,
  placeholder: 'widget widget-placeholder',
  forcePlaceholderSize: true,
  tolerance: 'pointer',
};

const tooltipPlacement = 'bottom';

class Grid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.closePrompt = this.closePrompt.bind(this);
  }

  componentDidMount() {
    $('.widget-container').sortable(sortOptions);
    this.initSharesWidget();
    this.initNewsWidget();
    this.initAutoLoadWidget();
  }

  initSharesWidget() {
    $(this.sharesWidget).widgster({
      loaderTemplate: `<div class="loader animated fadeIn">
         <span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>
      </div>`,
    });
  }

  initNewsWidget() {
    /**
     * Make refresh button spin when loading
     */
    $('#news-widget').bind('load.widgster', () => {
      $(this).find('[data-widgster="load"] > i').addClass('fa-spin');
    }).bind('loaded.widgster', () => {
      $(this).find('[data-widgster="load"] > i').removeClass('fa-spin');
    });
  }

  initAutoLoadWidget() {
    $('#autoload-widget').bind('load.widgster', () => {
      $(this).find('.fa-spinner').addClass('fa-spin in');
    }).bind('loaded.widgster', () => {
      $(this).find('.fa-spinner').removeClass('fa-spin in');
    }).bind('load.widgster fullscreen.widgster restore.widgster', () => {
      $(this).find('.dropdown.open > .dropdown-toggle').dropdown('toggle');
    });
  }

  closePrompt(callback) {
    this.setState({ modal: true });
    $('#news-widget-remove').bind('click', () => {
      this.setState({ modal: false });
      callback();
    });
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">YOU ARE HERE</li>
          <li className="breadcrumb-item active">Grid</li>
        </ol>
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
            <Widget
              title={<h6>Default <span className="fw-semi-bold">Widget</span></h6>}
              refresh collapse fullscreen close
              showTooltip tooltipPlacement={tooltipPlacement}
              data-widgster-load="/demo/grid/default.php"
            >
              <div>
                <p>A timestamp this widget was created: Apr 24, 19:07:07</p>
                <p>A timestamp this widget was updated: Apr 24, 19:07:07</p>
              </div>
            </Widget>

            <Widget
              className="shares-widget"
              ref={(r) => {
                this.sharesWidget = r;
              }}
              data-widgster-load="/demo/grid/shares.php"
              data-post-processing
              showTooltip tooltipPlacement={tooltipPlacement}
              title={<h6>
                <span className="badge badge-primary"><i className="fa fa-facebook" /></span> &nbsp;
                Latest <span className="fw-semi-bold">Shares</span>
              </h6>}
              close="Close" refresh="Reload"
              bodyClass={'p-0'}
            >
              <div className="list-group list-group-lg">
                <a href="#" className="list-group-item ">
                  <span className="thumb-sm mr">
                    <img className="rounded-circle" src={peopleA1} alt="..." />
                  </span>
                  <div>
                    <h6 className="m-0">Maikel Basso</h6>
                    <small className="text-muted">about 2 mins ago</small>
                  </div>
                  <i className="fa fa-circle ml-auto text-danger" />
                </a>
                <a href="#" className="list-group-item">
                  <span className="thumb-sm mr">
                    <img className="rounded-circle" src={peopleA2} alt="..." />
                  </span>
                  <div>
                    <h6 className="m-0">Ianus Arendse</h6>
                    <small className="text-muted">about 42 mins ago</small>
                  </div>
                  <i className="fa fa-circle ml-auto text-info" />
                </a>
                <a href="#" className="list-group-item">
                  <span className="thumb-sm mr">
                    <img className="rounded-circle" src={peopleA3} alt="..." />
                  </span>
                  <div>
                    <h6 className="m-0">Valdemar Landau</h6>
                    <small className="text-muted">one hour ago</small>
                  </div>
                  <i className="fa fa-circle ml-auto text-success" />
                </a>
                <a href="#" className="list-group-item mb-n-md">
                  <span className="thumb-sm mr">
                    <img className="rounded-circle" src={peopleA4} alt="..." />
                  </span>
                  <div>
                    <h6 className="m-0">Rick Teagan</h6>
                    <small className="text-muted">3 hours ago</small>
                  </div>
                  <i className="fa fa-circle ml-auto text-warning" />
                </a>
              </div>
            </Widget>
            <Widget
              id="autoload-widget"
              data-widgster-load="/demo/grid/autoload.php"
              data-post-processing="true"
              data-widgster-autoload="true"
              data-widgster-show-loader="false"
              title={<h6>Autoload <span className="fw-semi-bold">Widget</span></h6>}
              customControls={
                <UncontrolledDropdown>
                  <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                  >
                    <i className="glyphicon glyphicon-cog" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem data-widgster="load" title="Reload">
                      Reload &nbsp;&nbsp;
                      <span className="badge badge-pill badge-success animated bounceIn">
                        <strong>9</strong>
                      </span>
                    </DropdownItem>
                    <DropdownItem data-widgster="fullscreen" title="Full Screen">Fullscreen</DropdownItem>
                    <DropdownItem data-widgster="restore" title="Restore">Restore</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem data-widgster="close" title="Close">Close</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              }
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
                    To make a widget automatically load it&apos;s content you just need to set
                    <strong>data-widgster-autoload</strong> attribute and provide an url.
                  </p>
                  <pre><code>data-widgster-load=&quot;server/ajax_widget.html&quot;
                    data-widgster-autoload=&quot;true&quot;</code></pre>
                  <p>
                    <strong>data-widgster-autoload</strong> may be set to an integer value. If set, for example, to
                    2000 will refresh widget every 2 seconds.
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
          </Col>


          <Col xl={6} className="widget-container">
            <Widget
              id="news-widget"
              data-widgster-load="/demo/grid/news.php"
              data-post-processing="true"
              title={<div><h6> News <span className="badge badge-pill badge-success">17</span></h6>
                <span className="text-muted">spinning refresh button & close prompt</span>
              </div>}
              customControls={
                <div>
                  <a data-widgster="expand" title="Expand" href="#"><i className="glyphicon glyphicon-chevron-up" /></a>
                  <a data-widgster="collapse" title="Collapse" href="#"><i
                    className="glyphicon glyphicon-chevron-down"
                  /></a>
                  <a data-widgster="load" title="I am spinning!" href="#"><i className="fa fa-refresh" /></a>
                  <a data-widgster="close" title="Close" href="#"><i className="glyphicon glyphicon-remove" /></a>
                </div>
              }
              bodyClass={'p-0'}
              options={{
                showLoader: false,
                closePrompt: this.closePrompt,
              }}
            >
              <ul className={'news-list stretchable'}>
                <li>
                  <span className="icon bg-danger text-white">
                    <i className="fa fa-star" />
                  </span>
                  <div className="news-item-info">
                    <h5 className="name m-0 mb-xs"><a href="#">First Human Colony on Mars</a></h5>
                    <p className="fs-mini">
                      First 700 people will take part in building first human settlement outside of Earth.
                      That&apos;s awesome, right?
                    </p>
                    <time className="help-block">Mar 20, 18:46</time>
                  </div>
                </li>
                <li>
                  <span className="icon bg-info text-white">
                    <i className="fa fa-microphone" />
                  </span>
                  <div className="news-item-info">
                    <h5 className="name m-0 mb-xs"><a href="#">Light Blue reached $300</a></h5>
                    <p className="fs-mini">
                      Light Blue Inc. shares just hit $300 price. &quot;This was inevitable. It should
                      have happen sooner or later&quot; - says NYSE expert.
                    </p>
                    <time className="help-block">Sep 25, 11:59</time>
                  </div>
                </li>
                <li>
                  <span className="icon bg-success text-white">
                    <i className="fa fa-eye" />
                  </span>
                  <div className="news-item-info">
                    <h5 className="name m-0 mb-xs"><a href="#">No more spying</a></h5>
                    <p className="fs-mini">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                    <time className="help-block">Mar 20, 18:46</time>
                  </div>
                </li>
              </ul>

              <Modal isOpen={this.state.modal} toggle={this.toggleModal} id="news-close-modal">
                <ModalHeader toggle={this.toggleModal} id="news-close-modal-label">Sure?</ModalHeader>
                <ModalBody className="bg-white">
                  Do you really want to unrevertably remove this super news widget?
                </ModalBody>
                <ModalFooter>
                  <Button color="default" onClick={this.toggleModal} data-dismiss="modal">No</Button>{' '}
                  <Button color="danger" data-widgster="close" id="news-widget-remove">Yes,
                    remove widget</Button>
                </ModalFooter>
              </Modal>

            </Widget>

            <Widget
              className="locked" data-widgster-collapsed="true"
              title={<h6>Collapsed by default & locked</h6>}
              collapse close
            >
              <div className="widget-body">
                <blockquote>
                  There are no limits. There are plateaus, but you must not stay there, you must go beyond
                  them. If it kills you, it kills you. A man must constantly exceed his level.
                  <footer>
                    Bruce Lee
                  </footer>
                </blockquote>
                <p>To make a widget initially collapsed just add
                  <code>data-widgster-collapsed=&quot;true&quot;</code> attribute
                  to <code>.widget</code>.</p>
                <p>To make it locked (prevent dragging) add <code>.locked</code> class.</p>
              </div>
            </Widget>

            <Widget
              className="bg-gray"
              bodyClass={'p-0'}
            >
              <div className="jumbotron handle bg-gray text-white mb-0">
                <div className="container">
                  <h1>Draggable story!</h1>
                  <p className="lead">
                    <em>Build</em> your own
                    interfaces! Sit back and relax.
                  </p>
                  <p className="text-center">
                    <a className="btn btn-danger btn-lg" data-widgster="fullscreen">
                      Fullscreen me! &nbsp;
                      <i className="fa fa-check" />
                    </a>
                  </p>
                  <a className="btn btn-danger btn-lg" data-widgster="restore">
                    Want to go back?
                  </a>
                </div>
              </div>

            </Widget>
          </Col>
        </Row>

      </div>);
  }

}

export default withStyles(s)(Grid);
