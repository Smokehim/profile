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
          <div className="space-y-12 max-w-6xl w-full">
            <div>
              <h3 className="text-white text-3xl mb-10 text-center font-bold">Connect With Me</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#94a3b8] text-xs uppercase tracking-widest font-bold mb-1">Phone</p>
                    <a href="tel:+260969591009" className="text-white hover:text-[#3b82f6] transition-colors text-sm font-semibold truncate block">
                      +260 969 591 009
                    </a>
                  </div>
                </div>

                <div className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#94a3b8] text-xs uppercase tracking-widest font-bold mb-1">Email</p>
                    <a href="mailto:mwambajason2@gmail.com" className="text-white hover:text-[#3b82f6] transition-colors text-sm font-semibold truncate block">
                      mwambajason2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#94a3b8] text-xs uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                    <button
                      onClick={openWhatsApp}
                      className="text-white hover:text-[#3b82f6] transition-colors text-sm font-semibold text-left truncate block"
                    >
                      Chat on WhatsApp
                    </button>
                  </div>
                </div>

                <div className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                    <Github size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#94a3b8] text-xs uppercase tracking-widest font-bold mb-1">GitHub</p>
                    <a
                      href="https://github.com/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#3b82f6] transition-colors text-sm font-semibold truncate block"
                    >
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-3xl border-t border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 text-[#3b82f6]/5 pointer-events-none">
                <Send size={120} className="rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              </div>
              <h4 className="text-white text-2xl mb-8 font-bold">Why Work With Me?</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-10 h-1 bg-[#3b82f6] rounded-full"></div>
                  <h5 className="text-white font-bold">Professionalism</h5>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">Dedicated to clear communication and delivering results that exceed expectations every single time.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-1 bg-[#3b82f6] rounded-full"></div>
                  <h5 className="text-white font-bold">Reliability</h5>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">Your projects and device needs are my priority. I ensure fast turnaround times without compromising quality.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-1 bg-[#3b82f6] rounded-full"></div>
                  <h5 className="text-white font-bold">Expertise</h5>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">A unique blend of tech proficiency, creative design eye, and deep knowledge of the smartphone market.</p>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </div>
    </section>
  );
}