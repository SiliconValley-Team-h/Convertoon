/* 번역 버튼 + 삽입 버튼 */
import styles from './Buttons.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Buttons(props) {
  const [disable, setDisable] = useState(true);
  function transLated() {
    if (!props.trans) {
      alert('언어를 선택해주세요.');
    } else {
      setDisable(false);
      axios.post(`http://127.0.0.1:8000/api/translate/${props.imgId}/`).then(response => {
        const textArray = response.data.text_lists;
        const result = [];
        for (let i = 0; i < textArray.length; i++) {
          result.push({ pk: i, text: textArray[i] });
        }
        props.getData(result);
        props.getBtnValue(true);
      });
    }
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
