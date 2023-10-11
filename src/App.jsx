import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import { useContext } from 'react'
import { UserContext } from './context/ApiProvider'

function App() {
  const data = useContext(UserContext);
  console.log(data);
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
