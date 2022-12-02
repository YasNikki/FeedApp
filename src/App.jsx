import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div>

          <Post author="D.VA" content="Overwatch" />
          <Post author="Jinx" content="Arcane" />
          <Post author="Lux" content="League of Legends" />

        </div>
      </div>
    </div>
  );
}