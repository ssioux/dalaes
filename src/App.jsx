import './App.scss'
import { Routes, Route } from 'react-router-dom'

// Components
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import MainDashBoard from './components/Dashboard/MainDashBoard'
import Portfolio from './components/Portfolio/Portfolio'
import Chess from './components/Chess/Game'
import Exp from "./components/Experience/Exp"
import Error from "./components/error/Error"
import NotFound from "./components/error/NotFound"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Exp />} />
          <Route path="/dashboard" element={<MainDashBoard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/chess" element={<Chess />} />
          
          {/* Error Pages */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />



        </Route>
      </Routes>
    </>
  )
}

export default App
