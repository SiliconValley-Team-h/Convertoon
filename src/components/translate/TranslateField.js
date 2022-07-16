import React, { useState, useRef } from 'react';

function TranslateField({ texts }) {
  return (
    <div style={{ margin: '5px' }}>
      {/*
      <span lang="ko">
        <textarea
          className={styles.textField}
          readOnly={true}
          disabled={true}
          value={text.orgText == null ? text : text.orgText}
        ></textarea>
      </span>
      <span lang="en">
        <textarea
          className={styles.textField}
          ref={inputEl}
          readOnly={read}
          value={text.trsText == null ? '' : text.trsText}
        ></textarea>
      </span>
      <div>
        <button className={styles.modifyBtn} onClick={modify} style={{ marginTop: 0, float: 'right' }}>
          {message}
        </button>
      </div>
  */}
      {texts.map(text => (
        <textarea
          style={{ resize: 'none', width: 400 + 'px', height: 100 + 'px', border: 1 + 'px solid black' }}
          readOnly={true}
          disabled={true}
        >
          {text}
        </textarea>
      ))}
    </div>
  );
}

export default TranslateField;
