import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const MenuList = ({ item }) => {

  const location = useLocation();
  const submenuRef = useRef(null);

  /* UseState Here...*/
  const [isOpen, setIsOpen] = useState(false);

  /* Functions Here...*/
  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
    if (submenuRef.current) {
      if (!isOpen) {
        submenuRef.current.style.maxHeight = `${submenuRef.current.scrollHeight}px`;
      } else {
        submenuRef.current.style.maxHeight = '0';
      }
    }
  };

  /* Variables Here...*/
  const isActive = location.pathname === item.path;

  return (
    <>
      <li>
        <Link to={item.path || '#'} onClick={item.children && toggleSubmenu} className={isActive ? 'active' : ''}>
          {item.icon} <span>{item.title}</span>
          {item.children && (isOpen ? <span className='sub_menu_icon'><FaAngleUp /></span> : <span className='sub_menu_icon'><FaAngleDown /></span>)}
        </Link>
          <ul ref={submenuRef} className={`sub_menu ${isOpen ? 'active' : ''}`}>
              {item.children && item.children.map((subItem, index) => (
                <li key={index}>
                    <Link to={subItem.path} className={location.pathname === subItem.path ? 'active' : ''}>
                      {subItem.title}
                    </Link>
                </li>
              ))}
          </ul>
      </li>
    </>
  );
};

export default MenuList;
