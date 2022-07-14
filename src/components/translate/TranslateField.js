import React, { useState, useRef } from 'react';
import styles from './TransField.module.css';

function TranslateField({ text }) {
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
    <div style={{ margin: '5px' }}>
      <span lang="ko">
        <textarea className={styles.textField} readOnly={true} disabled={true} value={text}></textarea>
      </span>
      <span lang="en">
        <textarea className={styles.textField} ref={inputEl} readOnly={read}></textarea>
      </span>
      <div>
        <button className={styles.modifyBtn} onClick={modify} style={{ marginTop: 0, float: 'right' }}>
          {message}
        </button>
      </div>
    </div>
  );
}

export default TranslateField;
