'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { CustomImage } from '@/components';
import { nav_items } from '@/constants';
import { useNavigateAndScroll } from '@/hooks';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [burgerOpen, setBurgerOpen] = useState(false);
	const navigateAndScroll = useNavigateAndScroll();

  const handleMouseEnter = (id: string | null) => {
    setActiveSubMenu(id);
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };

	const handleMouseClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    const selection = nav_items.flatMap((items) =>
      items.solutions_items?.filter((item) => item.id === activeSubMenu)?.flatMap((item) => item.sub_items)
    ).find((item) => item.id === targetId);

    setActiveSubMenu(null);
    navigateAndScroll(event, targetId, selection);
  };

  const handleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <nav
      className="absolute w-full bg-blue-primary1 content-center flex lg:block z-10 overflow-hidden"
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full">
        <div className="flex items-center justify-between max-w-contentDesktop h-[80px] ml-0 px-3 xl:px-0 sm:mx-auto">
          <Link href="/">
            <CustomImage 
              src="https://acdn.dnamicro.net/instaprotek/instaProtek_primary_logo-inverse.png"
              alt="instaProtek Primary Logo"
              width={183}
              height={35}
              style={{ width: `183px`, height: `auto` }}
              priority
            />
          </Link>
          <ul className="hidden h-full gap-[60px] lg:flex">
            {nav_items.map((item) =>
              item.links.map((link) => (
                <li key={link.id} className="contents items-center no-underline text-white font-bold">
                  <Link
                    href={link.href}
                    className={`${
                      link.id === activeSubMenu && link.withSubMenu ? 'underline' : ''
                    } text-sm self-center`}
                    onMouseEnter={() => handleMouseEnter(link.id)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))
            )}
          </ul>
          <div className="contents cursor-pointer lg:hidden" onClick={handleBurger}>
            <RxHamburgerMenu color={burgerOpen ? '#D3D3D3' : '#9E9E9E'} size={30} />
          </div> 
        </div>
        
        {/* Burger Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${burgerOpen ? 'max-h-[500px] opacity-100 pb-1' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col items-center">
            {nav_items.map((item) =>
              item.links.map((link) => (
                <li key={link.id} className='w-full text-center cursor-pointer text-white py-2 hover:bg-blue-primary2 hover:text-blue-primary1'>
                  <Link
                    href={link.href}
                    className="text-sm font-bold"
                    onClick={handleBurger}
                  >
                    {link.label}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* SUBMENU */}
        <div className={`${(activeSubMenu === 'nav-enterprise' || activeSubMenu === 'nav-retail') ? 'max-h-[500px] opacity-100 pt-6 pb-9' : 'max-h-0 opacity-0 lg:hidden'} relative flex max-w-contentDesktop m-auto ml-0 lg:m-auto transition-all duration-500 ease-in-out overflow-hidden`}>
          <div className="w-full">
            {nav_items.map((items) =>
              items.solutions_items
                .filter((item) => item.id === activeSubMenu)
                .map((item) => (
                  <div key={item.id}>
                    <ul className="flex pl-0 gap-x-7">
                      {item.sub_items.map((sub_item) => (
                        <li key={sub_item.id}>
                          <div className="relative w-[225px] h-[145px] rounded-[20px] mb-4 overflow-hidden">
                            <Link href={sub_item.href} onClick={(event) => handleNavLinkClick(event, sub_item.id)}>
                              <CustomImage 
                                src={sub_item.imgUrl}
                                alt={sub_item.imgAlt}
                                width={227}
                                height={148}
                                style={{ width: `227px`, height: `auto` }}
                                className="transition duration-500 ease-in-out hover:scale-110"
                                priority
                              />
                            </Link>
                          </div>
                          <Link href={sub_item.href} onClick={(event) => handleNavLinkClick(event, sub_item.id)}>
                            <p className="text-sm text-white">{sub_item.label}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;