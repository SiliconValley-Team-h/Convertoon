import { useState } from 'react';
import InputImg from '../components/extract/InputImg';
import TextView from '../components/extract/TextView';
import styles from './Extract.module.css';

function Extract() {
  const [img, setImg] = useState(''); /* 선택한 이미지 파일 */
  return (
    <div>
      <header className={styles.header}></header>
      <nav className={styles.state}></nav>
      <main>
        <div className={styles.container}>
          <div className={styles.viewBox}>
            <div>
              <InputImg />
              <button className={styles.uploadBtn}>Upload</button>
            </div>
          </div>
          <div className={styles.viewBox}>
            <div>
              <TextView />
              <button className={styles.extractBtn}>Upload</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Extract;
