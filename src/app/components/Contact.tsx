import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, Github } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/260969591009', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#0f172a]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto"></div>
          <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to buy a phone? Let's talk!
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="space-y-8 grid md:grid-rows-4 max-w-6xl w-full">
            <div>
              <h3 className="text-white text-2xl mb-6 text-center">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#0f172a] rounded-lg flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#94a3b8] text-xs">Phone</p>
                    <a href="tel:+260969591009" className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors text-xs">
                      +260 969 591 009
                    </a>
                  </div>
                </div>

                <div className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#0f172a] rounded-lg flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#94a3b8] text-xs">Email</p>
                    <a href="mailto:mwambajason2@gmail.com" className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors text-xs break-words">
                      mwambajason2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#0f172a] rounded-lg flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#94a3b8] text-xs">WhatsApp</p>
                    <button
                      onClick={openWhatsApp}
                      className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors text-xs"
                    >
                      Chat on WhatsApp
                    </button>
                  </div>
                </div>

                <div className="bg-[#1e293b] p-4 rounded-lg flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#0f172a] rounded-lg flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                    <Github size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#94a3b8] text-xs">GitHub</p>
                    <a
                      href="https://github.com/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors text-xs"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-lg">
              <h4 className="text-white text-lg mb-4">Why Work With Me?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2"></div>
                  <span>Professional and reliable service</span>
                </li>
                <li className="flex items-start gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2"></div>
                  <span>Quick response and turnaround time</span>
                </li>
                <li className="flex items-start gap-3 text-[#94a3b8]">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2"></div>
                  <span>Quality work at competitive prices</span>
                </li>
              </ul>
            </div>
          </div>   
        </div>
      </div>
    </section>
  );
}