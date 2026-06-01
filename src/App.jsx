import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Beijing from './pages/Beijing'
import Chengdu from './pages/Chengdu'
import Xinjiang from './pages/Xinjiang'
import ChinaMap from './pages/ChinaMap'
import TravelGuide from './pages/TravelGuide'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beijing" element={<Beijing />} />
          <Route path="/chengdu" element={<Chengdu />} />
          <Route path="/xinjiang" element={<Xinjiang />} />
          <Route path="/china-map" element={<ChinaMap />} />
          <Route path="/travel-guide" element={<TravelGuide />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
