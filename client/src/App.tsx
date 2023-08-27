import type { Component } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  return (
    <>
      <nav class={styles.Nav}>
        <p>Search</p>
        <p>Menu</p>
      </nav>
      <main>
        <div class={styles.App}>
          <div>
            <p>Shopping list</p>
            <div class={styles.Section}>
              <p class="text-3xl font-bold underline">Masło orzechowe</p>
            </div>
          </div>
          <div>
            <p>Recipes</p>
            <div class={styles.Section}>
              <p>Curry</p>
            </div>
          </div>
          <div>
            <p>ToDo</p>
            <div class={styles.Section}>
              <p>Napisać umowę</p>
              <p>Kupić router</p>
            </div>
          </div>
          <div>
            <p>Calendar (and all events)</p>
            <div class={styles.Section}>
              <p>1,2,3,4,5</p>
              <p>Kosze</p>
            </div>
          </div>
          <div>
            <p>Notes (written in markdown)</p>
            <div class={styles.Section}>
              <p>D&D</p>
            </div>
          </div>
          <div>
            <p>Photos</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
