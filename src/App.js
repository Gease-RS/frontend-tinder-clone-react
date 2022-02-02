import "./App.css";
import Header from "./containers/Header";
import SwipeButton from "./containers/SwipeButton";
import TinderCard from "./containers/TinderCard.js";
import { Marginer } from "../src/components/marginer";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCard />
      <Marginer direction="vertical" margin="4em" />
      <SwipeButton />
    </div>
  );
}

export default App;
