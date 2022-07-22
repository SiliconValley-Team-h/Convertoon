import { createContext, useState } from 'react';

/* context API 이용 */
const ImgInfoContext = createContext();

function ImgInfoProvider(props) {
  const [srcImg, setSrcImg] = useState(''); // 원본 이미지 파일
  const [resultImg, setResultImg] = useState(''); // 번역된 이미지 파일
  const [imgId, setImgId] = useState(0); // 원본 이미지 파일의 아이디
  const [extrTexts, setExtrTexts] = useState([]); // 추출한 텍스트
  const [transTexts, setTransTexts] = useState([]); // 번역한 텍스트
  const [lan, setLan] = useState(null); // 선택한 번역 언어

  const ImgInfo = {
    srcImg,
    setSrcImg,
    resultImg,
    setResultImg,
    imgId,
    setImgId,
    extrTexts,
    setExtrTexts,
    transTexts,
    setTransTexts,
    lan,
    setLan,
  };

  return <ImgInfoContext.Provider value={ImgInfo}>{props.children}</ImgInfoContext.Provider>;
}

export { ImgInfoContext, ImgInfoProvider };
