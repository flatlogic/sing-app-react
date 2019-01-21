import React, {Component} from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/styles/prism';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import {Sparklines, SparklinesBars} from "react-sparklines";
import ColorPiker from 'rc-color-picker';
import TextareaAutosize from 'react-autosize-textarea';
import DateTime from 'react-datetime';
import { Editor } from 'react-draft-wysiwyg';
import MaskedInput from 'react-maskedinput'
import Select2 from 'react-select2-wrapper';

import Widget from '../../components/Widget';
import s from '../forms/elements/Elements.module.scss';
import Skycon from "../../components/Skycon/Skycon";

export default class Libs extends Component {
  state = {
    mde: '',
  };

  onMdeChange(value) {
    this.setState({
      mde: value,
    })
  };

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
        <Col md={8}>
          <Widget>
            <h3>Animate.css</h3>
            <p>animate.css is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great
              for emphasis, home pages, sliders, and general just-add-water-awesomeness.</p>
            <h4>Example</h4>
            <h1 className="animated infinite fadeIn slow mt mb">Fade in</h1>
            <SyntaxHighlighter language='javascript'
                               style={base16AteliersulphurpoolLight}>{'<h1 class="animated infinite fadeIn slow">Fade in</h1>'}</SyntaxHighlighter>
            <p>For more examples please refer to <a href="https://github.com/daneden/animate.css/"
                                                    target="_blank">Animate.css</a></p>
          </Widget>
          <Widget>
            <h3>Bootstrap-slide & React-bootstrap-slider</h3>
            <p>A complete rewrite of the original bootstrap-slider by Stefan Petre.</p>
            <h4>Example</h4>
            <ReactBootstrapSlider
              value={4}
              step={2}
              max={10}
              min={0}
              orientation="horizontal"
            />
            <SyntaxHighlighter language='javascript' style={base16AteliersulphurpoolLight}>{'<ReactBootstrapSlider\n' +
            '  value={4}\n' +
            '  step={2}\n' +
            '  max={10}\n' +
            '  min={0}\n' +
            '  orientation="horizontal"\n' +
            '/>'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/brownieboy/react-bootstrap-slider" target="_blank">React Bootstrap Slider</a></p>
          </Widget>
          <Widget>
            <h3>Easy-pie-chart</h3>
            <p>Lightweight plugin to render simple, animated and retina optimized pie charts.</p>
            <p className="lead">Want to see examples? <a href="/app/charts/easy-pie">Click</a></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/rendro/easy-pie-chart"
                                                                      target="_blank">Easy Pie Charts</a></p>
          </Widget>
          <Widget>
            <h3>Flot & React-flot</h3>
            <p>Flot is a Javascript plotting library for jQuery.</p>
            <p className="lead">Want to see examples? <a href="/app/charts/flot">Click</a></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/flot/flot"
                                                                      target="_blank">Flor</a></p>
          </Widget>
          <Widget>
            <h3>Font-awesome</h3>
            <p>The iconic SVG, font, and CSS toolkit</p>
            <h4>Examples</h4>
            <i className="fa fa-arrow-left fa-2x mr"/>
            <i className="fa fa-github fa-2x mr"/>
            <i className="fa fa-bath fa-2x mr"/>
            <i className="fa fa-grav fa-2x mr"/>
            <i className="fa fa-telegram fa-2x"/>
            <SyntaxHighlighter language='javascript'
                               style={base16AteliersulphurpoolLight}>{'<i className="fa fa-arrow-left fa-2x mr" />\n' +
            '<i className="fa fa-github fa-2x mr" />\n' +
            '<i className="fa fa-bath fa-2x mr" />\n' +
            '<i className="fa fa-grav fa-2x mr" />\n' +
            '<i className="fa fa-telegram fa-2x" />'}</SyntaxHighlighter>
            <p className="lead">Want to see examples? <a href="/app/components/icons">Click</a></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/FortAwesome/Font-Awesome"
                                                                      target="_blank">Font Awesome</a></p>
          </Widget>
          <Widget>
            <h3>Formsy-react</h3>
            <p>A form input builder and validator for React JS</p>
            <p className="lead">Want to see examples? <a href="/app/forms/wizard">Click</a></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/formsy/formsy-react"
                                                                      target="_blank">Formcy React</a></p>
          </Widget>
          <Widget>
            <h3>Fullcalendar</h3>
            <p>A JavaScript event calendar. Customizable and open source.</p>
            <p className="lead">Want to see examples? <a href="/app/extra/calendar">Click</a></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/fullcalendar/fullcalendar" target="_blank">Fullcalendar</a></p>
          </Widget>
          <Widget>
            <h3>Glyphicons-halflings</h3>
            <p>TIncludes over 250 glyphs in font format from the Glyphicon Halflings set</p>
            <h4>Examples</h4>
            <i className="glyphicon glyphicon-asterisk mr"/>
            <i className="glyphicon glyphicon-heart mr"/>
            <i className="glyphicon glyphicon-home mr"/>
            <i className="glyphicon glyphicon-refresh mr"/>
            <i className="glyphicon glyphicon-camera"/>
            <SyntaxHighlighter language='javascript'
                               style={base16AteliersulphurpoolLight}>{'<i className="glyphicon glyphicon-asterisk mr" />\n' +
            '<i className="glyphicon glyphicon-heart mr" />\n' +
            '<i className="glyphicon glyphicon-home mr" />\n' +
            '<i className="glyphicon glyphicon-refresh mr" />\n' +
            '<i className="glyphicon glyphicon-camera" />'}</SyntaxHighlighter>
            <p className="lead">Want to see examples? <a href="/app/ui/icons">Click</a></p>
            <p>For more examples and documentation please refer to <a
              href="https://getbootstrap.com/docs/3.3/components/" target="_blank">Glyphicons</a></p>
          </Widget>
          <Widget>
            <h3>Govpredict-morris</h3>
            <p>Pretty time-series line graphs</p>
            <p className="lead">Want to see examples? <a href="/app/charts/morris">Click</a></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/morrisjs/morris.js"
                                                                      target="_blank">Morris</a></p>
          </Widget>
          <Widget>
            <h3>Jquery-mapael</h3>
            <p>Ease the build of pretty data visualizations on dynamic vector maps</p>
            <p className="lead">Want to see examples? <a href="/app/main/dashboard">Click</a></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/neveldo/jQuery-Mapael"
                                                                      target="_blank">Mapael</a></p>
          </Widget>
          <Widget>
            <h3>Jquery-sparkline & React-sparkline</h3>
            <p>This jQuery plugin makes it easy to generate a number of different types of sparklines directly in the
              browser, using online a line of two of HTML and Javascript.</p>
            <Sparklines data={[13, 14, 16, 15, 4, 14, 20]} style={{width: '70px', height: '30px', marginRight: '10px'}}>
              <SparklinesBars style={{stroke: 'white', fill: '#618fb0'}}/>
            </Sparklines>
            <Sparklines data={[14, 12, 16, 11, 17, 19, 16]} style={{width: '70px', height: '30px'}}>
              <SparklinesBars style={{stroke: 'white', fill: '#999'}}/>
            </Sparklines>
            <SyntaxHighlighter language='javascript'
                               style={base16AteliersulphurpoolLight}>{'<Sparklines data={[13, 14, 16, 15, 4, 14, 20]} style={{ width: \'70px\', height: \'30px\', marginRight: \'10px\' }}>\n' +
            '  <SparklinesBars style={{ stroke: \'white\', fill: \'#618fb0\' }} />\n' +
            '</Sparklines>\n' +
            '<Sparklines data={[14, 12, 16, 11, 17, 19, 16]} style={{ width: \'70px\', height: \'30px\' }}>\n' +
            '  <SparklinesBars style={{ stroke: \'white\', fill: \'#999\' }} />\n' +
            '</Sparklines>'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/borisyankov/react-sparklines" target="_blank">React Sparklines</a></p>
          </Widget>
          <Widget>
            <h3>Jquery-ui</h3>
            <p>The official jQuery user interface library.</p>
            <p className="lead">Want to see examples? <a href="/app/grid">Click</a></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/jquery/jquery-ui"
                                                                      target="_blank">Jquery UI</a></p>
          </Widget>
          <Widget>
            <h3>Jquery.animate-number</h3>
            <p>jQuery numbers animation plugin, adds 'number' property and step function to jQuery's animate function
              properties.</p>
            <p className="lead">Want to see examples? <a href="/app/main/dashboard">Click</a></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/aishek/jquery-animateNumber" target="_blank">Animate Number</a></p>
          </Widget>
          <Widget>
            <h3>Jvectormap</h3>
            <p>jVectorMap is a vector-based, cross-browser and cross-platform component for interactive
              geography-related data visualization on the web. It
              provides numerious features like smooth zooming and panning, fully-customizable styling, markers, labels
              and tooltips.</p>
            <p className="lead">Want to see examples? <a href="/app/maps/vector">Click</a></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/bjornd/jvectormap"
                                                                      target="_blank">Vector Map</a></p>
          </Widget>
          <Widget>
            <h3>Line-awesome</h3>
            <p>A single file that replaces Font Awesome with modern line icons.</p>
            <h4>Examples</h4>
            <i className="la la-arrow-left la-2x mr"/>
            <i className="la la-github la-2x mr"/>
            <i className="la la-facebook la-2x mr"/>
            <SyntaxHighlighter language='javascript'
                               style={base16AteliersulphurpoolLight}>{'<i className="la la-arrow-left la-2x mr" />\n' +
            '<i className="la la-github la-2x mr" />\n' +
            '<i className="la la-facebook la-2x mr" />'}</SyntaxHighlighter>
            <p className="lead">Want to see examples? <a href="/app/ui/icons">Click</a></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/FortAwesome/Font-Awesome"
                                                                      target="_blank">Font Awesome</a></p>
          </Widget>
          <Widget>
            <h3>Messenger</h3>
            <p>Growl-style alerts and messages</p>
            <p className="lead">Want to see examples? <a href="/app/ui/notifications">Click</a></p>
            <p>For more examples and documentation please refer to <a href="https://github.com/HubSpot/messenger"
                                                                      target="_blank">Messenger</a></p>
          </Widget>
          <Widget>
            <h3>Metrojs</h3>
            <p>Metro JS is a JavaScript plugin for jQuery developed to easily enable Metro interfaces on the web.</p>
            <p className="lead">Want to see examples? <a href="/app/main/widgets">Click</a></p>
            <p>For more examples and documentation please refer to <a
              href="http://www.drewgreenwell.com/projects/metrojs" target="_blank">metrojs</a></p>
          </Widget>
          <Widget>
            <h3>Rc-color-picker</h3>
            <p>Color piker component for React</p>
            <ColorPiker/>
            <SyntaxHighlighter language='javascript'
                               style={base16AteliersulphurpoolLight}>{'<ColorPiker />'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/react-component/color-picker" target="_blank">Color Picker</a></p>
          </Widget>
          <Widget>
            <h3>Rc-hammerjs</h3>
            <p>ReactJS / HammerJS integration. Support touch events in your React app.</p>
            <p>For more examples and documentation please refer to <a href="https://github.com/JedWatson/react-hammerjs"
                                                                      target="_blank">HammerJS</a></p>
          </Widget>
          <Widget>
            <h3>react-autosize-textarea</h3>
            <p>A light replacement for built-in <code>&lt;textarea /></code> component which automatically adjusts its
              height to match the content.</p>
            <TextareaAutosize placeholder="Try to type"/>
            <SyntaxHighlighter language='javascript'
                               style={base16AteliersulphurpoolLight}>{'<TextareaAutosize placeholder="Try to type"/>'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/buildo/react-autosize-textarea" target="_blank">Textarea</a></p>
          </Widget>
          <Widget>
            <h3>React-datetime</h3>
            <p>A date and time picker in the same React.js component</p>
            <div style={{width: '150px'}}>
              <DateTime/>
            </div>
            <SyntaxHighlighter language='javascript'
                               style={base16AteliersulphurpoolLight}>{'<DateTime />'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/YouCanBookMe/react-datetime" target="_blank">DetaTime</a></p>
          </Widget>
          <Widget>
            <h3>React-draft-wysiwyg</h3>
            <p>A Wysiwyg editor built using ReactJS and DraftJS libraries</p>
            <Editor/>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/jpuri/react-draft-wysiwyg" target="_blank">React Wysiwyg</a></p>
          </Widget>
          <Widget>
            <h3>React-dropzone</h3>
            <p>Simple HTML5-compliant drag'n'drop zone for files built with React.js.</p>
            <p className="lead">Want to see examples? <a href="/app/forms/elements">Click</a></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/react-dropzone/react-dropzone" target="_blank">React Dropzone</a></p>
          </Widget>
          <Widget>
            <h3>React-google-maps</h3>
            <p>React.js Google Maps integration component</p>
            <p className="lead">Want to see examples? <a href="/app/maps/google">Click</a></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/tomchentw/react-google-maps" target="_blank">Google Maps</a></p>
          </Widget>
          <Widget>
            <h3>React-maskedinput</h3>
            <p>A React component for <code>&lt;input></code> masking, built on top of inputmask-core.</p>
            <div style={{width: '200px'}}>
              <MaskedInput mask="1111 1111 1111 1111" name="card" size="20" className="form-control"/>
            </div>
            <SyntaxHighlighter language='javascript'
                               style={base16AteliersulphurpoolLight}>{'<MaskedInput mask="1111 1111 1111 1111" name="card" size="20" className="form-control"/>'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a href="https://github.com/insin/react-maskedinput"
                                                                      target="_blank">Masked Input</a></p>
          </Widget>
          <Widget>
            <h3>React-mde</h3>
            <p>A simple yet powerful and extensible Markdown Editor editor for React. React-mde is built on top of
              Draft.js.</p>

            <p>For more examples and documentation please refer to <a href="https://github.com/andrerpena/react-mde"
                                                                      target="_blank">ReactMDE</a></p>
          </Widget>
          <Widget>
            <h3>React-select2-wrapper</h3>
            <p>React wrapper for Select2</p>
            <Select2
              style={{ width: '150px' }}
              multiple
              data={['bug', 'feature', 'documents', 'discussion']}
              options={
                {
                  placeholder: 'search by tags',
                }
              }
            />
            <p>For more examples and documentation please refer to <a href="https://github.com/rkit/react-select2-wrapper" target="_blank">Select2</a></p>
          </Widget>
          <Widget>
            <h3>React-shuffle</h3>
            <p>Animated shuffling of child components on change.</p>
            <p className="lead">Want to see examples? <a href="/app/extra/gallery">Click</a></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/FormidableLabs/react-shuffle" target="_blank">Shuffle</a></p>
          </Widget>
          <Widget>
            <h3>React-slick</h3>
            <p>React carousel component</p>
            <p className="lead">Want to see examples? <a href="/app/ecommerce/product">Click</a></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/FormidableLabs/react-shuffle" target="_blank">React Slick</a></p>
          </Widget>
          <Widget>
            <h3>React-sortable</h3>
            <p>A components to turn any list into an animated, touch-friendly, sortable list.</p>
            <p className="lead">Want to see examples? <a href="/app/ui/list-groups">Click</a></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/clauderic/react-sortable-hoc" target="_blank">React Sortable</a></p>
          </Widget>
          <Widget>
            <h3>Reactstrap</h3>
            <p>React wrapper for Bootstrap 4</p>
            <Button color="success">Bootstrap Button</Button>
            <SyntaxHighlighter language='javascript'
                               style={base16AteliersulphurpoolLight}>{' <Button color="success">Bootstrap Button</Button>'}</SyntaxHighlighter>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/clauderic/react-sortable-hoc" target="_blank">Reactstrap</a></p>
          </Widget>
          <Widget>
            <h3>rickshaw</h3>
            <p>JavaScript toolkit for creating interactive real-time graphs</p>
            <p className="lead">Want to see examples? <a href="/app/charts/rickshaw">Click</a></p>
            <p>For more examples and documentation please refer to <a
              href="https://github.com/shutterstock/rickshaw" target="_blank">Rickshaw</a></p>
          </Widget>
          <Widget>
            <h3>Skycons</h3>
            <p>Skycons is a set of ten animated weather glyphs, procedurally generated by JavaScript using the HTML5 canvas tag.</p>
            <Skycon icon="CLEAR_DAY" color="#17a2b8" width="40" height="40" />
            <p>For more examples and documentation please refer to <a
              href="https://github.com/darkskyapp/skycons" target="_blank">Skycons</a></p>
          </Widget>
        </Col>
      </Row>
    )
  }
}
