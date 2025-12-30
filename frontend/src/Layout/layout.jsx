import MobileMenu from '../Components/MobileBottomMenu';
import Footer from '../Components/Footer';


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Optional Top Navbar */}
      {/* <Navbar /> */}

      {/* Main Content Area */}
      <main className="flex-grow ">
        {children}
      </main>

      {/* Mobile Menu with Modals */}
      <div className='mb-6 xl:mb-0'>

      <Footer/>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Layout;
