import React, { useState, useRef, useEffect } from 'react';
import styles from './TextField.module.css';
import axios from 'axios';

function TextField({ texts, imgId, getModTexts }) {
  const [message, setMessage] = useState('수정하기');
  const [read, setRead] = useState(true);
  const [modTexts, setModTexts] = useState([]);
  const inputEl = useRef([]);

  useEffect(() => {
    getModTexts(modTexts);
  }, [modTexts]);

  function modify() {
    setRead(read => !read);
    setMessage(message === '수정하기' ? '수정완료' : '수정하기');
    if (!read) {
      setModTexts([]);
      for (let i = texts[0].pk; i < inputEl.current.length; i++) {
        setModTexts(currentArray => [...currentArray, inputEl.current[i].value]);
      }
    }
  }

  return (
    <div>
      {texts.map(data => (
        <textarea className={styles.textField} ref={el => (inputEl.current[`${data.pk}`] = el)} readOnly={read}>
          {data.text}
        </textarea>
      ))}
      <div>
        <button className={styles.modifyBtn} onClick={modify}>
          {message}
        </button>
      </div>
    </div>
  );
}

export default TextField;
