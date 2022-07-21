import React, { Fragment } from 'react';
//import { useLocation } from 'react-router-dom';

import img from '../components/images/toon1.jpg';

import Header from '../components/common/Header';
import State from '../components/states/ModifyState';
//import ExtTextField from '../components/layouts/ExtTextField';
import TransBtn from '../components/buttons/TransBtn';
import ShowResultBtn from '../components/buttons/ShowResultBtn';

import '../styles/layout/_ModImgFrame.scss';
import '../styles/layout/_TextFrame.scss';
import '../styles/layout/_ImgView.scss';
function ModifyText() {
  /* 원본이미지, 이미지에서 추출된 텍스트 불러오기
  const location = useLocation();
  const { imgId, srcImg, modTexts } = location.state;
  */

  function SrcImg() {
    return (
      <section className="imgFrame">
        {/*원본이미지를 담을 section*/}
        <div className="ImgSection">
          <img className="SrcimgView" src={img} alt="원본이미지"></img>
        </div>
      </section>
    );
  }

  function ExtractText() {
    return (
      <section className="imgFrame">
        {/*추출된 텍스트를 담을 section*/}
        <div className="TextSection">
          {/*<ExtTextField />*/}
          <textarea></textarea>
        </div>
        <div className="BtnSection">
          <TransBtn />
        </div>
      </section>
    );
  }

  function TransText() {
    return (
      <section className="imgFrame">
        {/*번역된 텍스트를 담을 section*/}
        <div className="TextSection">
          {/*<ExtTextField />*/}
          <textarea></textarea>
        </div>
        <div className="BtnSection">
          <ShowResultBtn />
        </div>
      </section>
    );
  }
  return (
    <Fragment>
      <Header />
      <State />
      <div className="modimgFrames">
        {SrcImg()}
        {ExtractText()}
        {TransText()}
      </div>
    </Fragment>
  );
}

export default ModifyText;
