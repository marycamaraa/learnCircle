import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Articles from './pages/Articles'
import GraphicsAutomation from './pages/GraphicsAutomation'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-layout">
          <NavBar />

          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/GraphicsAutomation" element={<GraphicsAutomation />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
