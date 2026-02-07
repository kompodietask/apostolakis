import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { contactInfo } from '../data';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero / Main Contact Section with Background */}
      <div className="relative bg-navy-900 py-20">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Law office background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Επικοινωνία</h1>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg">
              Είμαστε στη διάθεσή σας για οποιαδήποτε νομική συμβουλή. 
              Επισκεφθείτε μας στο γραφείο μας στο Χαλάνδρι ή καλέστε μας.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Info + Image */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border-l-4 border-gold-500 flex items-start transition-transform hover:-translate-y-1 duration-300">
                  <MapPin className="text-navy-900 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-1">Διεύθυνση</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                    <p className="text-sm text-gray-400 mt-1">1ος Όροφος</p>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border-l-4 border-gold-500 flex items-start transition-transform hover:-translate-y-1 duration-300">
                  <Phone className="text-navy-900 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-1">Τηλέφωνο</h3>
                    <a href={contactInfo.phoneLink} className="text-gray-600 hover:text-gold-600 font-medium block transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border-l-4 border-gold-500 flex items-start transition-transform hover:-translate-y-1 duration-300">
                  <Clock className="text-navy-900 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-1">Ωράριο Λειτουργίας</h3>
                    <p className="text-gray-600">{contactInfo.hours}</p>
                    <p className="text-gray-500 mt-1 text-sm">Σαββατοκύριακο: Κλειστά</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="rounded-lg overflow-hidden shadow-2xl h-64 md:h-80 relative group border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Γραφείο Επικοινωνίας" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors duration-500"></div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-2xl border-t-4 border-gold-500 h-full">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">Στείλτε μας μήνυμα</h3>
              <p className="text-gray-500 mb-8">Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας σύντομα.</p>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-navy-900 text-sm font-bold mb-2" htmlFor="name">Ονοματεπώνυμο</label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors" 
                    id="name" 
                    type="text" 
                    placeholder="Το όνομά σας" 
                  />
                </div>
                <div>
                  <label className="block text-navy-900 text-sm font-bold mb-2" htmlFor="phone">Τηλέφωνο</label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors" 
                    id="phone" 
                    type="tel" 
                    placeholder="Το τηλέφωνό σας" 
                  />
                </div>
                <div>
                  <label className="block text-navy-900 text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors" 
                    id="email" 
                    type="email" 
                    placeholder="To email σας" 
                  />
                </div>
                <div>
                  <label className="block text-navy-900 text-sm font-bold mb-2" htmlFor="message">Μήνυμα</label>
                  <textarea 
                    className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gold-500 focus:bg-white transition-colors h-32 resize-none" 
                    id="message" 
                    placeholder="Πώς μπορούμε να βοηθήσουμε;"
                  ></textarea>
                </div>
                <button className="w-full bg-navy-900 hover:bg-gold-600 text-white font-bold py-4 rounded transition-colors duration-300 uppercase tracking-widest text-sm shadow-lg mt-2 cursor-pointer">
                  Αποστολη
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Map */}
      <div className="w-full h-96 bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.208630799738!2d23.79585631532556!3d38.01899197971576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a199017684074f%3A0x6c6e75d041e05391!2zzpHOsy4gzpPOtc-Jz4HOs86vzr_PhSAyNywgzqfOsc67zqzOvc60z4HOuSAxNTIgMzQ!5e0!3m2!1sel!2sgr!4v1684422200000!5m2!1sel!2sgr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;