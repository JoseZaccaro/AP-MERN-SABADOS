import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import MainLayout from './layouts/MainLayout';

function App(props) {
  const [count, setCount] = useState(true)

  return (
    <div className='w-full min-h-screen'>
      <button onClick={() => setCount(!count)}>Hola</button>
      <MainLayout>
        {count && <Home />}
      </MainLayout>
      {/* <Detalle /> */}
    </div>
  )
}

export default App
