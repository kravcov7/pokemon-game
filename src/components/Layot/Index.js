import "./styles.modules.css";

function Layot({title, descr}) {
  return (
    <section className="root">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>{ title }</h3>
            <span className="separator"></span>
          </div>
          <div className="desc full">
            <p>{ descr }</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Layot;
