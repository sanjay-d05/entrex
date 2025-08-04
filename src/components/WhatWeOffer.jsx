import {IoEyeOff} from 'react-icons/io5';
import { MdOutlineFlight } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import {FaBusAlt,FaGlobeAsia, FaPlaneDeparture,FaChartLine,FaMobileAlt} from 'react-icons/fa';

export default function WhatWeOffer() {
  const offerings = [
    {
      icon: <IoEyeOff />, 
      title: "Executive Chauffeur Services",
      description:"Discreet, professional chauffeurs for directors, VIPs, and senior leadership.",
      bgColor:'bg-sky-300'
    },
    {
      icon: <FaPlaneDeparture/>,
      title: "Airport Transfers",
      description:"Punctual pickups and drop-offs with live flight tracking and zero waiting time.",
      bgColor:'bg-yellow-300'
    },
    {
      icon: <FaBusAlt />,
      title: "Employee Commute Programs",
      description:"Safe, app-tracked transportation for staff with route optimization and rostering.",
      bgColor:'bg-orange-300'
    },
    {
      icon: <FaGlobeAsia/>,
      title: "Expat & Guest Handling",
      description:"Hospitality-trained chauffeurs and multilingual support for global visitors and delegations.",
      bgColor:'bg-purple-300'
    },
    {
      icon: <FaChartLine/>,
      title: "Centralized Billing & MIS Reports",
      description:"Transparent invoicing with detailed ride history, analytics, and corporate summaries.",
      bgColor:'bg-sky-300'
    },
    {
      icon: <FaMobileAlt/>,
      title: "App-Based Booking & Trip Management",
      description:"Real-time tracking, instant bookings, and secure ride monitoring via our digital platform.",
      bgColor:'bg-yellow-300'
    },
  ];

  return (
    <section className="py-12 px-2 md:px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-2">What We Offer</h2>
      <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
        Our services are designed to simplify business mobility while delivering
        consistent, comfortable, and compliant ground transportation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left max-w-6xl mx-auto">
        {offerings.map((offer, idx) => (
          <div key={idx} className="flex flex-col items-start gap-4">
            <div className={`text-lg p-2 ${offer.bgColor || 'bg-red-500'} rounded-lg`}>
              {offer.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{offer.title}</h3>
              <p className="text-gray-600 text-sm">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
