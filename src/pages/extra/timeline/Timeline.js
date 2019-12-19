import React from 'react';
import {
  Input,
} from 'reactstrap';
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import s from './Timeline.module.scss'; // eslint-disable-line css-modules/no-unused-class

import a1 from '../../../images/people/a1.jpg';
import a2 from '../../../images/people/a2.jpg';
import a3 from '../../../images/people/a3.jpg';
import a4 from '../../../images/people/a4.jpg';
import a5 from '../../../images/people/a5.jpg';
import a6 from '../../../images/people/a6.jpg';
import avatar from '../../../images/avatar.png';
import img8 from '../../../images/search/8.jpg';

const BasicMap = withScriptjs(withGoogleMap(() =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 51, lng: 7 }}
    defaultOptions={{ mapTypeControl: false, fullscreenControl: false, gestureHandling: 'greedy' }}
  >
    <Marker position={{ lat: 51, lng: 7 }} draggable />
  </GoogleMap>,
));

class Timeline extends React.Component {

  render() {
    return (
      <div>
        <h1 className="page-title">Events - <span className="fw-semi-bold">Feed</span></h1>

        <ul className={s.timeline}>
          <li className={s.onLeft}>
            <time className={s.eventTime} dateTime="2014-05-19 03:04">
              <span className={s.date}>yesterday</span>
              <span className={s.time}>8:03 <span className="fw-semi-bold">pm</span></span>
            </time>
            <span className={`${s.eventIcon} ${s.eventIconSuccess}`}>
              <i className="glyphicon glyphicon-map-marker" />
            </span>
            <section className={s.event}>
              <span className={`thumb-sm ${s.avatar} pull-left mr-sm`}>
                <img className="rounded-circle" src={a2} alt="..." />
              </span>
              <h4 className={s.eventHeading}><button className="btn-link">Jessica Nilson</button>
                <small> @jess</small>
              </h4>
              <p className="fs-sm text-muted">10:12 am - Publicly near Minsk</p>
              <div className={s.eventMap}>
                <BasicMap
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
                  loadingElement={<div style={{ height: '200px', width: '100%' }} />}
                  containerElement={<div style={{ height: '200px' }} />}
                  mapElement={<div style={{ height: '200px' }} />}
                />
              </div>
              <footer>
                <ul className={s.postLinks}>
                  <li><button className="btn-link">1 hour</button>
                  </li>
                  <li><button className="btn-link"><span className="text-danger"><i className="fa fa-heart" /> Like</span></button></li>
                  <li><button className="btn-link">Comment</button></li>
                </ul>
                <ul className={s.postComments}>
                  <li>
                    <span className={`thumb-xs ${s.avatar} pull-left mr-sm`}>
                      <img className="rounded-circle" src={a2} alt="..." />
                    </span>
                    <div className={s.commentBody}>
                      <h6 className={`${s.author} fs-sm fw-semi-bold`}>Radrigo Gonzales
                        <small>7 mins ago</small>
                      </h6>
                      <p>{`Someone said they were the best people out there just few years ago. Don't know
                        better options.`}</p>
                    </div>
                  </li>
                  <li>
                    <span className={`thumb-xs ${s.avatar} pull-left mr-sm`}>
                      <img className="rounded-circle" src={a4} alt="..." />
                    </span>
                    <div className={s.commentBody}>
                      <h6 className={`${s.author} fs-sm fw-semi-bold`}>Ignacio Abad
                        <small>6 mins ago</small>
                      </h6>
                      <p>True. Heard absolutely the same.</p>
                    </div>
                  </li>
                  <li>
                    <span className={`thumb-xs ${s.avatar} pull-left mr-sm`}>
                      <img className="rounded-circle" src={avatar} alt="..." />
                    </span>
                    <div className={s.commentBody}>
                      <Input bsSize="sm" placeholder="Write your comment..." />
                    </div>
                  </li>
                </ul>
              </footer>
            </section>
          </li>

          <li>
            <time className={s.eventTime} dateTime="2014-05-19 03:04">
              <span className={s.date}>today</span>
              <span className={s.time}>9:41 <span className="fw-semi-bold">am</span></span>
            </time>
            <span className={`${s.eventIcon} ${s.eventIconPrimary}`}>
              <i className="glyphicon glyphicon-comments" />
            </span>
            <section className={s.event}>
              <span className={`thumb-xs ${s.avatar} pull-left mr-sm`}>
                <img className="rounded-circle" src={a5} alt="..." />
              </span>
              <h5 className={s.eventHeading}><button className="btn-link">Bob Nilson</button>
                <small><button className="btn-link"> @nils</button></small>
              </h5>
              <p className="fs-sm text-muted">February 22, 2014 at 01:59 PM</p>
              <p className="fs-mini">
                There is no such thing as maturity. There is instead an ever-evolving process of maturing.
                Because when there is a maturity, there is ...
              </p>
              <footer>
                <ul className={s.postLinks}>
                  <li><button className="btn-link">1 hour</button></li>
                  <li><button className="btn-link"><span className="text-danger"><i className="fa fa-heart" /> Like</span></button></li>
                  <li><button className="btn-link">Comment</button></li>
                </ul>
              </footer>
            </section>
          </li>
          <li className={s.onLeft}>
            <time className={s.eventTime} dateTime="2014-05-19 03:04">
              <span className={s.date}>yesterday</span>
              <span className={s.time}>9:03 <span className="fw-semi-bold">am</span></span>
            </time>
            <span className={`${s.eventIcon} ${s.eventIconDanger}`}>
              <i className="glyphicon glyphicon-cutlery" />
            </span>
            <section className={s.event}>
              <h5 className={s.eventHeading}><button className="btn-link">Jessica Smith</button>
                <small> @jess</small>
              </h5>
              <p className="fs-sm text-muted">February 22, 2014 at 01:59 PM</p>
              <p className="fs-mini">
                Check out this awesome photo I made in Italy last summer. Seems it was lost somewhere deep inside
                my brand new HDD 40TB. Thanks god I found it!
              </p>
              <div className={s.eventImage}>
                <a href={img8} data-ui-jq="magnificPopup" data-ui-options="{type: 'image'}">
                  <img src={img8} alt="..." />
                </a>
              </div>
              <footer>
                <div className="clearfix">
                  <ul className={`${s.postLinks} mt-sm pull-left`}>
                    <li><button className="btn-link">1 hour</button></li>
                    <li><button className="btn-link"><span className="text-danger"><i className="fa fa-heart-o" /> Like</span></button></li>
                    <li><button className="btn-link">Comment</button></li>
                  </ul>

                  <span className="thumb thumb-sm pull-right">
                    <button className="btn-link">
                      <img className="rounded-circle" src={a1} alt="..." />
                    </button>
                  </span>
                  <span className="thumb thumb-sm pull-right">
                    <button className="btn-link"><img className="rounded-circle" src={a5} alt="..." /></button>
                  </span>
                  <span className="thumb thumb-sm pull-right">
                    <button className="btn-link"><img className="rounded-circle" src={a3} alt="..." /></button>
                  </span>
                </div>
                <ul className={`${s.postComments} mt-sm`}>
                  <li>
                    <span className="thumb-xs avatar pull-left mr-sm">
                      <img className="rounded-circle" src={a1} alt="..." />
                    </span>
                    <div className={s.commentBody}>
                      <h6 className={`${s.author} fs-sm fw-semi-bold`}>Ignacio Abad
                        <small>6 mins ago</small>
                      </h6>
                      <p>Hey, have you heard anything about that?</p>
                    </div>
                  </li>
                  <li>
                    <span className="thumb-xs avatar pull-left mr-sm">
                      <img className="rounded-circle" src={avatar} alt="..." />
                    </span>
                    <div className={s.commentBody}>
                      <Input bsSize="sm" placeholder="Write your comment..." />
                    </div>
                  </li>
                </ul>
              </footer>
            </section>
          </li>
          <li>
            <time className={s.eventTime} dateTime="2014-05-19 03:04">
              <span className={s.date}>yesterday</span>
              <span className={s.time}>9:03 <span className="fw-semi-bold">am</span></span>
            </time>
            <span className={s.eventIcon}>
              <img className="rounded-circle" src={avatar} alt="..." />
            </span>
            <section className={s.event}>
              <span className={`thumb-xs ${s.avatar} pull-left mr-sm`}>
                <img className="rounded-circle" src={a6} alt="..." />
              </span>
              <h5 className={s.eventHeading}><button className="btn-link">Jessica Smith</button>
                <small> @jess</small>
              </h5>
              <p className="fs-sm text-muted">9:03 am - Publicly near Minsk</p>
              <h5>New <span className="fw-semi-bold">Project</span> Launch</h5>
              <p className="fs-mini">
                {`Let's try something different this time. Hey, do you wanna join us tonight?
                We're planning to a launch a new project soon. Want to discuss with all of you...`}
              </p>
              <button className="btn-link mt-n-xs fs-mini text-muted">Read more...</button>
              <footer>
                <ul className={s.postLinks}>
                  <li><button className="btn-link">1 hour</button></li>
                  <li><button className="btn-link"><span className="text-danger"><i className="fa fa-heart-o" /> Like</span></button></li>
                  <li><button className="btn-link">Comment</button></li>
                </ul>
              </footer>
            </section>
          </li>
        </ul>
      </div>
    );
  }

}

export default Timeline;
