
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Layout from './Layout/layout'
import AdminLayout from './Pages/AdminLayout'

import Page from './Pages/Page'
import AddDestination from './Components/Admin/AddDestination'
import EditDestination from './Components/Admin/EditDestination'
import AddPackage from './Components/Admin/AddPackage'
import Signout from './Components/Admin/Signout'
import LoginPage from './Components/Admin/login'
import Managedestination from './Components/Admin/Managedestination'
import TripCard from './Pages/PackagePage'
import ManagePackages from './Components/Admin/ManagePackages'
import EditPackage from './Components/Admin/EditPackage'
import TravelInquiryTable from './Components/Admin/CallBacks'
import AddFAQ from './Components/Admin/FAQS/AddFaqs'
import ManageFAQsByDestination from './Components/Admin/FAQS/ManageFaqs'
import CreateGallery from './Components/Admin/CreateGallery'
import UpdateGallery from './Components/Admin/UpdateGallery'
import CreateReview from './Components/Admin/CreateReview'
import ManageReviews from './Components/Admin/ManageReviews'
import DestinationList from './Components/Admin/DestinationList'
import ManageDestinationPackages from './Components/Admin/ManageDestinationPackages'
import ManageGroupTours from './Components/Admin/ManageGroupTours'

import { Contact } from './Components/Contact'
import ProtectedRoute from './utils/ProtectedRoute'

import NotFoundPage from './Pages/404Page'
import AboutUs from './Components/AboutUs'
import CreateBlog from './Components/Admin/CreateBlog'
import ReviewCardsD from './Components/Reviews/ReviewbyDestinationId'
import HoneymoonPage from './Pages/HoneymoonPage'
import ManageBlog from './Components/Admin/ManageBlog'
import PrivacyPolicy from './Pages/Privact'
import TermsAndConditions from './Pages/TermsandCond'
import Copyright from './Pages/CopyRight'
import { useDispatch } from 'react-redux'
import { fetchDestinations } from '../Redux/destinationSlice'
import { useEffect } from 'react'
import ScrollToTop from './Components/ScrollToTop'
import BlogList from './Pages/BlogList'
import BlogDetail from './Pages/BlogDetail'
import CreateJob from './Components/Admin/CreateJob'
import ManageJobs from './Components/Admin/ManageJobs'
import Career from './Pages/Career'
import InternationalTripsPage from './Pages/InternationalTripsPage'
import DomesticTripsPage from './Pages/DomesticTripsPage'
import DestinationPackagesPage from './Pages/DestinationPackagesPage'
import GroupToursPage from './Pages/GroupToursPage'
import CorporateTripsPage from './Pages/CorporateTripsPage'
import WeekendGetawaysPage from './Pages/WeekendGetawaysPage'
import UniversalDestinationPage from './Pages/UniversalDestinationPage'
import EuropeTourPackagesPage from './Pages/EuropeTourPackagesPage_Dynamic'
import BaliTourPackagesPage from './Pages/BaliTourPackagesPage_Dynamic'
import ThailandTourPackagesPage from './Pages/ThailandTourPackagesPage_Dynamic'
import VietnamTourPackagesPage from './Pages/VietnamTourPackagesPage_Dynamic'
import DubaiTourPackagesPage from './Pages/DubaiTourPackagesPage_Dynamic'
import MaldivesTourPackagesPage from './Pages/MaldivesTourPackagesPage_Dynamic'
import SingaporeTourPackagesPage from './Pages/SingaporeTourPackagesPage_Dynamic'
import MalaysiaTourPackagesPage from './Pages/MalaysiaTourPackagesPage_Dynamic'
import BhutanTourPackagesPage from './Pages/BhutanTourPackagesPage_Dynamic'
import KazakhstanTourPackagesPage from './Pages/KazakhstanTourPackagesPage_Dynamic'
import LadakhTourPackagesPage from './Pages/LadakhTourPackagesPage_Dynamic'
import SpitiValleyTourPackagesPage from './Pages/SpitiValleyTourPackagesPage_Dynamic'
import MeghalayaTourPackagesPage from './Pages/MeghalayaTourPackagesPage_Dynamic'
import KashmirTourPackagesPage from './Pages/KashmirTourPackagesPage_Dynamic'
import NagalandTourPackagesPage from './Pages/NagalandTourPackagesPage_Dynamic'
import AndamanTourPackagesPage from './Pages/AndamanTourPackagesPage_Dynamic'
import KeralaTourPackagesPage from './Pages/KeralaTourPackagesPage_Dynamic'
import RajasthanTourPackagesPage from './Pages/RajasthanTourPackagesPage_Dynamic'
import HimachalPradeshTourPackagesPage from './Pages/HimachalPradeshTourPackagesPage_Dynamic'



