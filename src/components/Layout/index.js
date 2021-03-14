import s from "./styles.module.css";

function Layout({title, urlBg, colorBg, children}) {
  const layoutStyle = {
    backgroundColor: colorBg,
    backgroundImage: urlBg ? `url('${urlBg}')` : '',    
};
  return (
    <section className={s.root} style={layoutStyle}>      
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{ title }</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            <div>{ children }</div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Layout;
