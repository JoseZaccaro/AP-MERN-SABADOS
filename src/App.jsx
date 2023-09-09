import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Nav from './components/Nav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Series from './pages/Series'
import Detalle from './pages/Detalle'
import Componente404 from './pages/Componente404'
import Movies from './pages/Movies'
import DetalleMovie from './pages/DetalleMovie'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import MyList from './pages/MyList'

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
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/detalle/:name',
        element: <Detalle />
      },
      {
        path: '/movies/detalle/:name',
        element: <DetalleMovie />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/my',
        element: <MyList />
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
