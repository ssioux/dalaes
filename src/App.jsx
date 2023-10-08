import './App.scss'
import { Routes, Route } from 'react-router-dom'

// Components
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Dashboard from './components/Dashboard/Dashboard'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />



        </Route>
      </Routes>
    </>
  )
}

export default App
