import { React, Fragment, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Translate.module.css';
import SelectLang from '../components/translate/SelectLang';
import Buttons from '../components/translate/Buttons';
import Header from '../components/common/Header';
import axios from 'axios';

function Translate() {
  const location = useLocation();
  const { imgId, srcImg, modTexts } = location.state;
  const [btnClick, setBtnClick] = useState(false);
  const [trans, setTrans] = useState(null);
  const [message, setMessage] = useState('수정하기');
  const [read, setRead] = useState(true);
  const mounted = useRef(false);

  const result = modTexts.map((data, index) => {
    return { pk: index, text: '' };
  });

  const [modTextResults, setModTextResults] = useState(result); // 수정된 텍스트
  const [sendText, setSendText] = useState([]);

  function getData(modTextResults) {
    setModTextResults(modTextResults);
    const result = modTextResults.map(data => data.text);
    setSendText(result);
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
      const result = modTextResults.map(data => data.text);
      setSendText(result);
    }
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      SendData();
      console.log(sendText);
    }
  }, [sendText]);

  function modifyText(e, i) {
    setModTextResults(modTextResults.map((item, index) => (index === i ? { pk: index, text: e.target.value } : item)));
  }

  function SendData() {
    axios
      .post(`http://127.0.0.1:8000/api/trsModify/${imgId}/`, {
        text_lists: sendText,
        count: sendText.length,
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
              <div style={{ margin: '5px' }}>
                {modTexts.map(text => (
                  <textarea
                    style={{ resize: 'none', width: 400 + 'px', height: 100 + 'px', border: 1 + 'px solid black' }}
                    readOnly={true}
                    disabled={true}
                    value={text}
                  ></textarea>
                ))}
                {/*원본 텍스트*/}
              </div>
            </span>
            <span style={{ display: 'flex', textAlign: 'left' }}>
              <div style={{ margin: '5px' }}>
                {modTextResults.map(data => (
                  <textarea
                    style={{ resize: 'none', width: 400 + 'px', height: 100 + 'px', border: 1 + 'px solid black' }}
                    readOnly={read}
                    disabled={read}
                    key={data.pk}
                    value={data.text}
                    onChange={e => modifyText(e, data.pk)}
                  ></textarea>
                ))}
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
