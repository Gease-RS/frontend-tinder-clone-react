import "./App.css";
import Header from "./containers/Header";
import SwipeButton from "./containers/SwipeButton";
import TinderCard from "./containers/TinderCard.js";

function App() {
  return (
    <div className="App">
      <Header />
      <SwipeButton />
      <TinderCard />
    </div>
  );
}

export default App;
