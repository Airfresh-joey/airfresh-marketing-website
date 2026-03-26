'use client'

import Image from "next/image";

const clients = [
  { name: "Microsoft", logo: "/images/clients/microsoft.svg" },
  { name: "Netflix", logo: "/images/clients/netflix.svg" },
  { name: "Lyft", logo: "/images/clients/lyft.svg" },
  { name: "Formula 1", logo: "/images/clients/f1.svg" },
  { name: "TED", logo: "/images/clients/ted.svg" },
  { name: "Grubhub", logo: "/images/clients/grubhub.svg" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Trusted By Leading Brands
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            From Fortune 500 to Fast-Growing Startups
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-20 w-40 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 w-auto object-contain"
                style={{ minWidth: '80px' }}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">500+</span> brands trust Air Fresh for their experiential marketing needs
          </p>
        </div>
      </div>
    </section>
  );
}
