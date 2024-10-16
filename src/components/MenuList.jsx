import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const MenuList = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li>
        <Link to={item.path || '#'} onClick={item.children && toggleSubmenu}>
          {item.icon} <span>{item.title}</span>
          {item.children && (isOpen ? <FaAngleUp /> : <FaAngleDown />)}
        </Link>
        {isOpen && item.children && (
          <ul>
            <li className="sub_menu">
              {item.children.map((subItem, index) => (
                <Link to={subItem.path} key={index} className="submenu-item">
                  {subItem.title}
                </Link>
              ))}
            </li>
          </ul>
        )}
      </li>
    </>
  );
};

export default MenuList;
