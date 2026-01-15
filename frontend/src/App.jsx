
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Layout from './Layout/layout'
import AdminLayout from './Pages/AdminLayout'

import Page from './Pages/Page'
import AddDestination from './Components/Admin/AddDestination'
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

import { Contact } from './Components/Contact'
import ProtectedRoute from './utils/ProtectedRoute'

import NotFoundPage from './Pages/404Page'
import AboutUs from './Components/AboutUs'
import CreateBlog from './Components/Admin/CreateBlog'
import ReviewCardsD from './Components/Reviews/ReviewbyDestinationId'
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
    // Only add script if it doesn't already exist
    if (document.getElementById('messenger-widget-b')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'messenger-widget-b';
    script.src = 'https://cdn.botpenguin.com/website-bot.js';
    script.defer = true;
    
    // Add bot configuration
    const botConfig = document.createTextNode('695b57982cd09804d72cf510,69594a69959c8904ca1af798');
    script.appendChild(botConfig);
    
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('messenger-widget-b');
      if (existingScript) {
        existingScript.remove();
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
          
          {/* Individual Destination Pages */}
          <Route path="/international-trips/:id" element={<Layout><DestinationPackagesPage /></Layout>} />
          <Route path="/domestic-trips/:id" element={<Layout><DestinationPackagesPage /></Layout>} />
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
          <Route path="/group-tours" element={<Layout><HomePage/></Layout>} />
          <Route path="/honeymoon" element={<Layout><HomePage/></Layout>} />
          <Route path="/corporate" element={<Layout><HomePage/></Layout>} />
          <Route path="/weekend" element={<Layout><HomePage/></Layout>} />
          
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy/></Layout>} />
          <Route path="/blogs" element={<Layout><BlogList/></Layout>} />
          <Route path="/blog/:title" element={<Layout><BlogDetail/></Layout>} />
          <Route path="/terms-conditions" element={<Layout><TermsAndConditions/></Layout>} />
          <Route path='/copyright' element={<Layout><Copyright/></Layout>}/>
          <Route path='/adminlogin' element={<LoginPage/>}/>
          <Route path='/career' element={<Layout><Career/></Layout>}/>
          
          <Route path='/about-us' element={<Layout><AboutUs/></Layout>}/>

          <Route path='/contact-us' element={<Layout><Contact/></Layout>}/>
          <Route path='*' element={<Layout><NotFoundPage/></Layout>}/>

      <Route element={<ProtectedRoute />}>
      <Route element={<AdminLayout />}>
        <Route path="/add-destination" element={<AddDestination />} />
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
    </Routes>
    </BrowserRouter>
  )
}

export default App
