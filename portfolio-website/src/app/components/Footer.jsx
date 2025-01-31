import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-bgSecondaryBlue relative z-10 text-white">
      <div className="container p-8 flex justify-between z-10">
        <Link href="/" className="font-caveatBrush text-4xl">
          KARLA
        </Link>
        <div>
          <p className="text-stone-200 text-md">Made with Love by Karla Sanchez</p>
          <p className="text-stone-200 text-md">&copy; 2019 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
