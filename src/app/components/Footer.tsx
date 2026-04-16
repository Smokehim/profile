import { Facebook, FacebookIcon, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-[#1e293b] py-12">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Name and Role */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl mb-2">Jason Mwamba</h3>
            <p className="text-[#94a3b8]">
              Full-Stack Developer | Graphic Designer | Phone Seller
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100063757242411"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#1e293b] text-center">
          <p className="text-[#94a3b8] text-sm">
            © {new Date().getFullYear()} Jason Mwamba. All rights reserved.
          </p>
          <Link 
            to="/admin" 
            className="text-[#94a3b8] hover:text-[#60a5fa] text-sm mt-2 inline-block transition-colors"
          >
            Smoke Panel
          </Link>
        </div>
      </div>
    </footer>
  );
}