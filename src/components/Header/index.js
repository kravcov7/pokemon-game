import d from './styles.module.css';

function Header({title, descr}) {
  return (
    <header className={d.root}>
      <div className={d.forest}></div>
      <div className={d.container}>
        <h1>{ title }</h1>
        <p>{ descr }</p>
      </div>
    </header>
  );
}

export default Header;
