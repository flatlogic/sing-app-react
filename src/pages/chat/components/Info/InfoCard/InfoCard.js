import React from 'react';
import img1 from '../../../../../images/people/a1.jpg';
import fb from '../../../../../images/icons/fb.svg';
import linkedin from '../../../../../images/icons/linkedin.svg';
import twitter from '../../../../../images/icons/twitter.svg';

import s from './InfoCard.module.scss';

const InfoCard = () => {
  return (
    <div className={`chat-block-style bg-info`}>
      <div className={s.cardWrapper}>
        <div className={s.cardInfo}>
          <h3>Jane Rowlis</h3>
          <h4>HighPark Inc</h4>
          <h5>CEO & Founder</h5>
        </div>
        <div className={`${s.cardImage}`}>
          <span className="thumb-lg mr">
            <img className="rounded-circle" src={img1} alt="..." />
          </span>
        </div>
      </div>
      <div className={`${s.cardFooter}`}>
        <span className={s.email}>J_Rowlis@gmail.com</span>
        <ul>
          <li><img src={fb} alt="fb"/></li>
          <li><img src={linkedin} alt="linkedin"/></li>
          <li><img src={twitter} alt="twitter"/></li>
        </ul>
      </div>
    </div>
  )
}

export default InfoCard;