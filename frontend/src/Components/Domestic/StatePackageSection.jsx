import React from 'react';
import { useNavigate } from 'react-router-dom';
import PackageCard from './PackageCard';

const StatePackageSection = ({ title, slug, packages }) => {
  const navigate = useNavigate();
  
  // Show only first 3 packages
  const displayedPackages = packages.slice(0, 3);
  
  return (
    <div className="mb-16">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <a href={`/domestic-trips/${slug}`} className="inline-block">
            <h2 className="text-3xl font-bold text-gray-900 hover:text-orange-600 transition-colors">
              {title}
            </h2>
            <div className="w-20 h-1 bg-orange-600 mt-2 rounded-full"></div>
          </a>
        </div>
        {packages.length > 3 && (
          <button
            onClick={() => navigate(`/domestic-trips/${slug}`)}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPackages.map((pkg, index) => (
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
            isCustomised={pkg.isCustomised}
            onClick={pkg.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default StatePackageSection;
