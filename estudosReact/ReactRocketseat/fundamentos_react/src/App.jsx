import { useState } from "react";
import { Header } from "./components/header";
import { Post } from "./post";
import "./global.css";
import styles from "./app.module.css";
import { Sidebar } from "./components/Sidebar";
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="kalebe" content="bla bla bla" />
        </main>
      </div>
    </div>
  );
}
