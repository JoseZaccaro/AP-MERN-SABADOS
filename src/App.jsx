import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

function App() {

  return (
    <MainLayout>
      <Home />
    </MainLayout>
  )
}

export default App
