import logo from '../logo.svg'
import '../App.css'
import { Link } from "react-router-dom";

function Home() {

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link
              className="App-link font-bold"
              to="/about"
              rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </header>
      </div>
  )
}

export default Home
