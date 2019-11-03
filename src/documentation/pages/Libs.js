import React, {Component} from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/prism';
import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';
import {Sparklines, SparklinesBars} from "react-sparklines";
import ColorPiker from 'rc-color-picker';
import TextareaAutosize from 'react-autosize-textarea';
import DateTime from 'react-datetime';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import Select from 'react-select';
import { Editor } from 'react-draft-wysiwyg';
import MaskedInput from 'react-maskedinput'
import Scrollspy from './ScrollSpyComponent';
import { Link } from 'react-router-dom';

import Widget from '../../components/Widget/Widget';
import s from '../../pages/forms/elements/Elements.module.scss';
import Skycon from "../../components/Skycon/Skycon";

const SliderWithTooltip = createSliderWithTooltip(Slider);

export default class Libs extends Component {
  state = {
    mde: '',
  };

  onMdeChange(value) {
    this.setState({
      mde: value,
    })
  };

  valueFormatter = (v) => {
    return `${v}`;
  }

  render() {
    return (
      <Row className={s.root}>
        <Col md={10}>
          <Breadcrumb>
            <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
            <BreadcrumbItem>Documentation</BreadcrumbItem>
            <BreadcrumbItem active>Libs</BreadcrumbItem>
          </Breadcrumb>
        </Col>
        <Col lg={9}>
          <Widget id="Animate.css">
            <h3>Animate.css</h3>
            <p>animate.css is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great
              for emphasis, home pages, sliders, and general just-add-water-awesomeness.</p>
            <h4>Example</h4>
            <h1 className="animated infinite fadeIn slow mt mb">Fade in</h1>
            <SyntaxHighlighter language='javascript'
                               style={tomorrow}>{'<h1 class="animated infinite fadeIn slow">Fade in</h1>'}</SyntaxHighlighter>
            <p>For more examples please refer to <a href="https://github.com/daneden/animate.css/"
                                                    target="_blank" rel="noopener noreferrer">Animate.css</a></p>
          </Widget>
          <Widget id="RC-Slider">
            <h3>RC-Slider Slider UI component for React</h3>
            <p>Supports IE9, IE9+, Chrome, Firefox & Safari</p>
            <h4>Example</h4>
            <SliderWithTooltip 
              style={{width: '210px'}}
              tipFormatter={this.valueFormatter}
              className={`${s.sliderCustomization} ${s.horizontalSlider} ${s.sliderBlue}`}
              defaultValue={20}
            />
            <SyntaxHighlighter language='javascript' style={tomorrow}>{'<SliderWithTooltip\n' +
            '  tipFormatter={this.valueFormatter}\n' +
            '  className="sliderCustomization horizontalSlider sliderBlue"\n' +
            '  defaultValue={20}\n' +
            '/>'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/react-component/slider" target="_blank" rel="noopener noreferrer">rc-slider</a></p>
          </Widget>
          <Widget id="Font-Awesome">
            <h3>Font-awesome</h3>
            <p>The iconic SVG, font, and CSS toolkit</p>
            <h4>Examples</h4>
            <i className="fa fa-arrow-left fa-2x mr"/>
            <i className="fa fa-github fa-2x mr"/>
            <i className="fa fa-bath fa-2x mr"/>
            <i className="fa fa-grav fa-2x mr"/>
            <i className="fa fa-telegram fa-2x"/>
            <SyntaxHighlighter language='javascript'
                               style={tomorrow}>{'<i className="fa fa-arrow-left fa-2x mr" />\n' +
            '<i className="fa fa-github fa-2x mr" />\n' +
            '<i className="fa fa-bath fa-2x mr" />\n' +
            '<i className="fa fa-grav fa-2x mr" />\n' +
            '<i className="fa fa-telegram fa-2x" />'}</SyntaxHighlighter>
            <p className="lead">Want to see examples? <Link to="/app/components/icons">Click</Link></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/FortAwesome/Font-Awesome"
                                                                      target="_blank" rel="noopener noreferrer">Font Awesome</a></p>
          </Widget>
          <Widget id="Formsy-React">
            <h3>Formsy-react</h3>
            <p>A form input builder and validator for React JS</p>
            <p className="lead">Want to see examples? <Link to="/app/forms/wizard">Click</Link></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/formsy/formsy-react"
                                                                      target="_blank" rel="noopener noreferrer">Formcy React</a></p>
          </Widget>
          <Widget id="Fullcalendar">
            <h3>Fullcalendar</h3>
            <p>A JavaScript event calendar. Customizable and open source.</p>
            <p className="lead">Want to see examples? <Link to="/app/extra/calendar">Click</Link></p>
            <p>For more examples and documentation please refer to <a
              href="https://fullcalendar.io/docs/react" target="_blank" rel="noopener noreferrer">Fullcalendar</a></p>
          </Widget>
          <Widget id="Glyphicons-Halflings">
            <h3>Glyphicons-halflings</h3>
            <p>TIncludes over 250 glyphs in font format from the Glyphicon Halflings set</p>
            <h4>Examples</h4>
            <i className="glyphicon glyphicon-asterisk mr"/>
            <i className="glyphicon glyphicon-heart mr"/>
            <i className="glyphicon glyphicon-home mr"/>
            <i className="glyphicon glyphicon-refresh mr"/>
            <i className="glyphicon glyphicon-camera"/>
            <SyntaxHighlighter language='javascript'
                               style={tomorrow}>{'<i className="glyphicon glyphicon-asterisk mr" />\n' +
            '<i className="glyphicon glyphicon-heart mr" />\n' +
            '<i className="glyphicon glyphicon-home mr" />\n' +
            '<i className="glyphicon glyphicon-refresh mr" />\n' +
            '<i className="glyphicon glyphicon-camera" />'}</SyntaxHighlighter>
            <p className="lead">Want to see examples? <Link to="/app/ui/icons">Click</Link></p>
            <p>For more examples and documentation please refer to <a
              href="https://getbootstrap.com/docs/3.3/components/" target="_blank" rel="noopener noreferrer">Glyphicons</a></p>
          </Widget>
          <Widget id="Line-Awesome">
            <h3>Line-awesome</h3>
            <p>A single file that replaces Font Awesome with modern line icons.</p>
            <h4>Examples</h4>
            <i className="la la-arrow-left la-2x mr"/>
            <i className="la la-github la-2x mr"/>
            <i className="la la-facebook la-2x mr"/>
            <SyntaxHighlighter language='javascript'
                               style={tomorrow}>{'<i className="la la-arrow-left la-2x mr" />\n' +
            '<i className="la la-github la-2x mr" />\n' +
            '<i className="la la-facebook la-2x mr" />'}</SyntaxHighlighter>
            <p className="lead">Want to see examples? <Link to="/app/ui/icons">Click</Link></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/FortAwesome/Font-Awesome"
                                                                      target="_blank" rel="noopener noreferrer">Font Awesome</a></p>
          </Widget>
          <Widget id="React-Sparkline">
            <h3>React-sparkline</h3>
            <p>This React.js plugin makes it easy to generate a number of different types of sparklines directly in the
              browser, using few lines of JSX.</p>
            <Sparklines data={[13, 14, 16, 15, 4, 14, 20]} style={{width: '70px', height: '30px', marginRight: '10px'}}>
              <SparklinesBars style={{stroke: 'white', fill: '#618fb0'}}/>
            </Sparklines>
            <Sparklines data={[14, 12, 16, 11, 17, 19, 16]} style={{width: '70px', height: '30px'}}>
              <SparklinesBars style={{stroke: 'white', fill: '#999'}}/>
            </Sparklines>
            <SyntaxHighlighter language='javascript'
                               style={tomorrow}>{'<Sparklines data={[13, 14, 16, 15, 4, 14, 20]} style={{ width: \'70px\', height: \'30px\', marginRight: \'10px\' }}>\n' +
            '  <SparklinesBars style={{ stroke: \'white\', fill: \'#618fb0\' }} />\n' +
            '</Sparklines>\n' +
            '<Sparklines data={[14, 12, 16, 11, 17, 19, 16]} style={{ width: \'70px\', height: \'30px\' }}>\n' +
            '  <SparklinesBars style={{ stroke: \'white\', fill: \'#999\' }} />\n' +
            '</Sparklines>'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/borisyankov/react-sparklines" target="_blank" rel="noopener noreferrer">React Sparklines</a></p>
          </Widget>
          <Widget id="React-Toastify">
            <h3>React Toastify</h3>
            <p>Growl-style alerts and messages</p>
            <p className="lead">Want to see examples? <Link to="/app/ui/notifications">Click</Link></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/fkhadra/react-toastify"
                                                                      target="_blank" rel="noopener noreferrer">react-toastify</a></p>
          </Widget>
          <Widget id="Rc-color-picker">
            <h3>Rc-color-picker</h3>
            <p>Color piker component for React</p>
            <ColorPiker/>
            <SyntaxHighlighter language='javascript'
                               style={tomorrow}>{'<ColorPiker />'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/react-component/color-picker" target="_blank" rel="noopener noreferrer">Color Picker</a></p>
          </Widget>
          <Widget id="Rc-Hammerjs">
            <h3>Rc-hammerjs</h3>
            <p>ReactJS / HammerJS integration. Support touch events in your React app.</p>
            <p>For more examples and documentation please refer to <a href="https://github.com/JedWatson/react-hammerjs"
                                                                      target="_blank" rel="noopener noreferrer">HammerJS</a></p>
          </Widget>
          <Widget id="React-Autosize-Textarea">
            <h3>react-autosize-textarea</h3>
            <p>A light replacement for built-in <code>&lt;textarea /></code> component which automatically adjusts its
              height to match the content.</p>
            <TextareaAutosize placeholder="Try to type"/>
            <SyntaxHighlighter language='javascript'
                               style={tomorrow}>{'<TextareaAutosize placeholder="Try to type"/>'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/buildo/react-autosize-textarea" target="_blank" rel="noopener noreferrer">Textarea</a></p>
          </Widget>
          <Widget id="React-Datetime">
            <h3>React-datetime</h3>
            <p>A date and time picker in the same React.js component</p>
            <div style={{width: '150px'}}>
              <DateTime/>
            </div>
            <SyntaxHighlighter language='javascript'
                               style={tomorrow}>{'<DateTime />'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/YouCanBookMe/react-datetime" target="_blank" rel="noopener noreferrer">DateTime</a></p>
          </Widget>
          <Widget id="React-dropzone">
            <h3>React-dropzone</h3>
            <p>Simple HTML5-compliant drag'n'drop zone for files built with React.js.</p>
            <p className="lead">Want to see examples? <Link to="/app/forms/elements">Click</Link></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/react-dropzone/react-dropzone" target="_blank" rel="noopener noreferrer">React Dropzone</a></p>
          </Widget>
          <Widget id="React-Draft-Wysiwyg">
            <h3>React-draft-wysiwyg</h3>
            <p>A Wysiwyg editor built using ReactJS and DraftJS libraries</p>
            <Editor/>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/jpuri/react-draft-wysiwyg" target="_blank" rel="noopener noreferrer">React Wysiwyg</a></p>
          </Widget>
          <Widget id="React-Google-Maps">
            <h3>React-google-maps</h3>
            <p>React.js Google Maps integration component</p>
            <p className="lead">Want to see examples? <Link to="/app/maps/google">Click</Link></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/tomchentw/react-google-maps" target="_blank" rel="noopener noreferrer">Google Maps</a></p>
          </Widget>
          <Widget id="React-Maskedinput">
            <h3>React-maskedinput</h3>
            <p>A React component for <code>&lt;input></code> masking, built on top of inputmask-core.</p>
            <div style={{width: '200px'}}>
              <MaskedInput mask="1111 1111 1111 1111" name="card" size="20" className="form-control"/>
            </div>
            <SyntaxHighlighter language='javascript'
                               style={tomorrow}>{'<MaskedInput mask="1111 1111 1111 1111" name="card" size="20" className="form-control"/>'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a href="https://github.com/insin/react-maskedinput"
                                                                      target="_blank" rel="noopener noreferrer">Masked Input</a></p>
          </Widget>
          <Widget id="React-MDE">
            <h3>React-mde</h3>
            <p>A simple yet powerful and extensible Markdown Editor editor for React. React-mde is built on top of
              Draft.js.</p>

            <p>For more examples and documentation please refer to <a href="https://github.com/andrerpena/react-mde"
                                                                      target="_blank" rel="noopener noreferrer">ReactMDE</a></p>
          </Widget>
          <Widget id="React-Select">
            <h3>React-select</h3>
            <p>A flexible and beautiful Select Input</p>
            <Select options={
              [{ value: 'chocolate', label: 'Chocolate' },
               { value: 'strawberry', label: 'Strawberry' },
               { value: 'vanilla', label: 'Vanilla' }]}            
            />
            <p>For more examples and documentation please refer to <a href="https://react-select.com/home" target="_blank" rel="noopener noreferrer">React Select</a></p>
          </Widget>
          <Widget id="React-Shuffle">
            <h3>React-shuffle</h3>
            <p>Animated shuffling of child components on change.</p>
            <p className="lead">Want to see examples? <Link to="/app/extra/gallery">Click</Link></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/FormidableLabs/react-shuffle" target="_blank" rel="noopener noreferrer">Shuffle</a></p>
          </Widget>
          <Widget id="React-Slick">
            <h3>React-slick</h3>
            <p>React carousel component</p>
            <p className="lead">Want to see examples? <Link to="/app/ecommerce/product">Click</Link></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/FormidableLabs/react-shuffle" target="_blank" rel="noopener noreferrer">React Slick</a></p>
          </Widget>
          <Widget id="React-Sortable">
            <h3>React-sortable</h3>
            <p>A components to turn any list into an animated, touch-friendly, sortable list.</p>
            <p className="lead">Want to see examples? <Link to="/app/ui/list-groups">Click</Link></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/clauderic/react-sortable-hoc" target="_blank" rel="noopener noreferrer">React Sortable</a></p>
          </Widget>
          <Widget id="Reactstrap">
            <h3>Reactstrap</h3>
            <p>React wrapper for Bootstrap 4</p>
            <Button color="success">Bootstrap Button</Button>
            <SyntaxHighlighter language='javascript'
                               style={tomorrow}>{' <Button color="success">Bootstrap Button</Button>'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/clauderic/react-sortable-hoc" target="_blank" rel="noopener noreferrer">Reactstrap</a></p>
          </Widget>
          <Widget id="Rickshaw">
            <h3>rickshaw</h3>
            <p>JavaScript toolkit for creating interactive real-time graphs</p>
            <p className="lead">Want to see examples? <Link to="/app/charts/rickshaw">Click</Link></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/shutterstock/rickshaw" target="_blank" rel="noopener noreferrer">Rickshaw</a></p>
          </Widget>
          <Widget id="Skycons">
            <h3>Skycons</h3>
            <p>Skycons is a set of ten animated weather glyphs, procedurally generated by JavaScript using the HTML5 canvas tag.</p>
            <Skycon icon="CLEAR_DAY" color="#17a2b8" width="40" height="40" />
            <p>For more examples and documentation please refer to <a
              href="https://github.com/darkskyapp/skycons" target="_blank" rel="noopener noreferrer">Skycons</a></p>
          </Widget>
          <Widget id="Other">
            <h3 className="">Other Libs</h3>
            <ul className="check-list">
              <li className="lead">
                <a className="fw-semi-bold" href="https://www.amcharts.com/docs/v4/getting-started/integrations/using-react/" rel="noopener noreferrer" target="_blank"> @amcharts</a>.
                JavaScript Charts & Maps Programming library for all your data visualization needs.
              </li>
              <li className="lead">
                <a className="fw-semi-bold" href="https://github.com/ameyms/react-animated-number" rel="noopener noreferrer" target="_blank"> react-animated-number</a>.
                A simple animated number for React.
              </li>
              <li className="lead">
                <a className="fw-semi-bold" href="https://react-bootstrap.github.io/" rel="noopener noreferrer" target="_blank"> React Bootstrap</a>.
                With React Bootstrap you can build responsive, mobile-first projects on the web using React.js and the world's
                most popular front-end CSS library — Bootstrap v4.
              </li>
              <li className="lead">
                <a className="fw-semi-bold" href="https://github.com/highcharts/highcharts-react" rel="noopener noreferrer" target="_blank"> highcharts-react</a>.
                Make your data come alive. Highcharts makes it easy for developers to set up interactive charts in their web pages.
              </li>
              <li className="lead">
                <a className="fw-semi-bold" href="https://github.com/apexcharts/react-apexcharts" rel="noopener noreferrer" target="_blank"> react-apexcharts</a>.
                Modern & Interactive Open-source Charts.
              </li>
              <li className="lead">
                <a className="fw-semi-bold" href="https://github.com/frontend-collective/react-sortable-tree" rel="noopener noreferrer" target="_blank"> react-sortable-tree</a>.
                This is a draggable tree component.
              </li>
              <li className="lead">
                <a className="fw-semi-bold" href="https://github.com/hustcc/echarts-for-react" rel="noopener noreferrer" target="_blank"> echarts-for-react</a>.
                A Declarative Framework for Rapid Construction of Web-based Visualization
              </li>
              <li className="lead">
                <a className="fw-semi-bold" href="https://github.com/olahol/react-tagsinput" rel="noopener noreferrer" target="_blank"> react-tagsinput</a>.
                Highly customizable React component for inputing tags.
              </li>
              <li className="lead">
                <a className="fw-semi-bold" href="https://github.com/tannerlinsley/react-table" rel="noopener noreferrer" target="_blank"> react-table</a>.
                This React package offers an easy and intuitive way of displaying Bootstrap-styled grids with data coming
                either from the client or from the server.
              </li>
              <li className="lead">
                <a className="fw-semi-bold" href="https://github.com/unsplash/react-trend" rel="noopener noreferrer" target="_blank"> react-trend</a>.
                Simple, elegant spark lines for React.js.
              </li>
            </ul>
          </Widget>
        </Col>
        <Col lg={3}>
          <Scrollspy
            title="LIBS"
            prefix="libs"
            ids={[
            'Animate.css',
            'RC-Slider',
            'Font-Awesome',
            'Formsy-React',
            'Fullcalendar',
            'Glyphicons-Halflings',
            'Line-Awesome',
            'React-Sparkline',
            'React-Toastify',
            'Rc-color-picker',
            'Rc-Hammerjs',
            'React-Autosize-Textarea',
            'React-Datetime',
            'React-dropzone',
            'React-Google-Maps',
            'React-Maskedinput',
            'React-MDE',
            'React-Select',
            'React-Shuffle',
            'React-Slick',
            'React-Sortable',
            'Reactstrap',
            'Rickshaw',
            'Skycons',
            'Other'
          ]} />
        </Col>
      </Row>
    )
  }
}
