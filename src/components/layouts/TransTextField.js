import React, { Fragment, useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ImgInfoContext } from '../../store/ImgInfo';
import { BASE_URL, setTrsText } from '../../services/API_Service';
import '../../styles/layout/_TextArea.scss';

function ExtTextField(props) {
  const { lan, imgId, transTexts, setTransTexts, setResultImg } = useContext(ImgInfoContext);

  const navigate = useNavigate();

  const result = props.texts.map((data, index) => {
    return { pk: index, text: data };
  });

  const [modTextResults, setModTextResults] = useState(result); /*수정된 번역 텍스트*/
  const [sendText, setSendText] = useState([]); /*서버로 전송할 텍스트*/
  const mounted = useRef(false); /*update시에만 화면 렌더링(mount -> false)*/
  const [resultBtn, setResultBtn] = useState(false);

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
      setTransTexts(sendText); /*번역된 텍스트 수정*/
      SendData(); /*API 호출*/
    }
  }, [sendText]);

  useEffect(() => {
    setModTextResults(
      transTexts.map((data, index) => {
        return { pk: index, text: data };
      }),
    );
    console.log(transTexts);
    if (resultBtn) {
      setTrsText(imgId, transTexts, lan).then(response => {
        setResultImg('');
        setResultImg(BASE_URL + response.data.image);
        setTimeout(function () {
          navigate('/convertoon');
        }, 2000);
      }); /*수정된 번역 텍스트를 서버로 보내기*/
    }
  }, [transTexts]);

  function BtnClicked() {
    /*결과보기 버튼 클릭*/
    setResultBtn(true);
    const result = modTextResults.map(data => data.text);
    setSendText(result); /*수정된 텍스트로 sendText를 수정*/
  }

  function SendData() {
    /*API호출*/
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
          결과보기
        </button>
      </div>
    </Fragment>
  );
}

export default ExtTextField;
