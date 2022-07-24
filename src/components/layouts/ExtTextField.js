import React, { Fragment, useState, useEffect, useContext, useRef } from 'react';
import { ImgInfoContext } from '../../store/ImgInfo';
import { setSrcText, getTransText } from '../../services/API_Service'; /*axios*/
import '../../styles/layout/_TextArea.scss';

function ExtTextField(props) {
  const { imgId, setExtrTexts, setTransTexts, lan } = useContext(ImgInfoContext);

  const result = props.texts.map((data, index) => {
    return { pk: index, text: data };
  });

  const [modTextResults, setModTextResults] = useState(result); /* 수정된 추출 텍스트*/
  const [sendText, setSendText] = useState([]); /*서버로 전송할 텍스트*/
  const mounted = useRef(false); /*update시에만 화면 렌더링(mount -> false)*/

  function modifyText(e, i) {
    /*텍스트 입력 시 호출되는 함수*/
    /*index가 i인 경우에만 값 변경*/
    /*e.target.value : 입력된 값, item : 원래 저장되어 있던 값*/
    setModTextResults(modTextResults.map((item, index) => (index === i ? { pk: index, text: e.target.value } : item)));
  }

  /*sendText가 변경될 때 렌더링*/
  /*BtnClicked()에서 setSendText를 실행한 후 실행됨*/
  useEffect(() => {
    if (!mounted.current) {
      /*mount*/
      mounted.current = true;
    } else {
      /*update*/
      setExtrTexts(sendText); /*원본 텍스트 수정*/
      SendData(); /*번역 API 호출*/
    }
  }, [sendText]);

  function BtnClicked() {
    /*번역 버튼 클릭*/
    const result = modTextResults.map(data => data.text);
    setSendText(result); /*수정된 텍스트로 sendText를 수정*/
  }

  function SendData() {
    /*API호출*/
    setSrcText(imgId, sendText); /*수정된 추출 텍스트를 서버로 보내기*/
    getTransText(imgId, lan).then(response => {
      /*추출 텍스트를 이용해 파파고 API호출*/
      /*response = 번역 결과*/
      const result = response.data.text_lists.map(data => {
        return data;
      });
      setTransTexts(result); /*새로 번역된 텍스트로 수정*/
    });
  }

  return (
    <Fragment>
      <div className="TextSection">
        {modTextResults.map(data => (
          <textarea
            className="TextArea"
            key={data.pk}
            value={data.text}
            onChange={e => modifyText(e, data.pk)}
          ></textarea>
        ))}
      </div>
      <div className="BtnSection">
        <button className="commonBtn" onClick={BtnClicked}>
          번역
        </button>
      </div>
    </Fragment>
  );
}

export default ExtTextField;
