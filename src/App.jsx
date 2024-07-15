import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  const Router = createBrowserRouter([
    {
      path : '/',
      element : <Home/>
    },
  ])

  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
