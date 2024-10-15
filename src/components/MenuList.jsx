import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const MenuList = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="menu-item">
        <Link to={item.path || '#'} onClick={item.children && toggleSubmenu}>
          {item.icon} {item.title}
          {item.children && (isOpen ? <FaAngleUp /> : <FaAngleDown />)}
        </Link>
      </div>
      {isOpen && item.children && (
        <div className="submenu">
          {item.children.map((subItem, index) => (
            <Link to={subItem.path} key={index} className="submenu-item">
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuList;
