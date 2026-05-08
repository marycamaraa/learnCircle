import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Articles from './pages/Articles'
import GraphicsAutomation from './pages/GraphicAutomation'

import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <nav>
          <link to="./pages/Home">Home</link>
          <link to="./pages/Articles">Articles</link>
          <link to="./pages/GraphicAutomation">Graphics and Automation</link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path='Articles' element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
