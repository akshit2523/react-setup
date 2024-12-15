import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// import { ProtectRoute } from './hook/ProtectRoute'

function App() {
  return (
      <Router>
        <Routes>
          {/*<Route element={<ProtectRoute/>}>*/}
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          {/*</Route>*/}
        </Routes>
      </Router>
  )
}

export default App
