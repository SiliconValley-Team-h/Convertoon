/* 번역 버튼 + 삽입 버튼 */
import styles from './Buttons.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Buttons(props) {
  const [disable, setDisable] = useState(true);
  const [resultImg, setResultImg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(resultImg);
    resultImg !== '' &&
      navigate('/save', { state: { imgId: props.imgId, srcImg: props.srcImg, resultImg: resultImg } });
  }, [resultImg]);

  function transLated() {
    if (props.trans == null) {
      alert('언어를 선택해주세요.');
    } else {
      setDisable(false);
      axios.post(`http://127.0.0.1:8000/api/translate/${props.imgId}/`, { LAN: `${props.trans}` }).then(response => {
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

  const onClickIns = event => {
    event.preventDefault();
    axios.get(`http://127.0.0.1:8000/api/getInsTextImg/${props.imgId}/`).then(response => {
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
