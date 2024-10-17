import React, { useRef, useState } from 'react'
import {  Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { BsMoonStars } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from 'react-icons/io';
import { MenuItems } from '@view/MenuItems';
import MenuList from '@components/MenuList';
import '@styles/_dashboard.css';

const DashboardLayout = () => {

  /* Redux Here...*/
  const token  = useSelector((state) => state.auth.token);

  /* UseState Here...*/
  const [isVisible, setIsVisible] = useState(false);

  /* Variables Here...*/
  const currentYear = new Date().getFullYear();
  const profileRef = useRef(null);

  /* Functions Here...*/
  const toggleVisibility = (event) => {
    event.stopPropagation();
     setIsVisible((prev) => !prev);
   };

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);


  if (token === null) {
    return <Navigate to={'/auth/login'} replace />;
  }

  return (
    <div className='site-wraper'>
      <aside className="sidebar">
        <div className='sider'>
          <div className='sidebar_logo'>
              <h1>cva</h1>
          </div>
          <ul className='sidebar_menu'>
            {MenuItems.map((item, index) => (
                <MenuList item={item} key={index} />
            ))}
          </ul>
        </div>
      </aside>
      <main className="site_main">
          <header className="main_header">
            <div className="search_widget">
                {/* <div className="input_wrap">
                    <input type="search" name="" id="" placeholder="Search" />
                    <button className="input-icon"> <CiSearch /></button>
                </div> */}
            </div>
            <div className="header-right">
                  <div className='profile_cover'>
                    <div className="icon">
                        <button><BsMoonStars /></button>
                    </div>
                    <div className="icon">
                        <button><TfiLayoutGrid2 /></button>
                    </div>
                    <div className="icon img_icon">
                        <button onMouseDown={toggleVisibility}><FaRegUser /></button>
                        <div ref={profileRef} className={`profile ${isVisible ? 'visible' : ''}`}>
                          <ul>
                            <li><IoIosLogOut /><span>Log Out</span></li>
                          </ul>
                        </div>
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