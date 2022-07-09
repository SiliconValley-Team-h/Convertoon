import React, { useState, useRef } from 'react';
import styles from './TransField.module.css';

function TranslateField() {
  const [message, setMessage] = useState('수정하기');
  const [read, setRead] = useState(true);
  const inputEl = useRef(null);

  function modify() {
    setRead(read => !read);
    setMessage(message === '수정하기' ? '수정완료' : '수정하기');
    if (read) {
      inputEl.current.focus();
    } else {
      alert(inputEl.current.value);
    }
  }

  return (
    <div>
      <span lang="ko">
        <textarea className={styles.textField} ref={inputEl} readOnly={read}>
          원본 텍스트
        </textarea>
      </span>
      <span lang="en">
        <textarea className={styles.textField} readOnly="true" disabled="true">
          번역된 텍스트
        </textarea>
      </span>
      <div>
        <button className={styles.modifyBtn} onClick={modify}>
          {message}
        </button>
      </div>
    </div>
  );
}

export default TranslateField;
