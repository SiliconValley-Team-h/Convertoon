/* 번역 버튼 + 삽입 버튼 */
import styles from './Buttons.module.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Buttons() {
  const [disable, setDisable] = useState(true);
  function transLated() {
    setDisable(false);
  }
  return (
    <div>
      <button className={styles.btn} onClick={transLated}>
        번역
      </button>
      <Link to={`/save`}>
        <button className={styles.btn} disabled={disable}>
          삽입
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
