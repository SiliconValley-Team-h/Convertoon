import { Fragment, useContext, useEffect } from 'react';
import { ImgInfoContext } from '../store/ImgInfo';

import Header from '../components/common/Header';
import ConvertState from '../components/states/ConvertState';
import LanState from '../components/states/LanState';
import FileBtn from '../components/buttons/FileBtn';
import ResultBtns from '../components/buttons/ResultBtns';
import PreviewFrame from '../components/layouts/PreviewFrame';
import ImgView from '../components/layouts/ImgView';

import '../styles/layout/_CvtImgFrame.scss';
import '../styles/layout/_ImgFrame.scss';
import '../styles/common/_Buttons.scss';

function Convertoon() {
  const { srcImg, resultImg } = useContext(ImgInfoContext);

  useEffect(() => {
    console.log(`resultImg : ${resultImg}`);
  });

  function Main_Header() {
    return (
      <Fragment>
        <Header />
        <LanState />
        <ConvertState />
      </Fragment>
    );
  }

  function orgImage() {
    return (
      <section className="cvtimgFrame">
        {/*원본이미지를 담을 section*/}
        {srcImg === '' ? (
          <ImgView firstLine="선택한 이미지가" secondLine="여기에 보여집니다." />
        ) : (
          <PreviewFrame img={srcImg} alt={'srcImgPreview'} />
        )}
        <FileBtn />
      </section>
    );
  }

  function resultImage() {
    return (
      <section className="cvtimgFrame">
        {/*번역이미지를 담을 section*/}
        {resultImg === '' ? (
          <ImgView firstLine="번역된 이미지가" secondLine="여기에 보여집니다." />
        ) : (
          <PreviewFrame img={resultImg} alt={'resultImgPreview'} />
        )}
        <ResultBtns />
      </section>
    );
  }
  return (
    <Fragment>
      {Main_Header()}
      <div className="cvtimgFrames">
        {orgImage()}
        {resultImage()}
      </div>
    </Fragment>
  );
}

export default Convertoon;
