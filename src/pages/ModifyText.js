import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ImgInfoContext } from '../store/ImgInfo';

import Header from '../components/common/Header';
import State from '../components/states/ModifyState';
import ExtTextField from '../components/layouts/ExtTextField';
import ShowTransBtn from '../components/buttons/ShowTransBtn';
import ShowResultBtn from '../components/buttons/ShowResultBtn';

import '../styles/layout/_ModImgFrame.scss';
import '../styles/layout/_TextFrame.scss';
import '../styles/layout/_ImgView.scss';

function ModifyText() {
  const { srcImg, extrTexts, transTexts } = useContext(ImgInfoContext);

  useEffect(() => {
    console.log(extrTexts);
    console.log(transTexts);
  }, []);

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
        <div className="TextSection">
          <ExtTextField texts={extrTexts} state="extr" />
        </div>
        <div className="BtnSection">
          <ShowTransBtn />
        </div>
      </section>
    );
  }

  function TransText() {
    return (
      <section className="imgFrame">
        {/*번역된 텍스트를 담을 section*/}
        <div className="TextSection">
          <ExtTextField texts={transTexts} state="trans" />
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
