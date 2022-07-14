import { React, Fragment, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Translate.module.css';
import SelectLang from '../components/translate/SelectLang';
import Buttons from '../components/translate/Buttons';
import Header from '../components/common/Header';
import TranslateField from '../components/translate/TranslateField';
import axios from 'axios';

function Translate() {
  const location = useLocation();
  const imgId = location.state.imgId;
  const [texts, setTexts] = useState([]);
  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
    };
    const url = 'http://127.0.0.1:8000/api/extractTexts/3'; /*test용*/
    /*const url = `http://127.0.0.1:8000/api/extractTexts/${imgId}`;    수정필요*/
    axios.get(url, { headers }).then(function (response) {
      // response
      setTexts(response.data.map(t => ({ src_text: t.fields.src_text, trs_text: t.fields.trs_text })));
    });
  }, []);

  useEffect(() => {
    console.log(texts);
  }, [texts]);

  return (
    <Fragment>
      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.section}>
            <SelectLang />
          </div>
          <div className={styles.section}>
            {texts.map(text => ((<TranslateField text={text} />), (<TranslateField text={text} />)))}
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
