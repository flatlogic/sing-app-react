import React, { Component } from 'react';
import {
  Collapse,
} from 'reactstrap';

class InfoBlock extends Component {
  state = {
    accordionFirst: [false, false, false, false],
    accordionFirstContent: [{
      title: '<i class="fa fa-file-text-o"></i> Collapsible Group Item', body: ` Get base styles and flexible support for collapsible components like accordions and navigation.
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
    }, {
      title: 'Check It',
      body: ' Why don\'t use Lore Ipsum? I think if some one says don\'t use lore ipsum it\'s very controversial point. I think the opposite actually.',
    }],
  }

  toggleAccordionFirst = (id) => {
    const arr = [];
    arr.length = this.state.accordionFirst.length;
    arr.fill(false);
    arr[id] = !this.state.accordionFirst[id];
    this.setState({
      accordionFirst: arr,
    });
  }


  render() {
    return (
      <div className={`chat-block-style bg-white`}>
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
      </div>
    )
  }  
}

export default InfoBlock;