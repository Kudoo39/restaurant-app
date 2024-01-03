import React from 'react'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Hour from './components/Hour/Hour'
import Footer from './components/Footer/Footer'
import Special from './components/Special/Special'
import Chat from './components/Chat/Chat'
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  const { i18n } = useTranslation()
  return (
    <Router>
      <Nav />
      {/* <Header /> */}
      <Chat key={i18n.language} />
      <Routes>
        <Route path="/*" element={<Menu />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/hour/*" element={<Hour />} />
        <Route path="/special/*" element={<Special />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
