"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 w-full bg-white shadow z-50">

        
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex justify-center items-center">
            <img src="/logo.png" className="w-8" alt="logo" /> <span className="text-3xl font-mono">Entrex</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Tour Packages</a>
            <a href="#">Luxury Car Rentals</a>
            <a href="#">Clients</a>
            <a href="#">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-gray-700"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      

      {/* Offcanvas Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-60 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <div className="text-lg font-semibold">Menu</div>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-sm font-medium">
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Tour Packages</a>
          <a href="#">Luxury Car Rentals</a>
          <a href="#">Clients</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
        />
      )}
    </>
  );
}
