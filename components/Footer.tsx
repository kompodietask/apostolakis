import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { contactInfo } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-12 pb-6 border-t border-gold-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Ηλίας Αποστολάκης</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Παροχή νομικών υπηρεσιών υψηλής ποιότητας στο Χαλάνδρι και σε όλη την Αθήνα. 
              Συνέπεια, αξιοπιστία και ανθρώπινη προσέγγιση σε κάθε υπόθεση.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold-500 uppercase tracking-wider">Συνδεσμοι</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Αρχική</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Το Γραφείο μας</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Υπηρεσίες</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Επικοινωνία</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold-500 uppercase tracking-wider">Επικοινωνια</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-gold-500 mr-2 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">{contactInfo.address}</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-gold-500 mr-2 flex-shrink-0 mt-1" size={18} />
                <div className="flex flex-col">
                  <a href={contactInfo.landlineLink} className="text-gray-300 hover:text-white transition-colors mb-1">{contactInfo.landline}</a>
                  <a href={contactInfo.phoneLink} className="text-gray-300 hover:text-white transition-colors">{contactInfo.phone}</a>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="text-gold-500 mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-300">{contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Δικηγορικό Γραφείο Ηλία Αποστολάκη. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;