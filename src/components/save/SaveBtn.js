import { saveAs } from 'file-saver';
import styles from './SaveBtn.module.css';

function SaveBtn({ img }) {
  // 이미지 저장
  const onClickSave = () => {
    saveAs(img, 'result.png');
  };

  return (
    <button className={styles.saveBtn} onClick={onClickSave}>
      저장
    </button>
  );
}

export default SaveBtn;
