import d from './style.module.css';

function Header({title, descr, onClickButton }) {
  const handleClick = () => {
    console.log('###: <Header />');
    onClickButton && onClickButton('game');
  }

  return (
    <header className={d.root}>
      <div className={d.forest}></div>
      <div className={d.container}>
        <h1>{ title }</h1>
        <p>{ descr }</p>
        <button onClick={handleClick} >Start Game</button>
      </div>
    </header>
  );
}

export default Header;
