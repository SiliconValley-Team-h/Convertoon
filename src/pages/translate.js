import { React, Fragment, useEffect } from 'react';
import styles from './Translate.module.css';
import SelectLang from '../components/translate/SelectLang';
import Buttons from '../components/translate/Buttons';
import Header from '../components/common/Header';
import TranslateField from '../components/translate/TranslateField';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Translate(location) {
  /*const data = location.state.data;*/
  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = 'http://127.0.0.1:8000/api/extractTexts/3'; /*url은 extract 페이지에서 link to로 받아와서 수정*/
    /* const url = `http://127.0.0.1:8000/api/extractTexts/${data}`; */
    axios.get(url, { headers }).then(function (response) {
      // response
      alert(JSON.stringify(response.data));
    });
  }, []);

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
            <Buttons />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Translate;