const AdminLoginRoute = () => {
  const user = localStorage.getItem('user');
  return user ? <AdminLayout><AddDestination /></AdminLayout> : <LoginPage />;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  // BotPenguin chat widget - loads once for entire app
  useEffect(() => {
    // Check if bot is already loaded (script exists or bot element exists)
    const botScript = document.getElementById('messenger-widget-b');
    const botElement = document.querySelector('.bot-element, #botpenguin-container, [class*="botpenguin"]');
    
    if (botScript || botElement) {
      console.log('[BotPenguin] Already loaded, skipping...');
      return;
    }

    // Add a small delay to prevent duplicate loading in strict mode
    const loadTimer = setTimeout(() => {
      console.log('[BotPenguin] Loading chat widget...');
      
      const script = document.createElement('script');
      script.id = 'messenger-widget-b';
      script.src = 'https://cdn.botpenguin.com/website-bot.js';
      script.defer = true;
      script.setAttribute('data-bot-id', '695b57982cd09804d72cf510');
      script.setAttribute('data-cfasync', 'false');
      
      // Add bot configuration
      const botConfig = document.createTextNode('695b57982cd09804d72cf510,69594a69959c8904ca1af798');
      script.appendChild(botConfig);
      
      // Add error handler
      script.onerror = () => {
        console.error('[BotPenguin] Failed to load chat widget');
      };
      
      script.onload = () => {
        console.log('[BotPenguin] Chat widget loaded successfully');
      };
      
      document.body.appendChild(script);
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(loadTimer);
      const existingScript = document.getElementById('messenger-widget-b');
      if (existingScript) {
        console.log('[BotPenguin] Cleaning up script...');
        existingScript.remove();
      }
      
      // Remove bot container if exists
      const botContainer = document.querySelector('.bot-element, #botpenguin-container, [class*="botpenguin"]');
      if (botContainer) {
        botContainer.remove();
      }
    };
  }, []);

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
          <Route path='/' element={<Layout><HomePage/></Layout>}/>
          
          {/* Listing Pages */}
          <Route path="/international-trips" element={<Layout><InternationalTripsPage /></Layout>} />
          <Route path="/domestic-trips" element={<Layout><DomesticTripsPage /></Layout>} />
          
          {/* International Destination Pages */}
          <Route path="/international-trips/europe" element={<Layout><EuropeTourPackagesPage /></Layout>} />
          <Route path="/international-trips/bali" element={<Layout><BaliTourPackagesPage /></Layout>} />
          <Route path="/international-trips/thailand" element={<Layout><ThailandTourPackagesPage /></Layout>} />
          <Route path="/international-trips/vietnam" element={<Layout><VietnamTourPackagesPage /></Layout>} />
          <Route path="/international-trips/dubai" element={<Layout><DubaiTourPackagesPage /></Layout>} />
          <Route path="/international-trips/maldives" element={<Layout><MaldivesTourPackagesPage /></Layout>} />
          <Route path="/international-trips/singapore" element={<Layout><SingaporeTourPackagesPage /></Layout>} />
          <Route path="/international-trips/malaysia" element={<Layout><MalaysiaTourPackagesPage /></Layout>} />
          <Route path="/international-trips/bhutan" element={<Layout><BhutanTourPackagesPage /></Layout>} />
          <Route path="/international-trips/kazakhstan" element={<Layout><KazakhstanTourPackagesPage /></Layout>} />
          
          {/* Domestic Destination Pages */}
          <Route path="/domestic-trips/ladakh" element={<Layout><LadakhTourPackagesPage /></Layout>} />
          <Route path="/domestic-trips/spiti-valley" element={<Layout><SpitiValleyTourPackagesPage /></Layout>} />
          <Route path="/domestic-trips/meghalaya" element={<Layout><MeghalayaTourPackagesPage /></Layout>} />
          <Route path="/domestic-trips/kashmir" element={<Layout><KashmirTourPackagesPage /></Layout>} />
          <Route path="/domestic-trips/nagaland" element={<Layout><NagalandTourPackagesPage /></Layout>} />
          <Route path="/domestic-trips/andaman" element={<Layout><AndamanTourPackagesPage /></Layout>} />
          <Route path="/domestic-trips/kerala" element={<Layout><KeralaTourPackagesPage /></Layout>} />
          <Route path="/domestic-trips/rajasthan" element={<Layout><RajasthanTourPackagesPage /></Layout>} />
          <Route path="/domestic-trips/himachal-pradesh" element={<Layout><HimachalPradeshTourPackagesPage /></Layout>} />
          
          {/* Catch-all route for any new International destinations created through admin */}
          <Route path="/international-trips/:slug" element={<Layout><UniversalDestinationPage /></Layout>} />
          
          {/* Catch-all route for any new Domestic destinations created through admin */}
          <Route path="/domestic-trips/:slug" element={<Layout><UniversalDestinationPage /></Layout>} />
          
          {/* Individual Destination Pages - Legacy support */}
          <Route path="/tours/:slug" element={<Layout><TripCard/></Layout>} />
          
          {/* Dynamic Destination Packages Page */}
          <Route path="/destination/:destination" element={<Layout><DestinationPackagesPage /></Layout>} />
          
          {/* Navigation Routes - Show HomePage with specific sections */}
          <Route path="/international" element={<Layout><HomePage/></Layout>} />
          <Route path="/domestic" element={<Layout><HomePage/></Layout>} />
          <Route path="/destinations" element={<Layout><HomePage/></Layout>} />
          <Route path="/interests" element={<Layout><HomePage/></Layout>} />
          <Route path="/why-choose-us" element={<Layout><HomePage/></Layout>} />
          <Route path="/faq" element={<Layout><HomePage/></Layout>} />
          
          {/* Special Trip Categories */}
          <Route path="/group-tours" element={<Layout><GroupToursPage/></Layout>} />
          <Route path="/honeymoon" element={<Layout><HoneymoonPage/></Layout>} />
          <Route path="/corporate" element={<Layout><CorporateTripsPage/></Layout>} />
          <Route path="/weekend" element={<Layout><WeekendGetawaysPage/></Layout>} />
          
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy/></Layout>} />
          <Route path="/blogs" element={<Layout><BlogList/></Layout>} />
          <Route path="/blog/:title" element={<Layout><BlogDetail/></Layout>} />
          <Route path="/terms-conditions" element={<Layout><TermsAndConditions/></Layout>} />
          <Route path='/copyright' element={<Layout><Copyright/></Layout>}/>
          <Route path='/adminlogin' element={<LoginPage/>}/>
          <Route path='/career' element={<Layout><Career/></Layout>}/>
          
          <Route path='/about-us' element={<Layout><AboutUs/></Layout>}/>

          <Route path='/contact-us' element={<Layout><Contact/></Layout>}/>

      <Route element={<ProtectedRoute />}>
      <Route element={<AdminLayout />}>
        {/* Domestic & International Destination Management */}
        <Route path="/admin/domestic-destinations" element={<DestinationList />} />
        <Route path="/admin/international-destinations" element={<DestinationList />} />
        <Route path="/admin/destination/:destinationId/packages" element={<ManageDestinationPackages />} />
        <Route path="/admin/destination/:destinationId/group-tours" element={<ManageGroupTours />} />
        
        {/* General Admin Routes */}
        <Route path="/add-destination" element={<AddDestination />} />
        <Route path="/admin/edit-destination/:id" element={<EditDestination />} />
        <Route path="/add-package" element={<AddPackage />} />
        <Route path="/manage-destination" element={<Managedestination />} />
        <Route path="/manage-package" element={<ManagePackages />} />
        <Route path="/edit-package/:packageId" element={<EditPackage />} />
        <Route path='/create-blog' element={<CreateBlog/>}/>
        <Route path='/create-job' element={<CreateJob/>}/>
        <Route path='/manage-job' element={<ManageJobs/>}/>
        <Route path='/manage-blog' element={<ManageBlog/>}/>
        <Route path="/add-faqs" element={<AddFAQ/>} />
        <Route path="/add-galaries" element={<CreateGallery/>} />
        <Route path="/create-review" element={<CreateReview/>} />
        <Route path="/manage-review" element={<ManageReviews/>} />
        <Route path="/update-galaries" element={<UpdateGallery/>} />
        <Route path="/manage-faqs" element={<ManageFAQsByDestination/>} />
        <Route path="/call-backs" element={<TravelInquiryTable/>} />
        <Route path="/signout" element={<Signout />} />
      </Route>
      </Route>
      
      {/* 404 Route - Must be last */}
      <Route path='*' element={<Layout><NotFoundPage/></Layout>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
