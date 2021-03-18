import { useHistory } from 'react-router-dom';
import d from "./style.module.css";

const GamePage = () => {
  const history = useHistory();
  const handleClick = () => {    
    history.push('/');
  }

  return (
    <header className={d.root}>
      <div className={d.forest}></div>
      <div className={d.container}>
        <h1>This Game Page!!!</h1>
        <button onClick={handleClick}>Home Page</button>
      </div>
    </header>
  );
};

export default GamePage;