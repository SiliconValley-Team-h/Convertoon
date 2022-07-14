import { React, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Translate.module.css';
import SelectLang from '../components/translate/SelectLang';
import Buttons from '../components/translate/Buttons';
import Header from '../components/common/Header';
import TranslateField from '../components/translate/TranslateField';

function Translate() {
  const location = useLocation();
  const imgId = location.state.imgId;
  const srcImg = location.state.srcImg;

  return (
    <Fragment>
      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.section}>
            <SelectLang />
          </div>
          <div className={styles.section}>
            <TranslateField />
            <TranslateField />
          </div>
          <div className={styles.section}>
            <Buttons imgId={imgId} srcImg={srcImg} />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Translate;
