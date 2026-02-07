import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Σχετικά με εμάς</h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images Column */}
          <div className="flex flex-col gap-6 relative">
            <img 
              src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Law Office Interior" 
              className="rounded-lg shadow-xl w-full h-64 object-cover"
            />
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Law books and gavel" 
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-gold-500 text-white p-6 rounded shadow-lg hidden md:block border-4 border-white">
                <span className="block text-3xl font-bold font-serif mb-1">9+</span>
                <span className="text-xs uppercase tracking-wider">Άριστες<br/>Κριτικές</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Το <strong>Δικηγορικό Γραφείο Ηλία Αποστολάκη</strong> εδρεύει στο <strong>Χαλάνδρι</strong>, 
              επί της οδού Αγ. Γεωργίου 27 και Αριστείδου, προσφέροντας νομικές υπηρεσίες υψηλής ποιότητας. 
              Επικεντρώνεται στην αποτελεσματική διαχείριση κάθε υπόθεσης, ενώ διαθέτει ομάδα δικηγόρων με σημαντική 
              επαγγελματική εμπειρία και εξειδίκευση σε ένα ευρύ φάσμα νομικών πεδίων.
            </p>
            <p>
              Η εξειδίκευση αυτή επιτρέπει την παροχή ολοκληρωμένης νομικής στήριξης και την επιτυχή αντιμετώπιση 
              σύγχρονων προκλήσεων στο νομικό περιβάλλον.
            </p>
            
            <h3 className="text-2xl font-serif font-bold text-navy-900 mt-8">Η Φιλοσοφία μας</h3>
            <p>
              Κύρια χαρακτηριστικά της φιλοσοφίας του γραφείου αποτελούν η σοβαρότητα, η αξιοπιστία και η πλήρης 
              αφοσίωση στις ανάγκες των πελατών, γεγονός που συμβάλλει στη φήμη του ως αξιόπιστης επιλογής στην αγορά.
            </p>

            <ul className="space-y-3 mt-4">
              {[
                "Εξατομικευμένες λύσεις προσαρμοσμένες στις ανάγκες κάθε υπόθεσης",
                "Αποτελεσματικότητα και ήθος",
                "Βέλτιστο αποτέλεσμα σε όλη την Ελλάδα",
                "Πελατοκεντρική προσέγγιση"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-gold-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;