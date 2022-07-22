import arrow from '../images/arrow.png';
import LanDropdown from '../buttons/LanDropdown';
import TransBtn from '../buttons/TransBtn';

import '../../styles/common/_Buttons.scss';
import '../../styles/common/_Images.scss';
import '../../styles/states/_LanState.scss';

/*ModifyText 페이지에서 사용할 언어 선택 State*/
function LanState() {
  return (
    <section className="lanSelector">
      <span>한국어</span>
      <img className="arrow" src={arrow} alt="arrow" />
      <LanDropdown />
      <TransBtn />
    </section>
  );
}

export default LanState;
