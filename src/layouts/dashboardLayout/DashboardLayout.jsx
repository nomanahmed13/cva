import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { items } from '../../helpers/MenuList';
import MainLogo from '../../icons/MainLogo';
import sidebarCloseBtn from'../../assets/angle-double.png';
import { useSelector } from 'react-redux';
import MainLogoWithoutPath from '../../icons/MainLogoWithoutPath';
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import Profile from'../../assets/profile.png';
import '@styles/_dashboard.css';

const { Sider } = Layout;

const renderMenuItems = (menuItems) => {
  return menuItems.map((item) => {
    if (item.children) {
      return {
        key: item.key,
        icon: item.icon,
        label: item.label,
        children: item.children.map((child) => ({
          key: child.key,
          icon: child.icon,
          label: <Link to={`/${child.key}`}>{child.label}</Link>,
        })),
      };
    }
    return {
      key: item.key,
      icon: item.icon,
      label: <Link to={`/${item.key}`}>{item.label}</Link>,
    };
  });
};

const DashboardLayout = () => {

  const token  = useSelector((state) => state.auth.token);

  const [collapsed, setCollapsed] = useState(false);

  if (token === null) {
    return <Navigate to={'/auth/login'} replace />;
  }

  return (
    <div className='site-wraper'>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)} 
        className='aside-main' 
        width={300}
        breakpoint="md"
      >
        <div className="demo-logo-vertical">
          {
            collapsed ? <MainLogoWithoutPath /> : <MainLogo />
          }
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['dashboard/home']}
          mode="inline"
          items={renderMenuItems(items)}
        />
        <div className='sidebar-close-btn'>
            <button onClick={() => setCollapsed(!collapsed)}>
              <img src={sidebarCloseBtn} alt="" />
            </button>
        </div>
      </Sider>
      <main className="site-main">
          <header className="main-header">
            <div className="search-widget">
                <div className="input-wrap">
                    <input type="search" name="" id="" placeholder="Search" />
                    <button className="input-icon"> <CiSearch /></button>
                </div>
            </div>
            <div className="header-right">
                  {/* <div className='clockIn'>
                      {!isClockedIn ? (
                        <button onClick={handleClockIn}>
                          <img src={ColckPic} alt='' />
                          <span>Clock in</span>
                        </button>
                      ) : (
                        <div className='play-pause'>
                          <div onClick={handlePlayPause} className='btn-icon'>
                            <img src={isWorking ? Play : Pause} />
                          </div>
                          <div className='work-break'>
                            <span className={isWorking ? 'play' : 'pause'}>Work: {formatTime(workTime)}</span>
                            <span className={isWorking ? 'pause' : 'play'}>Break: {formatTime(breakTime)}</span>
                          </div>
                          <div className='expand' onClick={handleClockInListing}>
                            <img src={Expand} alt='' />
                          </div>
                          {clockInCollapsed && (
                              <div className='clockIn-listing'>
                                <div className='col'>
                                  <span className='hed'>Clock In:</span>
                                  <span className='val'>{formatClockInTime(firstClockIn)}</span>
                                </div>
                                <div className='col'>
                                  <span className='hed'>Worked:</span>
                                  <span className='val'>{formatTime(workTime)}</span>
                                </div>
                                <div className='col'>
                                  <span className='hed'>Breaks:</span>
                                  <span className='val'>{formatTime(breakTime)}</span>
                                </div>
                                <hr />
                                <button className='save-clockin' onClick={handleClockOut}>Clock Out</button>
                              </div>
                            )}  
                        </div>
                      )}
                  </div> */}
                  <div className='profile-cover'>
                    <div className="icon">
                        <button><IoMdNotificationsOutline /></button>
                    </div>
                    <div className="icon img-icon">
                        <img src={Profile} alt="" />
                    </div>
                  </div>
              </div>
          </header>
          <div className='main-body'>
              <Outlet />
          </div>
      </main>
    </div>
  )
}

export default DashboardLayout