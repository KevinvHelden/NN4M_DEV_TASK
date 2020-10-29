import classnames from "classnames";
import styles from "./App.module.scss";
import { Text } from "./components/elements";
import { Header } from "./components/views";

function App() {
  return (
    <div className={classnames(styles.root)}>
      <Header />
      <main>
        <div className={classnames(styles.greeting)}>
          <Text text={"Welcome to River Island"} variant={"h1"} />
          <Text text={"Open the menu to get started."} />
        </div>
      </main>
    </div>
  );
}

export default App;
