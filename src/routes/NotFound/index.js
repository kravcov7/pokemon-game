import s from "./style.module.css";

const NotFound = () => {
  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1> 404 Not Found </h1>
      </div>
    </header>
  );
};

export default NotFound;