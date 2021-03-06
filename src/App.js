import classnames from "classnames";
import styles from "./App.module.scss";
import { Header } from "./components/views";
import { Home, AllProducts, Search, Product } from './routes';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={classnames(styles.root)}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/all-products" component={() => <AllProducts />} />
          <Route exact path="/search" component={() => <Search />} />
          <Route exact path="/product" component={() => <Product />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
