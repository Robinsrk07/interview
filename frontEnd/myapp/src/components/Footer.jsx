import image from "../assets/images/telephone-typewriter-svgrepo-com.svg";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-10 md:mt-0">
      <footer className="flex flex-col md:flex-row justify-center gap-4 md:gap-5 bg-neutral text-neutral-content p-6 md:p-10">
        {/* First Box (Contact) */}
        <div className="border w-full md:w-auto h-auto p-3 md:p-4 rounded-lg flex flex-col font-sans items-center text-center order-2 md:order-1">
          <h3 className="text-sm font-bold text-blue-500 font-sans mb-2">
            CONNECT WITH US
          </h3>
          <div className="flex items-center gap-x-2">
            <img src={image} alt="Phone Icon" className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-md md:text-lg text-gray-500 font-bold">+91 9567842240</p>
          </div>
          <div className="flex items-center gap-x-2 mt-2">
            <img src={image} alt="Email Icon" className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-xs md:text-sm text-gray-500 font-bold">
              info@deepnetsoft.com
            </p>
          </div>
        </div>

        {/* Second Box (Logo & Social) */}
        <div className="border w-full md:w-auto h-auto flex flex-col items-center justify-center p-3 md:p-4 rounded-lg text-center order-1 md:order-2">
          <h3 className="text-md md:text-lg font-bold mb-2">
            <span className="text-blue-600 mx-1">DEEP</span>
            <span className="text-gray-400 mx-1">NET</span>
            <span className="text-white mx-1">SOFT</span>
          </h3>
          <div className="flex gap-3 md:gap-5 mt-3 md:mt-4">
            <a href="#" className="hover:opacity-75">
              <Facebook size={18} className="md:w-5 md:h-5" />
            </a>
            <a href="#" className="hover:opacity-75">
              <Instagram size={18} className="md:w-5 md:h-5" />
            </a>
            <a href="#" className="hover:opacity-75">
              <Youtube size={18} className="md:w-5 md:h-5" />
            </a>
            <a href="#" className="hover:opacity-75">
              <Twitter size={18} className="md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        {/* Third Box (Address) */}
        <div className="border w-full md:w-auto h-auto p-3 md:p-4 rounded-lg flex flex-col items-center text-center order-3">
          <h3 className="text-md md:text-lg font-bold mb-2 text-gray-500">FIND US</h3>
          <p className="text-xs md:text-sm font-bold text-gray-500">First Floor, Geo Infopark</p>
          <p className="text-xs md:text-sm font-bold text-gray-500">Infopark EXPY, Kakkanad</p>
        </div>
      </footer>

      {/* Copyright Footer */}
      <footer className="bg-black text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs md:text-sm mb-3 sm:mb-0">
            © {new Date().getFullYear()}, Deep Net Soft. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <a href="#" className="text-xs md:text-sm hover:text-gray-300 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-xs md:text-sm hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;