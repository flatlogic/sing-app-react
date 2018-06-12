import React from 'react';
import {
  Progress,
} from 'reactstrap';
import Rickshaw from 'rickshaw';


class RealtimeTraffic extends React.Component {
  constructor(prop) {
    super(prop);
    this.onResizeRickshaw = this.onResizeRickshaw.bind(this);
  }

  componentDidMount() {
    this.state = {
      graph: null,
    };
    this.initChart();
    window.addEventListener('resize', this.onResizeRickshaw);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeRickshaw);
  }

  onResizeRickshaw() {
    this.state.graph.configure({ height: 130 });
    this.state.graph.render();
  }

  initChart() {
    const seriesData = [[], []];
    const random = new Rickshaw.Fixtures.RandomData(30);

    for (let i = 0; i < 30; i += 1) {
      random.addData(seriesData);
    }
    this.state.graph = new Rickshaw.Graph({
      element: this.rickshawChart,
      height: 130,
      realtime: true,
      series: [
        {
          color: '#343434', // 'gray-dark'
          data: seriesData[0],
          name: 'Uploads',
        }, {
          color: '#666', // gray,
          data: seriesData[1],
          name: 'Downloads',
        },
      ],
    });
    const hoverDetail = new Rickshaw.Graph.HoverDetail({
      graph: this.state.graph,
      xFormatter: x => new Date(x * 1000).toString(),
    });

    hoverDetail.show();

    setInterval(() => {
      random.removeData(seriesData);
      random.addData(seriesData);
      this.state.graph.update();
    }, 1000);

    this.state.graph.render();
  }

  render() {
    return (
      <div>
        <h4 className="mb-lg">Recent <span className="fw-semi-bold">Update</span></h4>
        <h6>Node.js <span className="fw-semi-bold">4.0.1 distribution</span></h6>
        <Progress className="bg-gray-lighter progress-xs" color="danger" value="77" />
        <p className="mt-sm mb fs-mini ">
          <small><span className="circle bg-warning text-gray-dark"><i
            className="glyphicon glyphicon-chevron-up"
          /></span></small>
          <strong className="px-1">17% higher</strong>
          than last month
        </p>
        <p className="fs-sm text-gray-lighter mb-0">Remaining hours</p>
        <a className="btn btn-xs btn-gray pull-right ml-xs" href="#">
          <i className="fa fa-compress" /> track
        </a>
        <a className="btn btn-xs btn-gray pull-right" href="#">
          <i className="fa fa-pause" /> pause
        </a>
        <p className="value4">2h 56m</p>
        <br />
        <div
          ref={(r) => {
            this.rickshawChart = r;
          }} className="text-gray-dark chart-overflow-bottom" style={{ height: '130px' }}
        />
      </div>
    );
  }
}

export default RealtimeTraffic;
