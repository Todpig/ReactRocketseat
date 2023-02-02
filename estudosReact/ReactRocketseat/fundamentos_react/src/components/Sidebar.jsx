import styles from '../components/sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/105653717?v=4" />
        <strong>Lucas Rafael</strong>
        <span>Web Develop</span>
      </div>
      <footer>
        <a href="#">
            Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
