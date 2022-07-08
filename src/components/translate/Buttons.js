/* 번역 버튼 + 삽입 버튼 */
import styles from './Buttons.module.css';
import { Link } from 'react-router-dom';

function Buttons() {
  return (
    <div>
      <button className={styles.btn}>번역</button>
      <Link to={`/save`}>
        <button className={styles.btn} disabled="true">
          삽입
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
