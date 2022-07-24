import { useContext, useEffect } from 'react';

import { BASE_URL, getTransText, getResultImg } from '../../services/API_Service';
import { ImgInfoContext } from '../../store/ImgInfo';

import '../../styles/common/_Buttons.scss';

function TransBtn() {
  const { lan, imgId, transTexts, setTransTexts, resultImg, setResultImg } = useContext(ImgInfoContext);

  useEffect(() => {
    if (imgId !== 0 && transTexts.length !== 0) {
      getResultImg(imgId).then(response => setResultImg(BASE_URL + response.data.image));
    }
  }, [transTexts]);

  useEffect(() => {}, [resultImg]);

  /* 서버로부터 번역 텍스트 및 번역된 이미지 받기 */
  function onClickTrans() {
    if (lan === null) {
      alert('번역할 언어를 선택해주세요.');
    } else {
      setTransTexts([]);
      getTransText(imgId, lan).then(response => {
        response.data.text_lists.map(texts => setTransTexts(textArray => [...textArray, texts]));
      });
    }
  }

  return (
    <button className="transBtn" disabled={imgId === 0 ? true : false} onClick={onClickTrans}>
      번역
    </button>
  );
}

export default TransBtn;
