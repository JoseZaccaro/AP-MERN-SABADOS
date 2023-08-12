import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Nav from './components/Nav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Series from './pages/Series'
import Detalle from './pages/Detalle'
import Componente404 from './pages/Componente404'

const router = createBrowserRouter([
  {
    path: "/",
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
        path: '/detalle/:name',
        element: <Detalle />
      },

      {
        path: '*',
        element: <Componente404 />
      },

    ]
  }
])


function App() {

  return (
    <RouterProvider router={router} />
    // <MainLayout>
    //   {/* <Nav /> */}
    //   <Home />
    // </MainLayout>
  )
}

export default App
