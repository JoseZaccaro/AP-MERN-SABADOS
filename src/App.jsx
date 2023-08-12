import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Series from './pages/Series'
import Peliculas from './pages/Peliculas'
import Detalle from './pages/Detalle'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/series',
        element: <Series />
      },
      {
        path: '/peliculas',
        element: <Peliculas />
      },
      {
        path: '/detalle/:nombre',
        element: <Detalle />
      },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
