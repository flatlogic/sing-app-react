import React from 'react';
import InfoCard from './InfoCard';
import InfoBlock from  './InfoBlock';
import s from './Info.module.scss';

const Info = () => {
  return (
    <div className={s.chatInfoSection}>
      <InfoCard />
      <InfoBlock />
    </div>
  )
}

export default Info;