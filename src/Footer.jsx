import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Foobr</h3>
            <p className="text-white/80 text-sm">
              Fast, reliable and secure food delivery service to help cater for your hunger & cravings.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/restaurants" className="text-white/80 hover:text-white text-sm">Restaurants</Link></li>
              <li><Link to="/history" className="text-white/80 hover:text-white text-sm">Order History</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>+234 123 456 7890</li>
              <li>support@foobr.ng</li>
              <li>123 Food Street, Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Foobr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;