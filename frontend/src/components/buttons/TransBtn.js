import { useContext, useEffect, useState } from 'react';

import { BASE_URL, getTransText, getResultImg } from '../../services/API_Service';
import { ImgInfoContext } from '../../store/ImgInfo';

import '../../styles/common/_Buttons.scss';

function TransBtn() {
  const { lan, selectLan, imgId, transTexts, setLan, setTransTexts, setResultImg } = useContext(ImgInfoContext);
  const [clicked, setClicked] = useState(false);

  /* 번역 텍스트 서버로부터 받아온 뒤 번역 이미지도 받아오기 */
  useEffect(() => {
    if (imgId !== 0 && transTexts.length !== 0 && clicked) {
      getResultImg(imgId, lan).then(response =>
        setResultImg(`${BASE_URL}${response.data.image}?timestamp=${Date.now()}/transBtn`),
      );
      setClicked(false);
    }
  }, [transTexts]);

  useEffect(() => {}, [lan]);

  /* 서버로부터 번역 텍스트 및 번역된 이미지 받기 */
  function onClickTrans() {
    if (selectLan === null && lan === null) {
      alert('번역할 언어를 선택해주세요.');
    } else {
      setClicked(true);
      setLan(selectLan);
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
