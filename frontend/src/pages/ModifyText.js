import React, { Fragment, useContext } from 'react';
import { ImgInfoContext } from '../store/ImgInfo';

import Header from '../components/common/Header';
import State from '../components/states/ModifyState';
import ExtTextField from '../components/layouts/ExtTextField';
import TransTextField from '../components/layouts/TransTextField';

import '../styles/layout/_ModImgFrame.scss';
import '../styles/layout/_TextFrame.scss';
import '../styles/layout/_ImgView.scss';

function ModifyText() {
  const { srcImg, extrTexts, transTexts } = useContext(ImgInfoContext);

  function SrcImg() {
    return (
      <section className="imgFrame">
        {/*원본이미지를 담을 section*/}
        <div className="ImgSection">
          <img className="SrcimgView" src={srcImg} alt="원본이미지"></img>
        </div>
      </section>
    );
  }

  function ExtractText() {
    return (
      <section className="imgFrame">
        {/*추출된 텍스트를 담을 section*/}
        <div>
          <ExtTextField texts={extrTexts} />
        </div>
      </section>
    );
  }

  function TransText() {
    return (
      <section className="imgFrame">
        {/*번역된 텍스트를 담을 section*/}
        <div>
          <TransTextField texts={transTexts} />
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
