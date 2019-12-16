import React from 'react';
import {
  Progress,
} from 'reactstrap';
import Rickshaw from 'rickshaw';
import { connect } from 'react-redux';


class RealtimeTraffic extends React.Component {
  state = { graph: null }
  constructor(prop) {
    super(prop);
    this.onResizeRickshaw = this.onResizeRickshaw.bind(this);
  }

  componentDidMount() {
    this.initChart();
    window.addEventListener('resize', this.onResizeRickshaw);
  }

  componentDidUpdate(prevProps) {
    if (this.props.sidebarStatic !== prevProps.sidebarStatic) {
      setTimeout(() => this.onResizeRickshaw(),500)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeRickshaw);
  }

  onResizeRickshaw() {
    this.graph.configure({ height: 130 });
    this.graph.render();
  }

  initChart() {
    const seriesData = [[], []];
    const random = new Rickshaw.Fixtures.RandomData(30);

    for (let i = 0; i < 30; i += 1) {
      random.addData(seriesData);
    }
    this.graph = new Rickshaw.Graph({
      element: this.rickshawChart,
      height: 130,
      realtime: true,
      series: [
        {
          color: '#005792', // 'gray-dark'
          data: seriesData[0],
          name: 'Uploads',
        }, {
          color: '#1A86D0', // gray,
          data: seriesData[1],
          name: 'Downloads',
        },
      ],
    });

    const hoverDetail = new Rickshaw.Graph.HoverDetail({
      graph: this.graph,
      xFormatter: x => new Date(x * 1000).toString(),
    });

    hoverDetail.show();

    setInterval(() => {
      random.removeData(seriesData);
      random.addData(seriesData);
      this.graph.update();
    }, 1000);

    this.graph.render();
  }

  render() {
    return (
      <div>
        <h4 className="mb-lg">Recent <span className="fw-semi-bold">Update</span></h4>
        <h6>Node.js <span className="fw-semi-bold">4.0.1 distribution</span></h6>
        <Progress className="bg-gray-lighter progress-xs" color="danger" value="77" />
        <p className="mt-sm mb fs-mini ">
          <small><span className="circle bg-primary text-white"><i
            className="glyphicon glyphicon-chevron-up"
          /></span></small>
          <strong className="px-1">17% higher</strong>
          than last month
        </p>
        <p className="fs-sm mb-0">Remaining hours</p>
        <button className="btn btn-xs btn-gray pull-right ml-xs">
          <i className="fa fa-compress" /> track
        </button>
        <button className="btn btn-xs btn-gray pull-right">
          <i className="fa fa-pause" /> pause
        </button>
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

function mapStateToProps(store) {
  return {
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default connect(mapStateToProps)(RealtimeTraffic);