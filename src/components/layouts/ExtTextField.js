import React, { Fragment, useState, useEffect, useRef } from 'react';
import axios from 'axios';

function ExtTextField(props) {
  const [modTextResults, setModTextResults] = useState([]);
  const [sendText, setSendText] = useState([]);
  const mounted = useRef(null);

  function modExtText(e, i) {
    setModTextResults(modTextResults.map((item, index) => (index === i ? { pk: index, text: e.target.value } : item)));
  }

  return (
    <Fragment>
      {props.texts.map(data => (
        <textarea key={data.pk} value={data.text} onChange={e => modExtText(e, data.pk)}></textarea>
      ))}
      <button>번역</button>
    </Fragment>
  );
}

export default ExtTextField;
