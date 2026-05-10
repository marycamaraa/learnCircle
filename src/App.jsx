import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import NavBar from './components/NavBar'

import Home from './pages/Home'
import Articles from './pages/Articles'
import GraphicsAutomation from './pages/GraphicsAutomation'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/GraphicsAutomation" element={<GraphicsAutomation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
