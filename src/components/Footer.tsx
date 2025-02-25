import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Jyotiraditya Swain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;