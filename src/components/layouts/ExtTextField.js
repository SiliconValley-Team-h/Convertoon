import React, { Fragment, useState, useEffect, useContext } from 'react';
import { ImgInfoContext } from '../../store/ImgInfo';

import '../../styles/layout/_TextArea.scss';

function ExtTextField(props) {
  const { extrTexts, setExtrTexts, transTexts, setTransTexts } = useContext(ImgInfoContext);

  const result = props.texts.map((data, index) => {
    return { pk: index, text: data };
  });

  const [modTextResults, setModTextResults] = useState(result); // 수정된 텍스트

  function modifyText(e, i) {
    setModTextResults(modTextResults.map((item, index) => (index === i ? { pk: index, text: e.target.value } : item)));
    if (props.state === 'extr') {
      setExtrTexts(extrTexts.map((item, index) => (index === i ? e.target.value : item)));
    } else {
      setTransTexts(transTexts.map((item, index) => (index === i ? e.target.value : item)));
    }
  }

  return (
    <Fragment>
      {modTextResults.map(data => (
        <textarea
          className="TextArea"
          key={data.pk}
          value={data.text}
          onChange={e => modifyText(e, data.pk)}
        ></textarea>
      ))}
    </Fragment>
  );
}

export default ExtTextField;
