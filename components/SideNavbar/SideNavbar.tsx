'use client';

import React from 'react';
import { SideNavbarInterface } from './SideNavbarInterface';

const SideNavbar = (props: SideNavbarInterface) => {
	const { sections, activeSection } = props;
	
  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    const container = document.getElementById('terms-content');
    if (section && container) {
      container.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex justify-center">
      <nav className="border rounded-2xl shadow-md bg-white">
        <ul className="space-y-4 leading-snug text-sm text-left font-bold p-8">
          {sections.map((section) => (
            <li key={section.id} className="whitespace-nowrap">
              <button
                onClick={() => handleClick(section.id)}
                className={`transition-colors duration-300 ${activeSection === section.id ? 'text-green-primary1 font-bold' : 'hover:text-green-primary1'
                  }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;