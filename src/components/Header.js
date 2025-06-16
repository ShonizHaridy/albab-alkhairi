'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/logo_transparent.png'; // Adjust the path as necessary

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3 space-x-reverse">
              <Image
                src={logo}
                alt="الباب الخيري"
                width={50}
                height={50}
                className="rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-xl" style={{display: 'none'}}>
                الباب الخيري
              </div>
              <span className="text-2xl font-bold text-green-600">الباب الخيري</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              الرئيسية
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              نبذة عنا
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              كيف نعمل
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              خدماتنا
            </Link>
            <Link href="#partners" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              شركاؤنا
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              الأسئلة الشائعة
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#request" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-lg">
              اطلب مندوب الآن
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                الرئيسية
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                نبذة عنا
              </Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                كيف نعمل
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                خدماتنا
              </Link>
              <Link href="#partners" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                شركاؤنا
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                الأسئلة الشائعة
              </Link>
              <Link href="#request" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-semibold">
                اطلب مندوب الآن
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

