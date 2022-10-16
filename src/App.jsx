import logo from './logo.svg';
import styles from './App.module.css';
import {createSignal, createEffect} from "solid-js"

function App() {

  const [p1, setP1] = createSignal("Alex Merced")
  const [p2, setP2] = createSignal("Tony Merced")

  let p1Input
  let p2Input

  createEffect(() => console.log(p1(), p2()))

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>Player: {p1}</h1>
        <h1>Player: {p2}</h1>
      </header>
      <form onSubmit={(event) => {
        event.preventDefault()
        setP1(p1Input.value)
        setP2(p2Input.value)
      }}>
        <input type="text" placeholder="player 1" name="p1" ref={p1Input}/>
        <input type="text" placeholder="player 2" name="p2" ref={p2Input}/>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
