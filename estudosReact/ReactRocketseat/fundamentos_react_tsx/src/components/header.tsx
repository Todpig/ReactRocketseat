import style from "./header.module.css";
import ignitelogo from "../img/ignite-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={ignitelogo} alt="logotipo do ignite project" />
    </header>
  );
}
