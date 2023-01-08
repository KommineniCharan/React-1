import "./App.css";
import Message from "./Message";

function App() {
  return (
    <div className="App-header">
      <h1 className="apil">Welcome to App.js</h1>
      <p id="ghe">Hello, Good Evening</p>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="one-box">
              <p>Col-3</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="one-box">
              <p>Col-3</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="one-box">
              <p>Col-3</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="one-box">
              <p>Col-3</p>
            </div>
          </div>
        </div>
      </div>

      <Message />
    </div>
  );
}

export default App;
