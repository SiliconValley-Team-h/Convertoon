import React, { Fragment } from 'react';
//import { useLocation } from 'react-router-dom';

import Header from '../components/common/Header';
import ExtTextField from '../components/layouts/ExtTextField';
import State from '../components/states/ModifyState';
import '../styles/layout/_ModImgFrame.scss';

function ModifyText() {
  /* 원본이미지, 이미지에서 추출된 텍스트 불러오기
  const location = useLocation();
  const { imgId, srcImg, modTexts } = location.state;
  */
  return (
    <Fragment>
      <Header />
      <State />
      <div className="modimgFrames">
        <section className="imgFrame"></section> {/*원본이미지를 담을 section*/}
        <section className="imgFrame">
          <ExtTextField />
        </section>
        {/*추출된 텍스트를 담을 section*/}
        <section className="imgFrame"></section> {/*번역된 텍스트를 담을 section*/}
      </div>
    </Fragment>
  );
}

export default ModifyText;
