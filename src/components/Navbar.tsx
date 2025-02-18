import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-indigo-600 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Dear Coder</span>
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
              <NavLink to="/class10" active={location.pathname === "/class10"}>Class 10</NavLink>
              <NavLink to="/class12" active={location.pathname === "/class12"}>Class 12</NavLink>
              <NavLink to="/resources" active={location.pathname === "/resources"}>Resources</NavLink>
              <NavLink to="/premium" active={location.pathname === "/premium"}>Premium</NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" active={location.pathname === "/"}>Home</MobileNavLink>
            <MobileNavLink to="/class10" active={location.pathname === "/class10"}>Class 10</MobileNavLink>
            <MobileNavLink to="/class12" active={location.pathname === "/class12"}>Class 12</MobileNavLink>
            <MobileNavLink to="/resources" active={location.pathname === "/resources"}>Resources</MobileNavLink>
            <MobileNavLink to="/premium" active={location.pathname === "/premium"}>Premium</MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        active ? 'bg-indigo-700' : 'hover:bg-indigo-700'
      }`}
    >
      {children}
    </Link>
  </motion.div>
);

const MobileNavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        active ? 'bg-indigo-700' : 'hover:bg-indigo-700'
      }`}
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar;