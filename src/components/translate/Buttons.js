/* 번역 버튼 + 삽입 버튼 */

import { useEffect, useState } from 'react';

import axios from 'axios';
import styles from './Buttons.module.css';
import { useNavigate } from 'react-router-dom';

function Buttons(props) {
  const [disable, setDisable] = useState(true);
  const [resultImg, setResultImg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(resultImg);
    resultImg !== '' && navigate('/save', { state: { srcImg: props.srcImg, resultImg: resultImg } });
  }, [resultImg]);

  function transLated() {
    if (props.trans == null) {
      alert('언어를 선택해주세요.');
    } else {
      setDisable(false);
      axios
        .post(`http://convertoon.shop/api/translate/${props.imgId}/`, JSON.stringify({ LAN: `${props.trans}` }))
        .then(response => {
          const textArray = response.data.text_lists;
          const result = textArray.map((data, index) => {
            return { pk: index, text: data };
          });
          props.getData(result);
          props.getBtnValue(true);
        });
    }
  }

  const onClickIns = event => {
    event.preventDefault();
    axios.get(`http://convertoon.shop/api/getInsTextImg/${props.imgId}/`).then(response => {
      setResultImg(response.data.image);
    });
  };

  return (
    <div>
      <button className={styles.btn} onClick={transLated}>
        번역
      </button>
      <button className={styles.btn} disabled={disable} onClick={onClickIns}>
        삽입
      </button>
    </div>
  );
}

export default Buttons;
