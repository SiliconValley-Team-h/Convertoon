import styles from './TransField.module.css';

function TranslateField() {
  return (
    <table className={styles.table}>
      <tr>
        <td className={styles.cols}>원본 텍스트</td>
        <td className={styles.cols}>번역된 텍스트</td>
      </tr>
    </table>
  );
}

export default TranslateField;
