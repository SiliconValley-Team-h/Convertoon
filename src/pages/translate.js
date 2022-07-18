import { React, Fragment, useState, useEffect, useRef } from 'react';
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
  const srcImg = location.state.srcImg;
  const modTexts = location.state.modTexts;
  const [trsTexts, setTrsTexts] = useState([]);
  const [btnClick, setBtnClick] = useState(false);
  const [trans, setTrans] = useState(null);
  const [message, setMessage] = useState('수정하기');
  const [read, setRead] = useState(true);
  const [modTextResults, setModTextResults] = useState([]); // 수정된 텍스트
  const inputEl = useRef([]);

  useEffect(() => {
    const result = [];
    for (let i = 0; i < trsTexts.length; i++) {
      result.push(trsTexts[i].text);
    }
    setModTextResults(result);
    SendData();
  }, [trsTexts]);

  useEffect(() => {
    SendData();
  }, [modTextResults]);

  function getData(trsTexts) {
    setTrsTexts(trsTexts);
  }

  function getBtnValue(btnClick) {
    setBtnClick(btnClick);
  }

  function transData(trans) {
    setTrans(trans);
  }

  function modify() {
    setRead(read => !read);
    setMessage(message === '수정하기' ? '수정완료' : '수정하기');
    if (!read) {
      setModTextResults([]);
      for (let i = trsTexts[0].pk; i < inputEl.current.length; i++) {
        setModTextResults(currentArray => [...currentArray, inputEl.current[i].value]);
      }
    }
  }

  function SendData() {
    axios
      .post(`http://127.0.0.1:8000/api/trsModify/${imgId}/`, {
        text_lists: modTextResults,
        count: modTextResults.length,
        img_id: imgId,
      })
      .then(response => {
        if (response.data === 'success') {
          console.log('post success');
        }
      });
  }

  return (
    <Fragment>
      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.section}>
            <SelectLang transData={transData} />
          </div>
          <div className={styles.textsection}>
            <span style={{ display: 'flex', textAlign: 'right' }}>
              <TranslateField texts={modTexts} />
            </span>
            <span style={{ display: 'flex', textAlign: 'left' }}>
              <div style={{ margin: '5px' }}>
                {/*
                {btnClick ? (
                  <div>
                    {trsTexts.map(text => (
                      <textarea
                        style={{ resize: 'none', width: 400 + 'px', height: 100 + 'px', border: 1 + 'px solid black' }}
                        readOnly={read}
                        disabled={read}
                        ref={inputEl}
                      >
                        {text}
                      </textarea>
                    ))}
                  </div>
                ) : (
                  <div>
                    {texts.map(text => (
                      <textarea
                        style={{ resize: 'none', width: 400 + 'px', height: 100 + 'px', border: 1 + 'px solid black' }}
                      ></textarea>
                    ))}
                  </div>
                )}
                */}
                {btnClick && (
                  <div>
                    {trsTexts.map(data => (
                      <textarea
                        style={{ resize: 'none', width: 400 + 'px', height: 100 + 'px', border: 1 + 'px solid black' }}
                        readOnly={read}
                        disabled={read}
                        ref={el => (inputEl.current[`${data.pk}`] = el)}
                      >
                        {data.text}
                      </textarea>
                    ))}
                  </div>
                )}
              </div>
            </span>
          </div>
          <div className={styles.textsection}>
            <div style={{ width: '400px' }}></div>
            <div style={{ width: '400px', textAlign: 'right' }}>
              <button className={styles.modifyBtn} onClick={modify} style={{ marginTop: 0 }} disabled={!btnClick}>
                {message}
              </button>
            </div>
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
