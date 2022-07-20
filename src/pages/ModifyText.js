import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/common/Header';
import State from '../components/states/ModifyState';
import '../styles/layout/_ModImgFrame.scss';

function ModifyText() {
  /* 원본이미지 불러오기
  const location = useLocation();
  const { srcImg } = location.state;
  */
  return (
    <Fragment>
      <Header />
      <State />
      <div className="modimgFrames">
        <section className="imgFrame"></section> {/*원본이미지를 담을 section*/}
        <section className="imgFrame"></section>
        <section className="imgFrame"></section>
      </div>
    </Fragment>
  );
}

export default ModifyText;
