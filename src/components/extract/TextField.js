import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.css';

function TextField({ texts }) {
  const [message, setMessage] = useState('수정하기');
  const [read, setRead] = useState(true);
  const [modTexts, setModTexts] = useState([{ texts }]);
  const inputEl = useRef(null);

  function modify() {
    setRead(read => !read);
    setMessage(message === '수정하기' ? '수정완료' : '수정하기');
    if (read) {
      inputEl.current.focus();
    } else {
      console.log(`수정 후 텍스트 : ${inputEl.current.value}`); /* texts 수정 후 post */
    }
  }

  return (
    <div style={{ verticalAlign: 'middle' }}>
      {texts.map(text => (
        <textarea className={styles.textField} ref={inputEl} readOnly={read}>
          {text}
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

TextField.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextField;
