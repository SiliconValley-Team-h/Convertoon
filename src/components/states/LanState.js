import { useEffect, useState } from 'react';

import arrow from '../images/arrow.png';
import LanDropdown from '../buttons/LanDropdown';
import TransBtn from '../buttons/TransBtn';

import '../../styles/common/_Buttons.scss';
import '../../styles/common/_Images.scss';
import '../../styles/common/_Texts.scss';
import '../../styles/states/_LanState.scss';

/*ModifyText 페이지에서 사용할 언어 선택 State*/
function LanState() {
  const [selectLan, setSelectLan] = useState(null);

  useEffect(() => {}, [selectLan]);

  return (
    <section className="lanContainer">
      <div className="lanBox">
        <span className="lanText">한국어</span>
      </div>
      <div className="arrowBox">
        <img className="arrow" src={arrow} alt="arrow" />
      </div>
      <div className="transBox">
        <LanDropdown selectLan={selectLan} setSelectLan={setSelectLan} />
        <TransBtn selectLan={selectLan} />
      </div>
    </section>
  );
}

export default LanState;
