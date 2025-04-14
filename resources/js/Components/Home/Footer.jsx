import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-teal-100 text-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold mb-4">VITAL</h3>
            <p className="text-sm">
            Vous rapprocher des médecins de confiance et des soins de santé de qualité.
            </p>
          </div>
  
          <div>
            <h4 className="text-md font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-600">À propos</a></li>
              <li><a href="services-container" className="hover:text-teal-600">Services</a></li>
              <li><a href="#" className="hover:text-teal-600">Médecins</a></li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-md font-semibold mb-3">Contact</h4>
            <ul className="text-sm space-y-2">
              <li><span>Phone:</span> +12 34567890</li>
              <li><span>Email:</span> contact@vitalcare.com</li>
              <li><span>Address:</span> 123 Wellness St., City</li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-md font-semibold mb-3">Suivez-nous</h4>
            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-teal-600">
                <FaFacebook className="fab fa-facebook" />
              </a>
              <a href="#" className="hover:text-teal-600">
                <FaSquareXTwitter className="fab fa-twitter"/>
              </a>
              <a href="#" className="hover:text-teal-600">
                <FaInstagramSquare className="fab fa-instagram"/>
              </a>
              <a href="#" className="hover:text-teal-600">
                <FaLinkedin className="fab fa-linkedin" />
              </a>
            </div>
          </div>
  
        </div>
  
        <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} VITAL Healthcare. All rights reserved.
        </div>
      </footer>
    );
  };
export default Footer;  