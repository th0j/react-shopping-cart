import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import './App.css'
// import Login from './features/Login'
import Collections from './features/Collections'
import Header from './components/Header'
import Footer from './components/Footer'
import Drawer from './features/Drawer'

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Collections />} />
        </Routes>
      </main>

      <Drawer />
      <Footer />
    </div>
  )
}

export default App
