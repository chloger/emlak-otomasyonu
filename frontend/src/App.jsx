import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import CreateEstatePage from './pages/Admin/CreateEstatePage'
import EstateList from './pages/EstateList'
import AdminPage from './pages/Admin/AdminPage'


function App() {
  AOS.init({
    delay: 150,
    duration: 1200,
  });
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<RegisterPage />} path='/register' />
        <Route element={<LoginPage />} path='/login' />
        <Route element={<CreateEstatePage />} path='/admin/createestate' />
        <Route element={<EstateList />} path='/estatelist' />
        <Route element={<AdminPage />} path='/admin' />



      </Routes>
    </>
  )
}

export default App
