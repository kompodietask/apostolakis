import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data';

const Services: React.FC = () => {
  return (
    <div className="pt-10 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Οι Υπηρεσίες μας</h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Παρέχουμε ολοκληρωμένη νομική κάλυψη με εξειδίκευση και αξιοπιστία. 
            Επιλέξτε τον τομέα που σας ενδιαφέρει για να μάθετε περισσότερα.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="p-8 flex-grow">
                <div className="w-14 h-14 bg-navy-50 text-gold-600 rounded-full flex items-center justify-center mb-6">
                  {service.icon && <service.icon size={28} />}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3 font-serif">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.shortDescription}
                </p>
              </div>
              <div className="px-8 pb-8">
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-navy-900 font-bold hover:text-gold-600 transition-colors uppercase text-sm tracking-wider"
                >
                  Αναλυτικα <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
