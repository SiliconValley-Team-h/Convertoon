/* 번역 버튼 + 삽입 버튼 */
import styles from './Buttons.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Buttons(props) {
  const [disable, setDisable] = useState(true);

  function transLated() {
    setDisable(false);
  }

  return (
    <div>
      <button className={styles.btn} onClick={transLated}>
        번역
      </button>
      <Link to={`/save`} state={{ imgId: props.imgId, srcImg: props.srcImg }}>
        <button className={styles.btn} disabled={disable}>
          삽입
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
