import { Fragment, useContext, useEffect, useState } from 'react';
import { ImgInfoContext } from '../store/ImgInfo';

import Header from '../components/common/Header';
import ConvertState from '../components/states/ConvertState';
import LanState from '../components/states/LanState';
import FileBtn from '../components/buttons/FileBtn';
import ResultBtns from '../components/buttons/ResultBtns';
import PreviewFrame from '../components/layouts/PreviewFrame';

import '../styles/layout/_CvtImgFrame.scss';
import '../styles/layout/_ImgFrame.scss';
import '../styles/common/_Buttons.scss';

function Convertoon() {
  const { srcImg, resultImg } = useContext(ImgInfoContext);

  return (
    <Fragment>
      <Header />
      <LanState />
      <ConvertState />
      <div className="cvtimgFrames">
        <section className="cvtimgFrame">
          {/*원본이미지를 담을 section*/}
          <PreviewFrame img={srcImg} alt={'srcImgPreview'} />
          <FileBtn />
        </section>
        <section className="cvtimgFrame">
          {/*번역이미지를 담을 section*/}
          <PreviewFrame img={resultImg} alt={'resultImgPreview'} />
          <ResultBtns />
        </section>
      </div>
    </Fragment>
  );
}

export default Convertoon;
