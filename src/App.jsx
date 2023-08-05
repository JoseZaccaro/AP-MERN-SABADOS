import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Nav from './components/Nav'

function App() {

  return (
    <MainLayout>
      <Nav />
      <Home />
    </MainLayout>
  )
}

export default App
