import { Fragment, useState } from 'react';
import Header from '../components/common/Header';
import State from '../components/common/State';
import TextView from '../components/extract/TextView';
import styles from './Extract.module.css';

function Extract() {
  const [img, setImg] = useState(''); /* 선택한 이미지 파일 */
  const [visible, setVisible] = useState(true); /* 파일 선택 & 업로드 버튼 숨기기 여부 */
  const [disable, setDisable] = useState(true); /* 버튼 활성화 여부 */

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

  /* 업로드 버튼 클릭 시 */
  const onClick = event => {
    event.preventDefault();
    /* 이미지 파일 선택 안했을 경우 */
    if (img === '') {
      return;
    }
    setVisible(current => !current); /* 파일 선택 & 업로드 버튼 숨기기 */
    setDisable(current => !current); /* 추출 버튼 활성화 */
  };

  return (
    <Fragment>
      <Header />
      <State>
        <p className={styles.text}>추출된 텍스트</p>
      </State>
      <main>
        <div className={styles.container}>
          <div className={styles.viewBox}>
            {visible ? (
              <div>
                <input
                  type="file"
                  className={styles.file}
                  onChange={e => {
                    encodeFileToBase64(e.target.files[0]);
                  }}
                />{' '}
                <button className={styles.uploadBtn} onClick={onClick}>
                  Upload
                </button>
              </div>
            ) : (
              <img className={styles.previewImg} src={img} alt="previewImg" />
            )}
          </div>
          <div className={styles.viewBox}>
            <div>
              <TextView />
              <button className={disable ? styles.disabledExtractBtn : styles.abledExtractBtn} disabled={disable}>
                추출
              </button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Extract;
