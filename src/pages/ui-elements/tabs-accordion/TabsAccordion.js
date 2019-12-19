/* eslint-disable */
import React from 'react';
import {
  Row,
  Col,
  Button,
  DropdownMenu,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap';
import classnames from 'classnames';

import s from './TabsAccordion.module.scss'

class TabsAccordion extends React.Component {

  constructor(props) {
    super(props);
    this.toggleFirstTabs = this.toggleFirstTabs.bind(this);
    this.toggleSecondTabs = this.toggleSecondTabs.bind(this);
    this.toggleThirdTabs = this.toggleThirdTabs.bind(this);
    this.toggleAccordionFirst = this.toggleAccordionFirst.bind(this);
    this.state = {
      activeFirstTab: 'tab11',
      activeSecondTab: 'tab22',
      activeThirdTab: 'tab31',
      dropdownOpen: false,
      accordionFirst: [false, false, false],
      accordionSecond: [false, true, false],
      accordionSecondContent: [{
        title: 'Collapsible Group Item', body: ` Get base styles and flexible support for collapsible components like accordions and navigation.
          Using the collapse plugin, we built a simple accordion by extending the panel component.`,
      }, {
        title: 'Normal Text Insertion', body: `
        Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very
              controversial point. I think the opposite actually. Everyone knows what is lore ipsum
              - it is easy to understand if text is lore ipsum. You'll automatically skip -
              because you know - it's just non-informative stub. But what if there some text like
              this one? You start to read it! But the goal of this text is different. The goal is
              the example. So a bit of Lore Ipsum is always very good practice. Keep it in mind!`,
      }, {
        title: 'Check It',
        body: ' Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s very controversial point. I think the opposite actually.',
      }],

      accordionFirstContent: [{
        title: 'Collapsible Group Item', body: ` Get base styles and flexible support for collapsible components like accordions and navigation.
          Using the collapse plugin, we built a simple accordion by extending the panel component.`,
      }, {
        title: 'Random from the Web', body: `
        <p><span class="fw-semi-bold">Light Blue</span> - is a next generation admin template based
        on the latest Metro design. There are few reasons we want to tell you, why we have created it:
        We didn't like the darkness of most of admin templates, so we created this light one.
        We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.
        We searched for a solution of how to make widgets look like real widgets, so we decided that
        deep background - is what makes widgets look real.
        </p>
        <p class="no-margin text-muted"><em>- Some One</em></p>
`,
      }, {
        title: 'Check It',
        body: ' Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s very controversial point. I think the opposite actually.',
      }],
    };
  }

  toggleFirstTabs(tab) {
    if (this.state.activeFirstTab !== tab) {
      this.setState({
        activeFirstTab: tab,
      });
    }
  }

  toggleSecondTabs(tab) {
    if (this.state.activeSecondTab !== tab) {
      this.setState({
        activeSecondTab: tab,
      });
    }
  }

  toggleThirdTabs(tab) {
    if (this.state.activeThirdTab !== tab) {
      this.setState({
        activeThirdTab: tab,
      });
    }
  }

  toggleAccordionFirst(id) {
    const arr = [];
    arr.length = this.state.accordionFirst.length;
    arr.fill(false);
    arr[id] = !this.state.accordionFirst[id];
    this.setState({
      accordionFirst: arr,
    });
  }

  toggleAccordionSecond(id) {
    const arr = [];
    arr.length = this.state.accordionSecond.length;
    arr.fill(false);
    arr[id] = !this.state.accordionSecond[id];
    this.setState({
      accordionSecond: arr,
    });
  }

  render() {
    return (
      <div>
        <h1 className="page-title">Tabs & Accordion - <span
          className="fw-semi-bold"
        >Components</span></h1>

        {/* Tabs */}
        <Row>
          <Col md="6" xs="12">
            <div className="clearfix">

              <Nav tabs className={`float-left ${s.coloredNav}`}>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeFirstTab === 'tab11' })}
                    onClick={() => { this.toggleFirstTabs('tab11'); }}
                  >
                    <span>Basic</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeFirstTab === 'tab12' })}
                    onClick={() => { this.toggleFirstTabs('tab12'); }}
                  >
                    <span>Assumtion</span>
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav caret
                                  className={classnames({
                                    active: this.state.activeFirstTab === 'tab13' ||
                                    this.state.activeFirstTab === 'tab14'
                                  })}>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => {
                      this.toggleFirstTabs('tab13');
                    }}>@fat
                    </DropdownItem>
                    <DropdownItem onClick={() => {
                      this.toggleFirstTabs('tab14');
                    }}>@mdo
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </div>
            {/* tab content */}

            <TabContent className='mb-lg' activeTab={this.state.activeFirstTab}>
              <TabPane tabId="tab11">
                <h3>Tabs-enabled widget</h3>
                <p>You will never know exactly how something will go until you try it.</p>
                <p>{`You can think three hundred times and still have no precise result. If you see
                  attractive girl all you need to do is to go and ask her to give you her phone.
                  You don’t
                  need to think about HOW it can turn out. All you have to do is to GO and DO IT.
                  It
                  should be super-fast and easy. No hesitation. You ask me: “What to do with these
                  fearful thoughts preventing me from doing that?” The answer is to ignore them,
                  because
                  they can’t disappear immediately.`}</p>
                <p>The same thing is for startups and ideas. If you have an idea right away after
                  it appears in your mind you should go and make a first step to implement
                  it. </p>
                <div className="float-right">
                  <Button color="inverse" className="mr-xs">Cancel</Button>
                  <Button color="primary">Some button</Button>
                </div>
                <div className="clearfix"/>
              </TabPane>

              <TabPane tabId="tab12">
                <p>{`Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's
                  very controversial
                  point. I think the opposite actually. Everyone knows what is lore ipsum - it is
                  easy to understand if text is lore ipsum.`}</p>
                <div className="clearfix">
                  <div className="btn-toolbar">
                    <a className="btn btn-default">&nbsp;&nbsp;Check&nbsp;&nbsp;</a>
                    <a className="btn btn-primary text-white">&nbsp;&nbsp;Dance?&nbsp;&nbsp;</a>
                  </div>
                </div>
              </TabPane>

              <TabPane tabId="tab13">
                <p> If you will think too much it will sink in the swamp of never implemented
                  plans and
                  ideas or will just go away or will be implemented by someone else.</p>
                <p><strong>5 months of doing everything to achieve nothing.</strong></p>
                <p>{`You'll automatically skip - because you know - it's just non-informative stub.
                  But what if there some text like this one?`}</p>
              </TabPane>

              <TabPane tabId="tab14">
                <blockquote className="blockquote-sm blockquote mb-xs">
                  Plan it? Make it!
                </blockquote>
                <p>The same thing is for startups and ideas. If you have an idea right away after
                  it appears
                  in your mind you should go and make a first step to implement it.</p>
              </TabPane>
            </TabContent>

          </Col>

          <Col md="6" xs="12">
            <Row>
              <Col xs="12" className="mb-5">
                <Nav tabs  className={`${s.coloredNav}`}>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeSecondTab === 'tab21' })}
                      onClick={() => { this.toggleSecondTabs('tab21'); }}
                    >
                      <span>Basic</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeSecondTab === 'tab22' })}
                      onClick={() => { this.toggleSecondTabs('tab22'); }}
                    >
                      <span>Assumtion</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeSecondTab === 'tab23' })}
                      onClick={() => { this.toggleSecondTabs('tab23'); }}
                    >
                      <span>Works</span>
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent className='mb-lg' activeTab={this.state.activeSecondTab}>
                  <TabPane tabId="tab21">
                    <p>
                      I had an idea named Great Work. It was a service aimed to help people find
                      their
                      passion.
                      Yes I know it sound crazy and super naïve but I worked on that. I started to
                      work
                      on
                      planning, graphics, presentations, pictures, descriptions, articles,
                      investments
                      and so on.
                      I worked on everything but not the project itself.
                    </p>
                  </TabPane>
                  <TabPane tabId="tab22">
                    <p>{`Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's
                      very
                      controversial
                      point. I think the opposite actually. Everyone knows what is lore ipsum - it
                      is
                      easy to understand if text is lore ipsum.`}</p>
                    <div className="clearfix">
                      <div className="btn-toolbar">
                        <Button color="danger">&nbsp;&nbsp;Check&nbsp;&nbsp;</Button>
                        <Button color="default">&nbsp;&nbsp;Dance?&nbsp;&nbsp;</Button>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="tab23">
                    <p> If you will think too much it will sink in the swamp of never implemented
                      plans
                      and
                      ideas or will just go away or will be implemented by someone else.</p>
                    <p><strong>5 months of doing everything to achieve nothing.</strong></p>
                    <p>{`You'll automatically skip - because you know - it's just non-informative
                      stub.
                      But what if there some text like this one?`}</p>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>

            <Row>
              <Col xs="12">
                <Nav  className={`${s.coloredNav}`} tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeThirdTab === 'tab31' })}
                      onClick={() => { this.toggleThirdTabs('tab31'); }}
                    >
                      <span>Basic</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeThirdTab === 'tab32' })}
                      onClick={() => { this.toggleThirdTabs('tab32'); }}
                    >
                      <span>Assumtion</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeThirdTab === 'tab33' })}
                      onClick={() => { this.toggleThirdTabs('tab33'); }}
                    >
                      <span>Works</span>
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent className='mb-lg' activeTab={this.state.activeThirdTab}>
                  <TabPane tabId="tab31">
                    <p>
                      I had an idea named Great Work. It was a service aimed to help people find
                      their
                      passion.
                      Yes I know it sound crazy and super naïve but I worked on that. I started to
                      work
                      on
                      planning, graphics, presentations, pictures, descriptions, articles,
                      investments
                      and so on.
                      I worked on everything but not the project itself.
                    </p>
                  </TabPane>
                  <TabPane tabId="tab32">
                    <p>{`Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's
                      very
                      controversial
                      point. I think the opposite actually. Everyone knows what is lore ipsum - it
                      is
                      easy to understand if text is lore ipsum.`}</p>
                    <div className="clearfix">
                      <div className="btn-toolbar">
                        <Button color="danger">&nbsp;&nbsp;Check&nbsp;&nbsp;</Button>
                        <Button color="default">&nbsp;&nbsp;Dance?&nbsp;&nbsp;</Button>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="tab33">
                    <p> If you will think too much it will sink in the swamp of never implemented
                      plans
                      and
                      ideas or will just go away or will be implemented by someone else.</p>
                    <p><strong>5 months of doing everything to achieve nothing.</strong></p>
                    <p>{`You'll automatically skip - because you know - it's just non-informative
                      stub.
                      But what if there some text like this one?`}</p>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Accordion */}
        <Row className="mt-xs">
          <Col md="6" xs="12" className='mb-lg'>

            {this.state.accordionFirstContent.map((element, index) => (
              <div className="card panel mb-xs" key={`accord-one-${index.toString()}`}>
                { /* eslint-disable */ }
                <div
                  className="card-header panel-header bg-light" role="button"
                  onClick={() => { this.toggleAccordionFirst(index); }}
                >
                  { /* eslint-enable */ }
                  <div className="mb-0">
                   {/* eslint-disable-next-line */}
                    <a className="accordion-toggle" role="button">
                      {element.title}
                      <i className={`fa fa-angle-down ${this.state.accordionFirst[index] ? 'expanded' : ''}`} />
                    </a>
                  </div>
                </div>
                <Collapse className="panel-body" isOpen={this.state.accordionFirst[index]}>
                  <div className="card-body" dangerouslySetInnerHTML={{ __html: element.body }} />
                </Collapse>
              </div>))}
          </Col>

          <Col md="6" xs="12" className='mb-lg'>
            {this.state.accordionSecondContent.map((element, index) => (<div className="card panel mb-xs" key={`accord-one-${index.toString()}`}>
              { /* eslint-disable */ }
              <div
                className="card-header panel-header bg-light" role="button"
                onClick={() => { this.toggleAccordionSecond(index); }}
              >
                { /* eslint-enable */ }
                <div className="mb-0">
                {/* eslint-disable-next-line */}
                  <a className="accordion-toggle" role="button">
                    {element.title}
                    <i className="fa fa-angle-down float-right" />
                  </a>
                </div>
              </div>
              <Collapse className="panel-body" isOpen={this.state.accordionSecond[index]}>
                <div className="card-body" dangerouslySetInnerHTML={{ __html: element.body }} />
              </Collapse>
            </div>))}
          </Col>
        </Row>

      </div>);
  }

}

export default TabsAccordion;
