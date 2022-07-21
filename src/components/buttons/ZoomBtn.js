import zoomin from '../images/zoomin.png';
import zoomout from '../images/zoomout.png';

import '../../styles/common/_Buttons.scss';

/* convertoon 페이지의 확대/축소 버튼 */
function ZoomBtn() {
  return (
    <section className="zoomBtnFrame">
      <img className="zoominBtn" src={zoomout} alt="확대" />
      <img className="zoomoutBtn" src={zoomin} alt="축소" />
    </section>
  );
}

export default ZoomBtn;
