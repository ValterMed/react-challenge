import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>  [ Making You Life Easier ] </h3>
        <h1>
          Discovering the World.
        </h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">All</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Travel</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Lifestyle</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Business</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Food</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Work</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
