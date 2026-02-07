import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { servicesData, contactInfo } from '../data';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const service = servicesData.find(s => s.id === slug);

  useEffect(() => {
    // Scroll to top when changing services
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">Η υπηρεσία δεν βρέθηκε</h2>
        <button onClick={() => navigate('/services')} className="text-gold-600 hover:underline">
          Επιστροφή στις υπηρεσίες
        </button>
      </div>
    );
  }

  return (
    <div className="pt-10 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-gold-600 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Πίσω στις Υπηρεσίες
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-navy-50 text-navy-900 rounded-full mr-4">
                  {service.icon && <service.icon size={32} />}
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">{service.title}</h1>
              </div>
              
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="lead text-xl mb-8 font-light text-gray-600 border-l-4 border-gold-500 pl-4">
                  {service.shortDescription}
                </p>
                <div className="whitespace-pre-line">
                  {service.fullDescription}
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4 text-navy-900">Γιατί να επιλέξετε το γραφείο μας;</h3>
                <ul className="space-y-3 not-prose">
                  <li className="flex items-start">
                    <CheckCircle className="text-gold-500 mr-2 mt-1" size={20} />
                    <span>Εξειδικευμένη γνώση της νομοθεσίας και της νομολογίας.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-gold-500 mr-2 mt-1" size={20} />
                    <span>Ειλικρίνεια ως προς την έκβαση της υπόθεσης.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-gold-500 mr-2 mt-1" size={20} />
                    <span>Συνεχής ενημέρωση για την πορεία της υπόθεσής σας.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-navy-900 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 font-serif">Χρειάζεστε Νομική Συμβουλή;</h3>
                <p className="text-gray-300 mb-6">
                  Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε την υπόθεσή σας.
                </p>
                <div className="space-y-3">
                  <a href={contactInfo.landlineLink} className="block w-full text-center bg-gold-600 hover:bg-gold-500 text-white font-bold py-3 rounded transition-colors">
                    Καλέστε: {contactInfo.landline}
                  </a>
                  <a href={contactInfo.phoneLink} className="block w-full text-center bg-navy-800 hover:bg-navy-700 border border-navy-700 text-white font-bold py-3 rounded transition-colors">
                     Κινητό: {contactInfo.phone}
                  </a>
                  <Link to="/contact" className="block w-full text-center border border-white hover:bg-white hover:text-navy-900 text-white font-bold py-3 rounded transition-colors mt-4">
                    Φόρμα Επικοινωνίας
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-navy-900 mb-4 uppercase text-sm tracking-wider border-b border-gray-100 pb-2">Αλλες Υπηρεσιες</h4>
                <div className="space-y-2">
                  {servicesData.filter(s => s.id !== service.id).map(s => (
                    <Link 
                      key={s.id} 
                      to={`/services/${s.id}`}
                      className="block p-3 rounded hover:bg-gray-50 hover:text-gold-600 transition-colors text-gray-700 text-sm font-medium flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;