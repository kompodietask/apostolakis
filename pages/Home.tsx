import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { servicesData, reviewsData } from '../data';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Law office background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Αξιόπιστη Νομική <span className="text-gold-500">Υποστήριξη</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Αναλαμβάνουμε με συνέπεια και επαγγελματισμό υποθέσεις Αστικού, Ποινικού και Συνταξιοδοτικού Δικαίου. Εξατομικευμένες λύσεις για κάθε νομική πρόκληση.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-gold-600 hover:bg-gold-500 text-white px-8 py-3 rounded text-center font-medium transition-colors flex items-center justify-center"
              >
                Επικοινωνήστε μαζί μας
              </Link>
              <Link 
                to="/services" 
                className="border border-white hover:bg-white hover:text-navy-900 text-white px-8 py-3 rounded text-center font-medium transition-colors"
              >
                Οι Υπηρεσίες μας
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Philosophy Section (New Design) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy-50 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Ηλίας Αποστολάκης" 
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Right Column: Text & Values */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6 leading-tight">
                Καλωσορίσατε στο Δικηγορικό Γραφείο Ηλία Αποστολάκη
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Στο γραφείο μας στο Χαλάνδρι, στόχος μας είναι να δημιουργήσουμε ένα υποστηρικτικό περιβάλλον για κάθε εντολέα. 
                Κατανοούμε το άγχος που συνοδεύει τις νομικές υποθέσεις και αναλαμβάνουμε να το διαχειριστούμε εμείς για εσάς, 
                προσφέροντας λύσεις με ανθρώπινο πρόσωπο, ειλικρίνεια και επαγγελματισμό.
              </p>

              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gold-500">
                <h3 className="text-xl font-bold text-navy-900 mb-6 font-serif border-b border-gray-200 pb-2">
                  Φιλοσοφία & Αξίες
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="text-gold-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-lg">Εμπειρία & Γνώση</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Βαθιά γνώση της νομοθεσίας και συνεχής ενημέρωση για τις εξελίξεις, εξασφαλίζοντας την καλύτερη δυνατή εκπροσώπηση.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="text-gold-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-lg">Προσωπική Επαφή</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Άμεση επικοινωνία και προσωπικό ενδιαφέρον για την υπόθεσή σας, χτίζοντας σχέσεις εμπιστοσύνης.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="text-gold-600" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-900 text-lg">Αποτελεσματικότητα</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Στόχευση στην ουσία και την ταχεία επίλυση των διαφορών, με γνώμονα πάντα το συμφέρον του εντολέα.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview (All Services) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Τομείς Δικαίου</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Παρέχουμε νομικές υπηρεσίες σε όλο το φάσμα του δικαίου.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`}
                className="group bg-white p-6 rounded shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-gold-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">{service.title}</h3>
                  {service.icon && <service.icon className="text-gray-400 group-hover:text-gold-500" size={24} />}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.shortDescription}
                </p>
                <span className="text-gold-600 font-medium flex items-center text-sm group-hover:underline">
                  Περισσότερα <ArrowRight size={14} className="ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Τι λένε οι πελάτες μας</h2>
            <p className="text-gray-400">Αξιολογήσεις από το Google Profile μας</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {reviewsData.map((review, idx) => (
              <div key={idx} className="bg-navy-800 p-8 rounded-lg border border-navy-700 relative">
                <div className="flex text-gold-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{review.text}"</p>
                <div className="flex justify-between items-end border-t border-navy-700 pt-4">
                  <span className="font-bold text-white">{review.author}</span>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://www.google.com/search?q=%CE%94%CE%B9%CE%BA%CE%B7%CE%B3%CE%BF%CF%81%CE%B9%CE%BA%CF%8C+%CE%93%CF%81%CE%B1%CF%86%CE%B5%CE%AF%CE%BF+%CE%97%CE%BB%CE%AF%CE%B1+%CE%91%CF%80%CE%BF%CF%83%CF%84%CE%BF%CE%BB%CE%AC%CE%BA%CE%B7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 px-8 py-3 rounded font-bold transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Δειτε ολες τις αξιολογησεις
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;