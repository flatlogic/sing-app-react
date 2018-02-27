import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Nav, NavItem, NavLink } from 'reactstrap';
/* eslint-disable */
import $ from 'jquery';
import 'imports-loader?$=jquery,this=>window!jquery-mapael/js/maps/world_countries';
import 'imports-loader?$=jquery,this=>window!jquery-mapael/js/jquery.mapael';
/* eslint-enable */
import s from './YearsMap.scss';
import fakeWorldData from './MapData';

class YearsMap extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      activeYear: 2012,
    };
    this.triggerYear = this.triggerYear.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  init() {
    const $map = $('#mapael');
    const data = {
      map: {
        name: 'world_countries',
        defaultArea: {
          attrs: {
            fill: '#eee', // gray-lighter
            stroke: '#666', // 'gray'
            'stroke-width': 0.1,
          },
          attrsHover: {
            fill: '#999', // gray-light,
            animDuration: 100,
          },
        },
        defaultPlot: {
          size: 17,
          attrs: {
            fill: '#f0b518', // brand-warning,
            stroke: '#fff',
            'stroke-width': 0,
            'stroke-linejoin': 'round',
          },
          attrsHover: {
            'stroke-width': 1,
            animDuration: 100,
          },
        },
        zoom: {
          enabled: true,
          step: 1,
          maxLevel: 10,
          mousewheel: false,
        },
      },
      legend: {
        area: {
          display: false,
          slices: [
            {
              max: 5000000,
              attrs: {
                fill: 'rgb(245, 249, 251)', // lightenColor('#ebeff1', .04)
              },
              label: 'Less than 5M',
            },
            {
              min: 5000000,
              max: 10000000,
              attrs: {
                fill: '#ebeff1',
              },
              label: 'Between 5M and 10M',
            },
            {
              min: 10000000,
              max: 50000000,
              attrs: {
                fill: '#eee', // gray-lighter
              },
              label: 'Between 10M and 50M',
            },
            {
              min: 50000000,
              attrs: {
                fill: 'rgb(209, 213, 215)', // darkenColor('#ebeff1', .1)
              },
              label: 'More than 50M',
            },
          ],
        },
      },
      areas: fakeWorldData[this.state.activeYear].areas,
    };
    const height = 394;
    $map.css('height', height);
    if ($map.parents('.widget')[0]) {
      $map.find('.map').css('height', parseInt($map.parents('.widget').css('height'), 10) - 35);
    }
    $map.mapael(data);
    $map.trigger('zoom', { level: 6, latitude: 59.599254, longitude: 8.863224 });
  }

  triggerYear(year) {
    this.setState({
      activeYear: year,
    });
    const $map = $('#mapael');
    $map.trigger('update', [{
      mapOptions: fakeWorldData[year],
      animDuration: 300,
    }]);
  }

  render() {
    return (<div>
      <div className="mapael" id="mapael">
        <div className="stats">
          <h6 className="text-gray-dark">YEARLY <span className="fw-semi-bold">DISTRIBUTIONS</span></h6>
          <span className="pull-left mr-xs">
            <small><span className="circle bg-warning text-gray-dark">
              <i className="fa fa-plus" /></span></small>
          </span>
          <p className="h4 m-0">
            <strong>17% last year</strong>
          </p>
        </div>
        <div className="map">
          <span>Alternative content for the map</span>
        </div>
        <div className="areaLegend">
          <span>Alternative content for the legend</span>
        </div>
      </div>
      <Nav className="map-controls" pills fill>
        <NavItem>
          <NavLink active={this.state.activeYear === 2012} onClick={() => this.triggerYear(2012)}>2012</NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={this.state.activeYear === 2013} onClick={() => this.triggerYear(2013)}>2013</NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={this.state.activeYear === 2014} onClick={() => this.triggerYear(2014)}>2014</NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={this.state.activeYear === 2015} onClick={() => this.triggerYear(2015)}>2015</NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={this.state.activeYear === 2016} onClick={() => this.triggerYear(2016)}>2016</NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={this.state.activeYear === 2017} onClick={() => this.triggerYear(2017)}>2017</NavLink>
        </NavItem>
      </Nav>
    </div>);
  }
}

export default withStyles(s)(YearsMap);
