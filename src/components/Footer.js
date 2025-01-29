import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-primary text-white py-12'>
      <div className='container mx-auto'>
        <p className='text-white text-center'>
          &copy; {new Date().getFullYear()} Ecommerce. All rights reserved for Manikanta
        </p>
      </div>
    </footer>
  );
};

export default Footer;
