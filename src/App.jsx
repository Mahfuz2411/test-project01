import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
