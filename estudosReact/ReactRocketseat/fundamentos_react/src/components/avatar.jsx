import styles from "./avatar.module.css";

export function Avatar({ hasborder = true, src}) {
  return (
    <img className={hasborder ? styles.avatarWhithBorder : styles.avatar} src={src} />
    )
}
