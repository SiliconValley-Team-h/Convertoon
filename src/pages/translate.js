import { React, Fragment, useState, useEffect } from 'react';
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
  const modTexts = location.state.modTexts;
  const [texts, setTexts] = useState(modTexts);
  const [trsTexts, setTrsTexts] = useState([]);
  const [btnClick, setBtnClick] = useState(false);
  const [trans, setTrans] = useState(false);

  useEffect(() => {
    console.log(texts);
  }, [texts]);

  function getData(trsTexts) {
    setTrsTexts(trsTexts);
    concatData(trsTexts, texts);
  }

  function getBtnValue(btnClick) {
    setBtnClick(btnClick);
  }

  function concatData(trsTexts, texts) {
    let tmp = [];
    for (let i = 0; i < texts.length; i++) {
      tmp[i] = { orgText: texts[i], trsText: trsTexts[i] };
    }
    setTexts(tmp);
  }

  function transData(trans) {
    setTrans(trans);
  }
  return (
    <Fragment>
      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.section}>
            <SelectLang transData={transData} />
          </div>
          <div className={styles.section}>
            {texts.map(text => ((<TranslateField text={text} />), (<TranslateField text={text} />)))}
          </div>
          <div className={styles.section}>
            <Buttons imgId={imgId} srcImg={srcImg} trans={trans} getData={getData} getBtnValue={getBtnValue} />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Translate;
