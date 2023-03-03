import styles from "./avatar.module.css";
import {ImgHTMLAttributes} from 'react';


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasborder?: boolean;
}

// export function Avatar({ hasborder = true, src , alt}: AvatarProps) {
export function Avatar({ hasborder = true, ...props}: AvatarProps) {
  return (
    <img
      className={hasborder ? styles.avatarWhithBorder : styles.avatar}
      {...props}
    />
  );
}
