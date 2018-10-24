import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

import Widget from '../../components/Widget';
import s from './SPackage.module.scss';
import reactLogo from '../../images/react-logo.svg';
import angularLogo from '../../images/angularjs-logo.svg';
import angularJSLogo from '../../images/angular-logo.svg';
import vueLogo from '../../images/vue-logo.svg';
import jsLogo from '../../images/js-logo.svg';

class SPackage extends React.Component {

  render() {
    return (
      <div>
        <h2 className="page-title">Sing - <span className="fw-semi-bold">Package</span>&nbsp;
          <small>More than 2000 man-hours already invested!</small>
        </h2>
        <p className="lead">You will get access to all those versions
          listed below after you purchase any Sing licence!</p>
        <Row>
          <Col lg={5} md={6}>
            <Widget
              title={
                <h6>React JS Version</h6>
              } settings collapse close
            >
              <img className={['rounded pull-left mb-1 mr-3', s.image].join(' ')} src={reactLogo} width="80" alt="" />
              <h3>React JS Version</h3>
              <p className="text-muted">We spent another <span className="fw-semi-bold">500</span> man-hours
                developing and designing
                React version, to save you time and money.</p>
              <p><a href="https://reactjs.org/" rel="nofollow noopener noreferrer" target="_blank">React</a> is
                the most trendy and advanced
                component-based JavaScript library for building user interfaces. Our React
                version follows latest industry
                best practices and uses <strong>Redux</strong> as a state manager and
                supports <strong>Server Side Rendering</strong> which makes this app incredibly fast
                and SEO-friendly.
              </p>
              <p>This version is a great choice when you want to be in control
                of your own codebase and
                decide on development approaches that are the best for your project.
                <a href="https://webpack.js.org/">Webpack</a> Module Bundler and Yarn as a package
                manager are under the hood.</p>
              <button className="btn btn-transparent btn-lg btn-block disabled">(You are here)</button>
            </Widget>
          </Col>
          <Col lg={5} md={6} xs={12}>
            <Widget
              title={
                <h6>Angular Version</h6>
              } settings collapse close
            >
              <img className={['rounded pull-left mb-1 mr-3', s.image].join(' ')} src={angularLogo} width="80" alt="" />
              <h3>Angular 2+ Version</h3>
              <p className="text-muted">We spent around <span className="fw-semi-bold">500</span> man-hours
                developing and designing
                Angular version, to match high engineering requirements.</p>
              <p><a href="https://angular.io" rel="nofollow noopener noreferrer" target="_blank">Angular</a> is the
                most mature and wide spread
                front-end framework created by Google and used by many established enterprises.
                It is a very good choice when
                your expect your application to have a well-engineered structure
                and development workflow. If you are familiar
                with Java or .NET ecosystems Angular is definitely your choice.
              </p>
              <p>Our app is built on top of latest <strong>Angular 5.0</strong> version and
                uses <a href="https://webpack.js.org/">Webpack</a> Module Bundler and NPM as a package manager,
                so everything
                works out of the box! <br /><br /></p>
              <a
                className="btn btn-default btn-lg btn-block"
                href="https://demo.flatlogic.com/sing-app/angular/"
              >
                Go to Demo
              </a>
            </Widget>
          </Col>
          <Col lg={5} md={6}>
            <Widget
              title={
                <h6>AngularJS 1.X Version</h6>
              } settings collapse close
            >
              <img className={['rounded pull-left mb-1 mr-3', s.image].join(' ')} src={angularJSLogo} width="80" alt="" />
              <h3>AngularJS Version</h3>
              <p className="text-muted">We don’t know about you but we’re very excited that it’s finally here!
                Our brand new Light Blue Angular version.</p>
              <p><strong>Angular 1.0</strong> have so many opportunities in comparison to HTML. It lets you
                extend HTML vocabulary.
                And as a result your application can be very expressive and readable.
                <strong>Directives</strong> can hide complex DOM structure, CSS. They can let you invent new
                HTML syntax, specific to your application.
                We strongly believe that there’s nothing better than arranging an outstanding end-user experience.</p>
              <p><a href="https://reactjs.org/" rel="nofollow noopener noreferrer" target="_blank">Angular</a>
                should be definitely
                among your top considerations when choosing the right framework.</p>
              <p>Angular version makes it possible by letting responsive, fast-loading and
                seamlessly-navigating application.</p>
              <a
                className="btn btn-default btn-lg btn-block"
                href="https://demo.flatlogic.com/sing-app/angularjs/"
              >
                Go to Demo
              </a>
            </Widget>
          </Col>
          <Col lg={5} md={6} xs={12}>
            <Widget
              title={
                <h6>Pure HTML5 Version</h6>
              } settings collapse close
            >
              <img className={['rounded pull-left mb-1 mr-3', s.image].join(' ')} src={jsLogo} width="80" alt="" />
              <h3>HTML5 Version</h3>
              <p className="text-muted">During last 4 years we
                invested more than <span className="fw-semi-bold">1000</span> man-hours
                crafting and maintaining this version.</p>
              <p>Basic HTML version is the most generic version of Light Blue App
                that can be used with any platform
                starting from PHP and Rails to .NET and Java. It contains pure
                w3c-validated <strong>HTML5</strong> markup
                and valid <strong>CSS3</strong> styles. It can work in two modes:
                (a) as a <strong>Single
                  Page Application</strong>, using ajax to fetch page contents, or
                (b) as a static application, where
                pages served directly from server.
                The mode can be switched by changing the
                value of &nbsp;<code>window.PJAX_ENABLED</code> global variable.</p>
              <p>Moreover, this version comes with three different color
                schemes which you can easily switch based on your choice.</p>
              <a
                className="btn btn-default btn-lg btn-block"
                href="https://demo.flatlogic.com/sing-app/html-bs4/dashboard/index.html"
              >
                Go to Demo
              </a>
            </Widget>
          </Col>
          <Col lg={5} md={6}>
            <Widget
              title={
                <h6>Vue JS Version</h6>
              } settings collapse close
            >
              <img className={['rounded pull-left mb-1 mr-3', s.image].join(' ')} src={vueLogo} width="80" alt="" />
              <h3>VUE JS Version</h3>
              <p className="text-muted">Coming soon version. Seed
                project is <span className="fw-semi-bold">50%</span> ready.</p>
              <p><a href="https://reactjs.org/" rel="nofollow noopener noreferrer" target="_blank">Vue</a> is a
                an open-source progressive
                JavaScript framework for building user interfaces. Vue is designed to be
                incrementally adoptable meaning that
                adding new libraries is made incredibly easy.
              </p>
              <p>Creating Vue JS version is a main
                priority of <a href="https://flatlogic.com">Flatlogic</a> for next months,
                so seed version will ready really soon! <br /><br /><br /><br /><br /></p>
                <a
                  className="btn btn-default btn-lg btn-block"
                  href="https://sing-app-vue-full.herokuapp.com/"
                >
                Go to Demo
              </a>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SPackage;
