import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Dear Coder</h3>
            <p className="text-gray-400">
              Empowering students with quality education and resources for NIOS examinations.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#courses">Courses</FooterLink>
              <FooterLink href="#premium">Premium Access</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>support@dearcoder.edu</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Github} />
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href="#" icon={Twitter} />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Dear Coder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <motion.a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  </li>
);

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <motion.a
    href={href}
    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="h-5 w-5" />
  </motion.a>
);

export default Footer;