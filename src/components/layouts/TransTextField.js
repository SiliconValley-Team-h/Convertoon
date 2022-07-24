import React, { Fragment, useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ImgInfoContext } from '../../store/ImgInfo';
import { setTrsText, getResultImg } from '../../services/API_Service';
import '../../styles/layout/_TextArea.scss';
import axios from 'axios';

function ExtTextField(props) {
  const { BASE_URL, imgId, transTexts, setTransTexts, setResultImg } = useContext(ImgInfoContext);
  const navigate = useNavigate();

  const result = props.texts.map((data, index) => {
    return { pk: index, text: data };
  });

  const [modTextResults, setModTextResults] = useState(result); // 수정된 텍스트
  const [sendText, setSendText] = useState([]);
  const mounted = useRef(false);

  function modifyText(e, i) {
    setModTextResults(modTextResults.map((item, index) => (index === i ? { pk: index, text: e.target.value } : item)));
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setTransTexts(sendText);
      SendData();
    }
  }, [sendText]);

  useEffect(() => {
    if (transTexts !== '') {
      setModTextResults(
        transTexts.map((data, index) => {
          return { pk: index, text: data };
        }),
      );
    }
  }, [transTexts]);

  function BtnClicked() {
    const result = modTextResults.map(data => data.text);
    setSendText(result);
  }

  function SendData() {
    setTrsText(imgId, sendText);
    getResultImg(imgId).then(response => {
      setResultImg(BASE_URL + response.data.image);
    });
    navigate('/convertoon');
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
