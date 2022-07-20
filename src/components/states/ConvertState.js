import '../../styles/states/_ConvertState.scss';
import '../../styles/states/_LanState.scss';

/*Convertoon 페이지에서 사용할 State*/
function State() {
  return (
    <div>
      <div>
        <section className="lanSelector"></section>
      </div>
      <div className="convertContainer">
        <section className="viewBox">원본</section>
        <section className="viewBox">번역본</section>
      </div>
    </div>
  );
}

export default State;
