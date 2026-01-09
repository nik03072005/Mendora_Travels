import React from 'react';
import PackageCard from './PackageCard';

const CountryPackageSection = ({ title, slug, packages }) => {
  return (
    <div className="mb-16">
      <div className="mb-6">
        <a href={`/international-trips/${slug}`} className="inline-block">
          <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            {title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mt-2 rounded-full"></div>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            image={pkg.image}
            title={pkg.title}
            price={pkg.price}
            originalPrice={pkg.originalPrice}
            duration={pkg.duration}
            route={pkg.route}
            dates={pkg.dates}
            highlights={pkg.highlights}
            isPopular={pkg.isPopular}
            isRecommended={pkg.isRecommended}
            onClick={pkg.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryPackageSection;
