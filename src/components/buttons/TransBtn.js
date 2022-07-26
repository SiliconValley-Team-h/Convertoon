import { useContext, useEffect } from 'react';

import { BASE_URL, getTransText, getResultImg } from '../../services/API_Service';
import { ImgInfoContext } from '../../store/ImgInfo';

import '../../styles/common/_Buttons.scss';

function TransBtn() {
  const { lan, selectLan, imgId, transTexts, setLan, setTransTexts, resultImg, setResultImg } =
    useContext(ImgInfoContext);

  /* 번역 텍스트 서버로부터 받아온 뒤 번역 이미지도 받아오기 */
  useEffect(() => {
    if (imgId !== 0 && transTexts.length !== 0) {
      getResultImg(imgId, lan).then(response => setResultImg(BASE_URL + response.data.image));
    }
  }, [transTexts]);

  useEffect(() => {}, [resultImg]);
  useEffect(() => {}, [lan]);

  /* 서버로부터 번역 텍스트 및 번역된 이미지 받기 */
  function onClickTrans() {
    if (selectLan === null && lan === null) {
      alert('번역할 언어를 선택해주세요.');
    } else {
      setLan(selectLan);
      setTransTexts([]);
      getTransText(imgId, selectLan).then(response => {
        const result = response.data.text_lists.map(texts => {
          return texts;
        });
        setTransTexts(result);
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
