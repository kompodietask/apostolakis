import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { contactInfo } from '../data';

const Contact: React.FC = () => {
  return (
    <div className="pb-0">
      {/* Hero Section with Background */}
      <section className="relative bg-navy-900 text-white py-24 mb-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Contact background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Επικοινωνία</h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl">
            Είμαστε στη διάθεσή σας για οποιαδήποτε νομική συμβουλή. 
            Επισκεφθείτε μας στο γραφείο μας στο Χαλάνδρι ή καλέστε μας.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-gold-500 flex items-start hover:shadow-lg transition-shadow">
              <MapPin className="text-navy-900 mr-4 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Διεύθυνση</h3>
                <p className="text-gray-600 text-lg">{contactInfo.address}</p>
                <p className="text-sm text-gray-400 mt-1">1ος Όροφος</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-gold-500 flex items-start hover:shadow-lg transition-shadow">
              <Phone className="text-navy-900 mr-4 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Τηλέφωνα</h3>
                <a href={contactInfo.landlineLink} className="text-gray-600 text-lg hover:text-gold-600 font-medium block mb-1">
                  {contactInfo.landline} (Σταθερό)
                </a>
                <a href={contactInfo.phoneLink} className="text-gray-600 text-lg hover:text-gold-600 font-medium block">
                  {contactInfo.phone} (Κινητό)
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-gold-500 flex items-start hover:shadow-lg transition-shadow">
              <Clock className="text-navy-900 mr-4 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Ωράριο Λειτουργίας</h3>
                <p className="text-gray-600 text-lg">{contactInfo.hours}</p>
                <p className="text-gray-500 mt-1">Σαββατοκύριακο: Κλειστά</p>
              </div>
            </div>

            {/* Added Image */}
            <div className="rounded-lg overflow-hidden shadow-lg h-64 border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Office Meeting" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
            </div>
          </div>

          {/* Simple Form UI (Non-functional backend) */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6">Στείλτε μας μήνυμα</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Ονοματεπώνυμο</label>
                <input 
                  className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500" 
                  id="name" 
                  type="text" 
                  placeholder="Το όνομά σας" 
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Τηλέφωνο</label>
                <input 
                  className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500" 
                  id="phone" 
                  type="tel" 
                  placeholder="Το τηλέφωνό σας" 
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Μήνυμα</label>
                <textarea 
                  className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500 h-32" 
                  id="message" 
                  placeholder="Πώς μπορούμε να βοηθήσουμε;"
                ></textarea>
              </div>
              <button className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 rounded transition-colors duration-300 shadow-lg">
                Αποστολή
              </button>
            </form>
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