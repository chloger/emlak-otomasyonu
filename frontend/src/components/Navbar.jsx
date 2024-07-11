import { Button } from 'antd';
import React from 'react'
import { FiHome } from "react-icons/fi";
import { Link } from 'react-router-dom';


const Navbar = () => {

  const user = window.localStorage.getItem("userInfo")

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload()
  }
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    var { email } = JSON.parse(userInfo);

  }
  return (
    <div data-aos="fade-down" className='navbar-container'>
      <div className='header'>
        <a href="/"> <FiHome className='logo' /> </a>
        <p className='site-name'>EmlakEvin</p>
      </div>
      <div className='items-container'>
        <ul className='items'>
          <li className="item"><Link className='li' to="/">Ana-Sayfa</Link></li>

          <li className="item"><Link className='li' to="/estatelist">İlanlarımız</Link></li>
          {email === "alperen@gmail.com"
            ?
            (<li className="item"><Link className='li' to="/admin">Admin</Link></li>)
            :
            (<div className='none'></div>)
          }

          <li className="item">{user ? (<Button onClick={() => handleLogout()}>Oturum Kapat</Button>) : (<Link className='li' to="/login">Kayıt Ol / Oturum Aç</Link>)}</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
