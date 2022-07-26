import React, { Fragment, useState, useEffect, useContext, useRef } from 'react';
import { ImgInfoContext } from '../../store/ImgInfo';
import { setSrcText, getTransText } from '../../services/API_Service'; /*axios*/
import '../../styles/layout/_TextArea.scss';

function ExtTextField(props) {
  const { imgId, extrTexts, setExtrTexts, setTransTexts, lan } = useContext(ImgInfoContext);

  const result = props.texts.map((data, index) => {
    return { pk: index, text: data };
  });

  const [modTextResults, setModTextResults] = useState(result); /* 수정된 추출 텍스트*/

  function modifyText(e, i) {
    /*텍스트 입력 시 호출되는 함수*/
    /*index가 i인 경우에만 값 변경*/
    /*e.target.value : 입력된 값, item : 원래 저장되어 있던 값*/
    setModTextResults(modTextResults.map((item, index) => (index === i ? { pk: index, text: e.target.value } : item)));
  }

  useEffect(() => {
    console.log(`extrTexts:${extrTexts}`);
  }, [extrTexts]);

  /*sendText가 변경될 때 렌더링*/
  /*BtnClicked()에서 setSendText를 실행한 후 실행됨*/

  function BtnClicked() {
    /*번역 버튼 클릭*/
    SendData();
  }

  function SendData() {
    /*API호출*/
    setExtrTexts(modTextResults.map(data => data.text));
    setSrcText(imgId, modTextResults).then(response => {
      if (response.data === 'SUCCESS') {
        getTransText(imgId, lan).then(response => {
          /*추출 텍스트를 이용해 파파고 API호출*/
          /*response = 번역 결과*/
          const result = response.data.text_lists.map(data => {
            return data;
          });
          setTransTexts(result); /*새로 번역된 텍스트로 수정*/
        });
      }
    }); /*수정된 추출 텍스트를 서버로 보내기*/
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
