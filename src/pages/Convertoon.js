import React, { Fragment } from 'react';

import Header from '../components/common/Header';
import State from '../components/states/ConvertState';

import '../styles/layout/_CvtImgFrame.scss';
function Convertoon() {
  return (
    <Fragment>
      <Header />
      <State />
      <div className="cvtimgFrames">
        <section className="imgFrame"></section> {/*원본이미지를 담을 section*/}
        <section className="imgFrame"></section>
      </div>
    </Fragment>
  );
}

export default Convertoon;
