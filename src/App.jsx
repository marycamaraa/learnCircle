import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home/Home'
import Articles from './pages/Articles/Articles'
import GraphicsAutomation from './pages/GraphicsAutomation/GraphicsAutomation'
import ProjectBase from './pages/ProjectBase/ProjectBase'

import './App.css'
import ProjectBaseSection from './components/ProjectBaseSection'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-layout">
          <Navbar />

          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/GraphicsAutomation" element={<GraphicsAutomation />} />
              <Route path="/ProjectBaseSection" element={<ProjectBaseSection />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
