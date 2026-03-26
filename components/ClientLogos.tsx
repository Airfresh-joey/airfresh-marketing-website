'use client'

import Image from "next/image";

const clients = [
  { name: "Microsoft", logo: "/images/clients/microsoft.svg" },
  { name: "Netflix", logo: "/images/clients/netflix.svg" },
  { name: "Red Bull", logo: "/images/clients/redbull.svg" },
  { name: "Google", logo: "/images/clients/google.svg" },
  { name: "Adidas", logo: "/images/clients/adidas.svg" },
  { name: "Nike", logo: "/images/clients/nike.svg" },
  { name: "Lyft", logo: "/images/clients/lyft.svg" },
  { name: "Formula 1", logo: "/images/clients/f1.svg" },
  { name: "TED", logo: "/images/clients/ted.svg" },
  { name: "Cirque du Soleil", logo: "/images/clients/cirque.svg" },
  { name: "Grubhub", logo: "/images/clients/grubhub.svg" },
  { name: "Starbucks", logo: "/images/clients/starbucks.svg" },
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
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-12 w-32 hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={100}
                height={40}
                className="h-8 w-auto object-contain"
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
