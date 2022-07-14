import { Fragment, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/common/Header';
import State from '../components/common/State';
import ImgView from '../components/extract/ImgView';
import TextView from '../components/extract/TextView';
import TextField from '../components/extract/TextField';
import styles from './Extract.module.css';

function Extract() {
  const [img, setImg] = useState(''); /* 선택한 이미지 파일 */
  const [imgId, setImgId] = useState(0);
  const [texts, setTexts] = useState([]);
  const [visible, setVisible] = useState(false); /* 미리보기 활성화 여부 */
  const [disable, setDisable] = useState(true); /* 추출 버튼 활성화 여부 */
  const [movedisable, setMoveDisable] = useState(true);
  const [btnVisible, setBtnVisible] = useState(true); /* 추출 버튼 표시 여부 */
  const imageInput = useRef();
  const formData = new FormData();

  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader(); /* reader 생성 */
    reader.readAsDataURL(fileBlob); /* fileBlob을 base64로 인코딩 */
    return new Promise(resolve => {
      reader.onload = () => {
        setImg(reader.result); /* reader.result 안의 문자열을 img에 세팅 */
        resolve();
      };
    });
  };

  useEffect(() => {
    console.log(imgId);
    imgId !== 0 && setDisable(false); /* 추출 버튼 활성화 */
  }, [imgId]);

  useEffect(() => {
    console.log(texts);
  }, [texts]);

  /* 파일 선택 시 */
  const onChange = event => {
    event.preventDefault();
    encodeFileToBase64(event.target.files[0]);

    formData.append('image', event.target.files[0]);
    axios.post('http://127.0.0.1:8000/api/results/', formData).then(response => {
      setImgId(response.data.img_id);
    });

    setVisible(true); /* 미리보기 활성화 */
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
      axios.get(`http://127.0.0.1:8000/api/extractTexts/${imgId}/`).then(response => {
        response.data.map(texts => setTexts(textArray => [...textArray, texts.fields.src_text]));
      });

      setMoveDisable(false);
      setBtnVisible(false);
    }
  };

  return (
    <Fragment>
      <Header />
      <State>
        <p className={styles.text}>추출된 텍스트</p>
        <Link to={`/translate`} state={{ imgId: imgId, srcImg: img }}>
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
              <TextField texts={texts} />
            </div>
          )}
        </div>
      </main>
    </Fragment>
  );
}

export default Extract;
