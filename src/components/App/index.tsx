import Carousel from "../Carousel";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Ladies&apos; Book Club</h1>
      </header>
      <div className="page-contents">
        <Carousel />
      </div>
    </div>
  );
};

export default App;
