import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/aludev.png";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: "#home" },
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.works'), href: "#works" },
    { label: t('nav.contact'), href: "#contact" }
  ];

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg bg-neutral-900/80 border-b border-neutral-700/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-auto" src={logo} alt="Aludev Logo" />
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => scrollToSection(item.href)}
                  className="text-neutral-300 hover:text-white transition-colors duration-300 font-medium relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A84D76] to-[#842d56] transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Right Side - Language Selector Only */}
          <div className="hidden lg:flex items-center">
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleNavbar}
              className="text-neutral-300 hover:text-white transition-colors duration-300 p-2"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={toggleNavbar}></div>
            <div className="fixed right-0 top-0 h-full w-80 bg-neutral-900 border-l border-neutral-700 p-8 transform transition-transform duration-300 ease-in-out">
              <div className="flex justify-end mb-8">
                <button 
                  onClick={toggleNavbar}
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Language Selector in Mobile */}
              <div className="mb-6">
                <LanguageSelector />
              </div>
              
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(item.href)}
                      className="text-xl text-neutral-300 hover:text-white transition-colors duration-300 font-medium block py-2 w-full text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
