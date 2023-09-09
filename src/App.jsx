import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Series from './pages/Series'
import Peliculas from './pages/Peliculas'
import Detalle from './pages/Detalle'
import { Provider, useSelector } from 'react-redux'
import pepito from './store/store'
import MiLista from './pages/MiLista'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = () => {
  const { is_online } = useSelector(store => store.authReducer)
  if (is_online) {
    return <Outlet />
  }
  return <Navigate to='/signin' />
}

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
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: 'series',
            element: <Series />
          },
          {
            path: '/peliculas',
            element: <Peliculas />
          },
          {
            path: '/list',
            element: <MiLista />
          },
        ]
      },
      {
        path: '/:seccion/detalle/:id',
        element: <Detalle />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/signup',
        element: <SignUp />
      },

    ]
  }
])

function App() {

  return (
    <Provider store={pepito}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
    </Provider>
  )
}

export default App
