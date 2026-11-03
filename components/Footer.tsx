import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold">BSUSA</span>
                <span className="text-sm text-gray-400">Better Start USA Foundation, Inc.</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Adult education for immigrants and refugees in the United States: workshops on American life
              and work, career guidance, hands-on trade training, and small business support — so newcomers
              can become self-sufficient.
            </p>
            <div className="flex space-x-4">
              <Link href="/ways-to-help#donate" className="btn-primary">
                Donate
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About &amp; Mission
                </Link>
              </li>
              <li>
                <Link href="/programs/newcomer-orientation" className="text-gray-300 hover:text-white transition-colors">
                  Newcomer Orientation
                </Link>
              </li>
              <li>
                <Link href="/programs/career-pathways" className="text-gray-300 hover:text-white transition-colors">
                  Career Pathways
                </Link>
              </li>
              <li>
                <Link href="/programs/hands-on-trade-training" className="text-gray-300 hover:text-white transition-colors">
                  Hands-On Trade Training
                </Link>
              </li>
              <li>
                <Link href="/programs/small-business-support" className="text-gray-300 hover:text-white transition-colors">
                  Small Business Support
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-300 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@bsusa.org" className="text-gray-300 hover:text-white transition-colors">
                  info@bsusa.org
                </a>
              </div>
              <div>
                <Link href="/ways-to-help#volunteer" className="text-gray-300 hover:text-white transition-colors">
                  Volunteer with us
                </Link>
              </div>
              <div>
                <Link href="/ways-to-help#partner" className="text-gray-300 hover:text-white transition-colors">
                  Partner with us
                </Link>
              </div>
              <div>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact page
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="text-gray-300 mb-1">
            Better Start USA Foundation, Inc. — a nonprofit registered in the State of Florida.
          </p>
          <p className="text-gray-400">
            © {year} Better Start USA Foundation, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
