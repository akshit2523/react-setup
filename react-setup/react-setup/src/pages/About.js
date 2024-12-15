import logo from '../logo.svg'
import '../App.css'
import { Link } from "react-router-dom";

function About() {
  return (
      <div className="App">
        <header className="App-header !bg-purple-900">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link
              className="App-link font-bold"
              to="/"
              rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </header>
      </div>
  )
}

export default About
