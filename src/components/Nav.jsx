import React, { useState } from 'react';
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from '../constants';

function Nav() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block' onClick={toggleMenu}>
          <img src={hamburger} alt="Hamburger" width={25} height={25} style={{ cursor: 'pointer' }} />
        </div>
      </nav>

      {isMenuOpen && (
        <div className='fixed inset-0 bg-black opacity-30 z-20' onClick={toggleMenu}></div>
      )}
      
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className='flex flex-col items-start p-4'>
          {navLinks.map((item) => (
            <li key={item.label} className='my-4'>
              <a 
                href={item.href} 
                className='font-montserrat leading-normal text-lg text-slate-gray'
                onClick={handleLinkClick} 
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Nav;

