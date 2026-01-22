import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt, FaBoxOpen, FaSignOutAlt,FaPhone , FaBars, FaTimes, FaImages, FaStar, FaQuestionCircle, FaBlog, FaBriefcase, FaGlobeAsia, FaFlag, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track which submenu is open

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Toggle submenu and close others
  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name); // Toggle the clicked submenu, close others
  };

  const navItems = [
    {
      name: 'Domestic',
      icon: <FaFlag />,
      subItems: [
        { name: 'View Destinations', path: '/admin/domestic-destinations' },
        { name: 'Add Destination', path: '/add-destination?category=domestic' },
      ],
    },
    {
      name: 'International',
      icon: <FaGlobeAsia />,
      subItems: [
        { name: 'View Destinations', path: '/admin/international-destinations' },
        { name: 'Add Destination', path: '/add-destination?category=international' },
      ],
    },
    {
      name: 'All Destinations',
      icon: <FaMapMarkerAlt />,
      subItems: [
        { name: 'Manage All', path: '/manage-destination' },
        { name: 'Add New', path: '/add-destination' },
      ],
    },
    {
      name: 'All Packages',
      icon: <FaBoxOpen />,
      subItems: [
        { name: 'Manage All', path: '/manage-package' },
        { name: 'Add New', path: '/add-package' },
      ],
    },
    {
      name: 'Gallery',
      icon: <FaImages />,
      subItems: [
        { name: 'Add Gallery', path: '/add-galaries' },
        { name: 'Manage Gallery', path: '/update-galaries' },
      ],
    },
    {
      name: 'Review',
      icon: <FaStar />,
      subItems: [
        { name: 'Add Review', path: '/create-review' },
        { name: 'Manage Review', path: '/manage-review' },
      ],
    },
    {
      name: 'FAQ',
      icon: <FaQuestionCircle />,
      subItems: [
        { name: 'Add FAQ', path: '/add-faqs' },
        { name: 'Manage FAQ', path: '/manage-faqs' },
      ],
    },
    {
      name: 'Blog',
      icon: <FaBlog />,
      subItems: [
        { name: 'Create Blog', path: '/create-blog' },
        { name: 'Manage Blog', path: '/manage-blog' },
      ],
    },
    {
      name: 'Job',
      icon: <FaBriefcase />,
      subItems: [
        { name: 'New Job', path: '/create-job' },
        { name: 'Manage Jobs', path: '/manage-job' },
      ],
    },
    {
      name: 'Call_Backs',
      icon: <FaPhone />,
      path: '/call-backs',
    },
    { name: 'Signout', path: '/signout', icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto h-full`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Travel Admin</h1>
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="mt-4 pb-4">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.subItems ? (
                <>
                  <button
                    className="flex items-center p-4 w-full text-left hover:bg-gray-700"
                    onClick={() => toggleSubmenu(item.name)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </button>
                  {openSubmenu === item.name && (
                    <div className="pl-8">
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `flex items-center p-4 hover:bg-gray-700 ${
                              isActive ? 'bg-gray-700 border-l-4 border-blue-500' : ''
                            }`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center p-4 hover:bg-gray-700 ${
                      isActive ? 'bg-gray-700 border-l-4 border-blue-500' : ''
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-gray-800"
        onClick={toggleSidebar}
      >
        <FaBars size={24} />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;