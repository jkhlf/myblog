'use client';
import React, { useEffect, useState } from 'react';

interface NavItem {
  label: string;
  targetId: string;
}

interface SideNavigationProps {
  items: NavItem[];
}

const SideNavigation: React.FC<SideNavigationProps> = ({ items }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.targetId));
      const scrollPosition = window.scrollY + 100; 

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(items[i].targetId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, 
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="w-48">
      <ul className="space-y-6">
        {items.map((item) => {
          const isActive = activeSection === item.targetId;
          
          return (
            <li key={item.targetId} className="relative pl-6 group">
              <div className="absolute left-0 top-1/2 w-4 h-px bg-gray-500"></div>
              
              <button
                onClick={() => scrollToSection(item.targetId)}
                className={`block text-lg hover:text-gray-600 transition-colors ${
                  isActive ? 'text-black font-medium dark:text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNavigation;