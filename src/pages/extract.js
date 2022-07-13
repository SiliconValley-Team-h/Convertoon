import { Fragment, useState, useRef } from 'react';
import axios from 'axios';
import Header from '../components/common/Header';
import State from '../components/common/State';
import ImgView from '../components/extract/ImgView';
import TextView from '../components/extract/TextView';
import TextField from '../components/extract/TextField';
import styles from './Extract.module.css';

function Extract() {
  const [img, setImg] = useState(''); /* 선택한 이미지 파일 */
  const [visible, setVisible] = useState(false); /* 미리보기 활성화 여부 */
  const [disable, setDisable] = useState(true); /* 추출 버튼 활성화 여부 */
  const [movedisable, setMoveDisable] = useState(true);
  const [btnVisible, setBtnVisible] = useState(true); /* 추출 버튼 표시 여부 */
  const imageInput = useRef();

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

  /* 파일 선택 시 */
  const onChange = event => {
    event.preventDefault();
    encodeFileToBase64(event.target.files[0]);

    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    axios.post('http://127.0.0.1:8000/api/results/', formData);

    setVisible(true); /* 미리보기 활성화 */
    setDisable(false); /* 추출 버튼 활성화 */
  };

  const onClickInput = event => {
    event.preventDefault();
    imageInput.current.click();
  };

  const onClickExtract = event => {
    event.preventDefault();
    setMoveDisable(false);
    setBtnVisible(false);
  };

  const onClickMove = event => {
    event.preventDefault();
    window.location.href = '/translate';
  };

  return (
    <Fragment>
      <Header />
      <State>
        <p className={styles.text}>추출된 텍스트</p>
        <button className={styles.moveBtn} onClick={onClickMove} disabled={movedisable}>
          번역하러가기
        </button>
      </State>
      <main className={styles.container}>
        <div className={styles.viewBox}>
          <div>
            <ImgView visible={visible} image={img} />
            <div>
              <input type="file" id="input-file" style={{ display: 'none' }} onChange={onChange} ref={imageInput} />
              <button className={styles.selectBtn} for="input-file" onClick={onClickInput}>
                파일 선택
              </button>
            </div>
          </div>
        </div>
        <div className={styles.viewBox}>
          {btnVisible ? (
            <div>
              <TextView />
              <button
                className={disable ? styles.disabledExtractBtn : styles.abledExtractBtn}
                disabled={disable}
                onClick={onClickExtract}
              >
                추출
              </button>
            </div>
          ) : (
            <div>
              <TextField />
              <TextField />
            </div>
          )}
        </div>
      </main>
    </Fragment>
  );
}

export default Extract;
