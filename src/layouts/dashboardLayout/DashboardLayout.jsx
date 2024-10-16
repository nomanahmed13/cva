import React, { useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MenuItems } from '@view/MenuItems';
import MenuList from '@components/MenuList';
import '@styles/_dashboard.css';



const DashboardLayout = () => {

  const token  = useSelector((state) => state.auth.token);
  const currentYear = new Date().getFullYear();

  if (token === null) {
    return <Navigate to={'/auth/login'} replace />;
  }

  return (
    <div className='site-wraper'>
      <aside className="sidebar">
        <div className='sider'>
          <ul>
            {MenuItems.map((item, index) => (
                <MenuList item={item} key={index} />
            ))}
          </ul>
        </div>
      </aside>
      <main className="site_main">
          <header className="main_header">
            <div className="search_widget">
                <div className="input_wrap">
                    <input type="search" name="" id="" placeholder="Search" />
                    <button className="input-icon"> <CiSearch /></button>
                </div>
            </div>
            <div className="header-right">
                  <div className='profile_cover'>
                    <div className="icon">
                        
                    </div>
                    <div className="icon img_icon">
                        
                    </div>
                  </div>
              </div>
          </header>
          <div className='main_body'>
              <Outlet />
          </div>
          <footer>
            <p>© {currentYear} CVA. All Rights Reserved.</p>
          </footer>
      </main>
    </div>
  )
}

export default DashboardLayout