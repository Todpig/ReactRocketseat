import styles from "./Post.module.css";
import { Comment } from "./comment";
import { Avatar } from "./avatar";

const coments = [1, 2, 3];

export function Post(props) {
  const publishedDateformatted = new Intl.DateTimeFormat("pt-br", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(props.publishedAt);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title={publishedDateformatted} dateTime="">
          {publishedDateformatted}
        </time>
      </header>
      <div className={styles.content}>
        {props.content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else {
            return (
              <p>
                <a href="#"> {line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentario" />
        <footer>
          <button type="submit">Vá lá</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {coments.map((coment) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
}
