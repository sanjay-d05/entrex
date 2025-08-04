import { FaTwitter, FaFacebookF, FaLinkedinIn , FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-600">
        
        {/* Logo + Description */}
        <div>
          <div className="text-gray-900 flex items-center">
            <img src="/logo.png" alt="Entrex" className="w-8" />
            <span className="text-3xl font-mono">Entrex</span>
          </div>
          <p className="mt-4 text-sm">
            We are one of the leading Travel operators in South India with our registered office at Madipakkam, Chennai. We serve leading corporate clients in Chennai and Bangalore regions.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Compliance Control</a></li>
            <li><a href="#">Security Control</a></li>
          </ul>
        </div>

        {/* Tours */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Tours</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Sales software</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Privacy and security</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
          <p className="text-sm mb-2">
            ASK Towers 1st floor, 183-184, 3rd Main Rd,<br />
            Sri Sai Nagar, Thoraipakkam, Tamil Nadu 600096
          </p>
          <p className="text-sm flex items-center">
            <IoMdMail /> <span className="ml-2">bookings@entrex.in</span>
          </p>
          <p className="text-sm flex items-center mt-2">
            <FaPhoneAlt/> <span className="ml-2">+91 44 4953 0055</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-sm text-gray-500 py-6 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>© 2025 Entrex. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Twitter" className="bg-blue-500 text-white p-1 rounded-[50%]"><FaTwitter /></a>
          <a href="#" aria-label="Facebook" className="bg-blue-700 text-white p-1 rounded-[50%]"><FaFacebookF /></a>
          <a href="#" aria-label="LinkedIn" className="bg-blue-800 text-white p-1 rounded-[50%]"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
