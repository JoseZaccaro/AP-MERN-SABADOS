import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Series from './pages/Series'
import Peliculas from './pages/Peliculas'
import Detalle from './pages/Detalle'
import { Provider } from 'react-redux'
import pepito from './store/store'



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
        path: '/:seccion/detalle/:id',
        element: <Detalle />
      },
    ]
  }
])

function App() {

  return (
    <Provider store={pepito}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
