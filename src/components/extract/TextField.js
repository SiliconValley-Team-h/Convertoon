import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.css';

function TextField({ text }) {
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
      <textarea className={styles.textField} ref={inputEl} readOnly={read}>
        {text}
      </textarea>
      <div>
        <button className={styles.modifyBtn} onClick={modify} style={{ float: 'right' }}>
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
