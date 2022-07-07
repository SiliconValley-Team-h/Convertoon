import { React } from 'react';
import Header from '../components/common/Header';
import State from '../components/common/State';
import styles from './Translate.module.css';
import SelectLang from '../components/translate/SelectLang';
import Buttons from '../components/translate/Buttons';

function Translate() {
  return (
    <div>
      <Header />
      <State>
        <p className={styles.text}>추출된 텍스트</p>
      </State>
      <main>
        <div className={styles.container}>
          <div className={styles.section}>
            <SelectLang />
          </div>
          <div className={styles.section}></div>
          <div className={styles.section}>
            <Buttons />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Translate;
