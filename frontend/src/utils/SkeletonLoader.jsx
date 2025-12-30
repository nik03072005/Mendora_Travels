import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PropTypes from 'prop-types';

// Utility to generate Tailwind classes based on props
const getSizeClasses = (width, height) => {
  const classes = [];
  if (width) classes.push(typeof width === 'string' ? width : `w-${width}`);
  if (height) classes.push(typeof height === 'string' ? height : `h-${height}`);
  return classes.join(' ');
};

// Custom CSS for enhanced shimmer effect
const enhancedShimmer = `
  .enhanced-shimmer {
    position: relative;
    overflow: hidden;
  }
  .enhanced-shimmer::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: shimmer 1.2s infinite;
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  .enhanced-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;

// Inject custom styles into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = enhancedShimmer;
document.head.appendChild(styleSheet);

const SkeletonLoader = ({
  count = 1,
  width,
  height,
  circle = false,
  className = '',
  baseColor = '#b0b3b8', // Gray-400 for more contrast
  highlightColor = '#e0e0e0', // Gray-300 for shimmer
  duration = 1.2, // Faster animation for dynamic feel
  containerClassName = '',
  type = 'text', // 'text', 'card', 'image', 'custom'
  enablePulse = false, // New prop to toggle pulse effect
}) => {
  // Define default styles for different types
  const getSkeletonStyles = () => {
    switch (type) {
      case 'card':
        return {
          width: width || 'w-full',
          height: height || 'h-40',
          className: `rounded-lg shadow-sm ${className} enhanced-shimmer ${enablePulse ? 'enhanced-pulse' : ''}`,
        };
      case 'image':
        return {
          width: width || 'w-32',
          height: height || 'h-32',
          className: `rounded-md ${circle ? 'rounded-full' : ''} ${className} enhanced-shimmer ${enablePulse ? 'enhanced-pulse' : ''}`,
        };
      case 'text':
        return {
          width: width || 'w-full',
          height: height || 'h-4',
          className: `rounded ${className} enhanced-shimmer ${enablePulse ? 'enhanced-pulse' : ''}`,
        };
      case 'custom':
        return {
          width: width || 'w-auto',
          height: height || 'h-auto',
          className: `${className} enhanced-shimmer ${enablePulse ? 'enhanced-pulse' : ''}`,
        };
      default:
        return {
          width: width || 'w-full',
          height: height || 'h-4',
          className: `rounded ${className} enhanced-shimmer ${enablePulse ? 'enhanced-pulse' : ''}`,
        };
    }
  };

  const { width: skeletonWidth, height: skeletonHeight, className: skeletonClassName } = getSkeletonStyles();

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor} duration={duration}>
      <div className={`skeleton-container ${containerClassName}`}>
        <Skeleton
          count={count}
          width={typeof width === 'number' ? width : undefined}
          height={typeof height === 'number' ? height : undefined}
          circle={circle}
          className={`${getSizeClasses(skeletonWidth, skeletonHeight)} ${skeletonClassName}`}
        />
      </div>
    </SkeletonTheme>
  );
};

SkeletonLoader.propTypes = {
  count: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circle: PropTypes.bool,
  className: PropTypes.string,
  baseColor: PropTypes.string,
  highlightColor: PropTypes.string,
  duration: PropTypes.number,
  containerClassName: PropTypes.string,
  type: PropTypes.oneOf(['text', 'card', 'image', 'custom']),
  enablePulse: PropTypes.bool,
};

export default SkeletonLoader;