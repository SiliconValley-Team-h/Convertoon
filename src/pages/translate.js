import { React } from 'react';
import styles from './Translate.module.css';
import SelectLang from '../components/translate/SelectLang';
import Buttons from '../components/translate/Buttons';

function Translate() {
  return (
    <div>
      <header className={styles.header}></header>
      <nav className={styles.state}></nav>
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
