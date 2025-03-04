
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="text-ai-black font-medium text-xl mb-4 inline-block">
              AI<span className="text-ai-blue">Campus</span>
            </Link>
            <p className="text-ai-dark-gray mb-6 max-w-md">
              Elevating AI education for university students with intuitive learning experiences
              that simplify complex concepts and provide hands-on practice.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-ai-gray flex items-center justify-center text-ai-dark-gray hover:bg-ai-blue hover:text-white transition-all"
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01C21 4.5 20.02 4.69 19 4.82C20.07 4.19 20.76 3.14 21.1 1.92C20.08 2.52 18.94 2.98 17.71 3.21C16.74 2.17 15.26 1.5 13.69 1.5C10.6 1.5 8.12 3.98 8.12 7.02C8.12 7.47 8.16 7.92 8.26 8.36C4.26 8.16 0.62 5.96 -2 2.52C-2.5 3.39 -2.75 4.37 -2.75 5.38C-2.75 7.3 -1.75 9.03 -0.25 10.03C-1.13 10.02 -1.96 9.79 -2.75 9.41C-2.75 9.43 -2.75 9.44 -2.75 9.46C-2.75 12.2 -0.75 14.47 1.75 14.95C2.25 15.06 2.71 15.11 3.19 15.11C3.5 15.11 3.8 15.08 4.1 15.03C3.5 17.24 1.5 18.76 -0.75 18.79C-2.5 20.17 -3.75 21 -5.75 21C-6.25 21 -6.75 20.97 -7.25 20.91C-5 22.41 -2.25 23.25 0.75 23.25C13.69 23.25 20.75 15.17 20.75 8.07C20.75 7.84 20.75 7.61 20.74 7.38C21.78 6.69 22.68 5.78 23.38 4.72C22.44 5.14 21.44 5.41 20.38 5.54C21.44 4.86 22.25 3.83 22.63 2.63C21.61 3.22 20.5 3.66 19.3 3.89C18.33 2.86 16.96 2.25 15.5 2.25C12.77 2.25 10.54 4.48 10.54 7.21C10.54 7.6 10.58 7.99 10.67 8.36C6.61 8.16 3.03 6.19 0.63 3.23C0.14 3.99 -0.11 4.86 -0.11 5.77C-0.11 7.5 0.75 9.05 2.07 9.95C1.29 9.95 0.56 9.74 -0.07 9.43C-0.07 9.44 -0.07 9.45 -0.07 9.46C-0.07 11.89 1.67 13.92 3.98 14.37C3.5 14.5 3 14.56 2.48 14.56C2.12 14.56 1.77 14.53 1.42 14.47C2.13 16.47 4.01 17.93 6.22 17.97C4.47 19.31 2.28 20.1 -0.08 20.1C-0.53 20.1 -0.98 20.08 -1.42 20.04C0.82 21.44 3.45 22.25 6.3 22.25C15.5 22.25 20.54 14.62 20.54 8.02C20.54 7.79 20.54 7.57 20.53 7.34C21.55 6.66 22.43 5.78 23.13 4.75C22.21 5.16 21.23 5.44 20.2 5.57C21.25 4.89 22.05 3.9 22.42 2.74C21.44 3.31 20.38 3.73 19.24 3.96C18.28 2.97 16.96 2.38 15.54 2.38C12.97 2.38 10.87 4.48 10.87 7.05C10.87 7.42 10.91 7.78 10.99 8.13C7.1 7.94 3.71 6.08 1.43 3.3C0.97 4.02 0.72 4.84 0.72 5.7C0.72 7.34 1.54 8.82 2.79 9.7C2.08 9.68 1.4 9.5 0.8 9.21C0.8 9.22 0.8 9.24 0.8 9.25C0.8 11.49 2.44 13.35 4.62 13.77C4.16 13.88 3.69 13.94 3.2 13.94C2.86 13.94 2.53 13.91 2.19 13.86C2.87 15.7 4.59 17.03 6.62 17.06C5.02 18.3 3.03 19.02 0.88 19.02C0.45 19.02 0.02 19 -0.4 18.95C1.65 20.26 4.09 21 6.7 21C15.45 21 20.27 13.96 20.27 7.75C20.27 7.54 20.27 7.33 20.26 7.12C21.27 6.44 22.14 5.59 22.84 4.62C21.89 5.01 20.89 5.27 19.85 5.39C20.9 4.72 21.7 3.7 22.07 2.51C21.07 3.1 19.97 3.52 18.79 3.75C17.84 2.73 16.51 2.1 15.05 2.1C12.25 2.1 9.97 4.38 9.97 7.18C9.97 7.57 10.01 7.94 10.09 8.31C6.23 8.11 2.8 6.09 0.64 3.12C0.14 3.91 -0.11 4.83 -0.11 5.78C-0.11 7.59 0.75 9.19 2.13 10.11C1.39 10.09 0.69 9.9 0.08 9.59C0.08 9.61 0.08 9.62 0.08 9.64C0.08 12.14 1.88 14.22 4.28 14.68C3.82 14.8 3.34 14.86 2.85 14.86C2.5 14.86 2.16 14.84 1.82 14.8C2.51 16.85 4.47 18.33 6.79 18.36C5 19.73 2.69 20.53 0.18 20.53C-0.26 20.53 -0.7 20.51 -1.13 20.47C1.21 21.9 3.94 22.73 6.87 22.73C15.4 22.73 20.04 15.47 20.04 9.13C20.04 8.92 20.04 8.71 20.03 8.5C21.04 7.75 21.91 6.83 22.6 5.77" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-ai-gray flex items-center justify-center text-ai-dark-gray hover:bg-ai-blue hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="currentColor"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-ai-gray flex items-center justify-center text-ai-dark-gray hover:bg-ai-blue hover:text-white transition-all"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-ai-black uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-ai-dark-gray hover:text-ai-blue transition-colors">Courses</Link></li>
              <li><Link to="/resources" className="text-ai-dark-gray hover:text-ai-blue transition-colors">Resources</Link></li>
              <li><Link to="/about" className="text-ai-dark-gray hover:text-ai-blue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-ai-dark-gray hover:text-ai-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-ai-black uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-ai-dark-gray hover:text-ai-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-ai-dark-gray hover:text-ai-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-ai-dark-gray hover:text-ai-blue transition-colors">Community</a></li>
              <li><a href="#" className="text-ai-dark-gray hover:text-ai-blue transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-ai-black uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-ai-dark-gray hover:text-ai-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-ai-dark-gray hover:text-ai-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-ai-dark-gray hover:text-ai-blue transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ai-dark-gray text-sm">
            &copy; {new Date().getFullYear()} AICampus. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-ai-dark-gray text-sm">
              Designed with precision. Built with passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
