import '../../styles/states/_ConvertState.scss';

/*Convertoon 페이지에서 사용할 State*/
function ConvertState() {
  return (
    <div className="convertContainer">
      <section className="viewBox">원본</section>
      <section className="viewBox">번역본</section>
    </div>
  );
}

export default ConvertState;
