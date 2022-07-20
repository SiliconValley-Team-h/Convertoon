import { Fragment, useEffect, useRef, useState } from 'react';

import Header from '../components/common/Header';
import ImgView from '../components/extract/ImgView';
import { Link } from 'react-router-dom';
import State from '../components/common/State';
import TextField from '../components/extract/TextField';
import TextView from '../components/extract/TextView';
import axios from 'axios';
import styles from './Extract.module.css';

function Extract() {
  const [img, setImg] = useState(''); // 선택한 이미지 파일
  const [imgId, setImgId] = useState(0);
  const [texts, setTexts] = useState([]);
  const [visible, setVisible] = useState(false); // 미리보기 활성화 여부
  const [disable, setDisable] = useState(true); // 추출 버튼 활성화 여부
  const [movedisable, setMoveDisable] = useState(true);
  const [btnVisible, setBtnVisible] = useState(true); // 추출 버튼 표시 여부
  const [modTexts, setModTexts] = useState([]); // 수정된 텍스트
  const imageInput = useRef();
  const formData = new FormData();

  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader(); // reader 생성
    reader.readAsDataURL(fileBlob); // fileBlob을 base64로 인코딩
    return new Promise(resolve => {
      reader.onload = () => {
        setImg(reader.result); // reader.result 안의 문자열을 img에 세팅
        resolve();
      };
    });
  };

  useEffect(() => {
    imgId !== 0 && setDisable(false); // 추출 버튼 활성화
    console.log(imgId);
  }, [imgId]);

  useEffect(() => {
    if (texts != '') {
      const result = [];
      for (let i = 0; i < texts.length; i++) {
        result.push(texts[i].text);
      }
      setModTexts(result);
      sendText();
    }
  }, [texts]);

  useEffect(() => {
    if (modTexts != '') {
      sendText();
    }
  }, [modTexts]);

  const getModTexts = text => {
    setModTexts(text);
  };

  /* 파일 선택 시 */
  const onChange = event => {
    event.preventDefault();
    encodeFileToBase64(event.target.files[0]);

    formData.append('image', event.target.files[0]);
    axios.post('http://convertoon.shop/api/results/', formData).then(response => {
      setImgId(response.data.img_id);
    });

    setVisible(true); // 미리보기 활성화
  };

  const onClickInput = event => {
    event.preventDefault();
    imageInput.current.click();
  };

  const onClickExtract = event => {
    event.preventDefault();

    if (imgId === 0) {
      img === '' ? alert('이미지를 선택해주세요.') : alert('텍스트를 추출 중입니다.');
    } else {
      axios.get(`http://convertoon.shop/api/extractTexts/${imgId}/`).then(response => {
        response.data.map(texts =>
          setTexts(textArray => [...textArray, { pk: texts.pk, text: texts.fields.src_text }]),
        );
      });

      setMoveDisable(false);
      setBtnVisible(false);
    }
  };

  function sendText() {
    axios
      .post(`http://convertoon.shop/api/srcModify/${imgId}/`, {
        text_lists: modTexts,
        count: texts.length,
        img_id: imgId,
      })
      .then(response => {
        if (response.data === 'success') {
          console.log('post success');
        }
      });
  }

  return (
    <Fragment>
      <Header />
      <State>
        <p className={styles.text}>추출된 텍스트</p>
        <Link to={`/translate`} state={{ imgId: imgId, srcImg: img, modTexts: modTexts }}>
          <button className={styles.moveBtn} disabled={movedisable}>
            번역하러가기
          </button>
        </Link>
      </State>
      <main className={styles.container}>
        <div className={styles.viewBox} style={visible ? { alignItems: 'flex-start' } : { alignItems: 'center' }}>
          <div>
            <ImgView visible={visible} image={img} />
            <div>
              <input type="file" id="input-file" style={{ display: 'none' }} onChange={onChange} ref={imageInput} />
              <button className={styles.selectBtn} htmlFor="input-file" onClick={onClickInput}>
                파일 선택
              </button>
            </div>
          </div>
        </div>
        <div className={styles.viewBox} style={btnVisible ? { alignItems: 'center' } : { alignItems: 'flex-start' }}>
          {btnVisible ? (
            <div>
              <TextView />
              <button className={disable ? styles.disabledExtractBtn : styles.abledExtractBtn} onClick={onClickExtract}>
                추출
              </button>
            </div>
          ) : (
            <div>
              <TextField texts={texts} imgId={imgId} getModTexts={getModTexts} />
            </div>
          )}
        </div>
      </main>
    </Fragment>
  );
}

export default Extract;
