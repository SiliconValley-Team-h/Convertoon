import React, { Fragment, useState } from 'react';
import '../../styles/layout/_TextArea.scss';

import { setSrcText } from '../../services/API_Service';
function ExtTextField(texts, imgId) {
  const [modTextResults, setModTextResults] = useState(texts); // 수정된 텍스트
  const [sendText, setSendText] = useState([]); //전송할 텍스트

  function modifyText(e, i) {
    setModTextResults(modTextResults.map((item, index) => (index === i ? { pk: index, text: e.target.value } : item)));
  }

  function transLated() {
    setSrcText(imgId);
  }

  return (
    <Fragment>
      {texts.map(data => (
        <textarea
          className="TextArea"
          key={data.pk}
          value={data.text}
          onChange={e => modifyText(e, data.pk)}
        ></textarea>
      ))}
      <button onClick={transLated}>번역</button>
    </Fragment>
  );
}

export default ExtTextField;
