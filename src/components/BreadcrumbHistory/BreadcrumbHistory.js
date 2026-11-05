import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { v4 as uuid } from 'uuid';
import {
  Link
} from "react-router-dom";

class BreadcrumbHistory extends Component {

  renderBreadCrumbs = () => {
    let url = this.props.url;
    let route = url.split('/')
    .slice(1)
    .map(route => route
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ')
    );
    const length = route.length;
    return route.map((item,index) => {
      let middlewareUrl = "/" + url.split('/').slice(1, index + 2).join('/');
      
      return (
        <BreadcrumbItem key={uuid()}>
          {length === index + 1 ?
            item : 
            <Link to={middlewareUrl}>
              {item}
            </Link>
          }
        </BreadcrumbItem>
      )
    })
  }

  render() {
    return (
      <div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
          {this.renderBreadCrumbs()}
        </Breadcrumb>
      </div>
    )
  };
};

export default BreadcrumbHistory;
