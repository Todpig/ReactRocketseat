import styles from "./comment.module.css";
import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";
import { Avatar } from "./avatar";

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasborder={false}
        src="https://avatars.githubusercontent.com/u/105653717?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Rafael</strong>
              <time title="03 de fevereiro as 09H">Cerca de 1h</time>
            </div>
            <button title="Deletar comentario">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
