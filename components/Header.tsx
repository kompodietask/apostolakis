import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { servicesData, contactInfo } from '../data';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => location.pathname === path ? 'text-gold-500 font-bold' : 'text-white hover:text-gold-500 transition-colors';

  return (
    <header className="bg-navy-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar - Contact Info */}
        <div className="hidden md:flex justify-end items-center py-2 border-b border-navy-800 text-sm text-gray-300">
          <span className="mr-4">Αγ. Γεωργίου 27, Χαλάνδρι</span>
          <a href={contactInfo.phoneLink} className="flex items-center hover:text-gold-500 transition-colors">
            <Phone size={14} className="mr-1" />
            {contactInfo.phone}
          </a>
        </div>

        {/* Main Navbar */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex flex-col z-50" onClick={closeMobileMenu}>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wide uppercase">Ηλιας Αποστολακης</span>
            <span className="text-xs text-gold-500 tracking-widest uppercase">Δικηγορικο Γραφειο</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/')}>Αρχική</Link>
            <Link to="/about" className={isActive('/about')}>Σχετικά με εμάς</Link>
            
            {/* Services Dropdown - Hover implementation */}
            <div className="group relative py-4"> {/* Padding added to bridge gap for hover */}
              <Link to="/services" className={`flex items-center ${isActive('/services')}`}>
                Υπηρεσίες <ChevronDown size={16} className="ml-1" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white rounded shadow-xl border-t-4 border-gold-500 overflow-hidden">
                  {servicesData.map((service) => (
                    <Link 
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-4 py-3 text-navy-900 hover:bg-gray-50 hover:text-gold-600 border-b border-gray-100 last:border-0 transition-colors text-sm"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className={isActive('/contact')}>Επικοινωνία</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-900 absolute top-full left-0 w-full shadow-xl border-t border-navy-800">
          <div className="flex flex-col py-4 px-4 space-y-4">
            <Link to="/" className="text-white text-lg py-2 border-b border-navy-800" onClick={closeMobileMenu}>Αρχική</Link>
            <Link to="/about" className="text-white text-lg py-2 border-b border-navy-800" onClick={closeMobileMenu}>Σχετικά με εμάς</Link>
            
            <div className="space-y-2">
              <Link to="/services" className="text-gold-500 font-bold text-lg block" onClick={closeMobileMenu}>Υπηρεσίες</Link>
              <div className="pl-4 space-y-2 border-l-2 border-navy-700 ml-1">
                {servicesData.map(service => (
                  <Link 
                    key={service.id} 
                    to={`/services/${service.id}`}
                    className="block text-gray-300 hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="text-white text-lg py-2 border-b border-navy-800" onClick={closeMobileMenu}>Επικοινωνία</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;