import React from 'react';

const Footer = () => {
  return (
    <div className="py-8 bottom-0 w-screen text-white font-main">
      <p className="text-center text-sm text-white">
        © {new Date().getFullYear()} HARUKA FUJII. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
