import zoomin from '../images/zoomin.png';
import zoomout from '../images/zoomout.png';

import '../../styles/common/_Buttons.scss';

/* convertoon 페이지의 확대/축소 버튼 */
function ZoomBtn(props) {
  return (
    <section className="zoomBtnFrame">
      <img className="zoomoutBtn" src={zoomout} alt="확대" onClick={props.zoomOut} />
      <img className="zoominBtn" src={zoomin} alt="축소" onClick={props.zoomIn} />
    </section>
  );
}

export default ZoomBtn;
