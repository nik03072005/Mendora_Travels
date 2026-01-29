import React from "react";
import TNavbar from "../Components/TransparentNavbar";
import privacy from '../assets/privacy-policy.jpg';
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Mendora Travels</title>
        <meta
          name="description"
          content="Mendora Travels is committed to protecting your privacy. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>
      <TNavbar />
      <div className=" text-gray-800">
        {/* Banner */}
        <header
          className="sm:h-[80vh] h-[43vh] bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${privacy})`,
          }}
        >
          <div className="bg-black bg-opacity-60 text-white p-4 sm:p-6 md:p-8 rounded-lg flex justify-center items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              PRIVACY POLICY
            </h1>
          </div>
        </header>

        {/* Content */}
        <div className="bg-white mx-auto px-8 pt-12 pb-10 max-w-6xl">
          {/* INTRODUCTION */}
             <p className="mb-4"> Updated at:02/06/2025</p>
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">INTRODUCTION:</h2>
            <p className="mb-4">
              In this documentation, whenever we mention We, Our, Us, or Company, it implies that we are referring to Mendora Travels. Similarly, "Yourself," "Your," and "You" indicate users.
            </p>
            <p className="mb-4">
              The Privacy Policy is in place to act as an electronic record. Established under the Information Technology Act of 2000; this Privacy Policy acts as a legally binding contract. 
            </p>
            <p className="mb-4">
              In this Privacy Policy, we acknowledge the statutes that govern electronic records and documents. Please note that for this Privacy Policy, a digital, electronic, or physical signature is not required. Instead, this is a legally binding document between Mendora Travels and yourself.
            </p>
            <p className="mb-4">
              Upon your accepting the terms of the Privacy Policy, it comes into action. The Privacy Policy has been put in place to govern the relationship that you share with Mendora Travels regarding your use of the website.
            </p>
            <p className="mb-4">
              To formulate this document, we have closely considered the provisions of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Information Technology Act, 2000. These regulations make the publishing of a Privacy Policy mandatory, wherein the rules for transfer, storage, usage, and collection of information or sensitive personal data have been defined.
            </p>
            <p className="mb-4">
              When you use the website, it implies that you understand, agree, and consent to this privacy policy. Hence, we recommend that you go through this privacy policy. In case you do not agree with the terms mentioned here, please do not use our website.
            </p>
            <p className="mb-4">
              When you share any information over this website or use the website in any way, you agree to allow us to collect, store, process, or transfer your non-personal or personal information. You also agree that this information and its usage, storage, and transfer will not result in its loss or a wrongful gain for any entity.
            </p>
          </section>

          {/* USER INFORMATION */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">USER INFORMATION:</h2>
            <p className="mb-4">
              If you need to access any services over our website, you will need to share certain information when you register. Included herein are details like your full name, gender, email address, age, credit or debit card information, postal code, medical history, medical records, password, biometric data, and other information concerning your interests and occupation. The information that users provide not only helps us enhance the website but also optimizes the user experience.
            </p>
            <p className="mb-4">
              Any information that is publicly available or freely accessible or is disclosed under applicable legislation like the Right to Information Act of 2005 is not deemed sensitive.
            </p>
          </section>

          {/* COOKIES */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">COOKIES:</h2>
            <p className="mb-4">
              We employ electronic tools such as cookies to make our website more responsive for all users. When these tools collect information, they assign a random and unique number called User Identification (User ID) to each visitor. This delivers a fair idea of the users' interests, as defined by their browsing behavior using any particular computer. 
            </p>
            <p className="mb-4">
              We have no way of personally identifying you even if a cookie is assigned to your computer. This is unless you disclose your identity voluntarily via registration. 
            </p>
            <p className="mb-4">
              Similarly, it is important to note that a cookie will only contain the information that you make available and can access no data from the hard drive. When you click on the ads shown on our website, our advertisers can assign their cookies to you. However, we exercise no control over the latter process.
            </p>
            <p className="mb-4">
              When you visit our website, limited information concerning your computer's internet connection is automatically stored on our web server. Your IP address is herein included.
            </p>
            <p className="mb-4">
              As a numerical identifier, an IP address allows a computer to connect to the internet. This way, the internet knows where it is to send data for the services you take, such as viewing web pages. Your IP address does not identify you personally.
            </p>
            <p className="mb-4">
              So, we use this information to deliver the requested web pages to you and also customize the site as defined by your interests. The same information is used to measure site traffic. Advertisers are hence informed about where our visitors are geographically located.
            </p>
          </section>

          {/* INFORMATION SHARING */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">INFORMATION SHARING:</h2>
            <p className="mb-4">
              The following are the cases wherein we share sensitive personal information with third parties but do not take users' prior consent. This happens just in a few cases.
            </p>
            <ol className="list-decimal list-inside mb-4 space-y-2">
              <li className="mb-2">
                This happens when court orders or laws require it or there have been requests from government authorities or agencies. The underlying purpose is identity verification or investigation, detection, or prevention of cyber incidents. Prosecution and punishment of offenses are also a few of such related matters. All disclosures that we make are in good faith when we feel that making these disclosures is a must for enforcing our terms or for compliance with the applicable regulations and laws.
              </li>
              <li className="mb-2">
                We are authorized to share this information with our group companies, which also cover their employees and officers. They process this information on our behalf. However, these entities comply with this Privacy Policy and our instructions when they process this information. They also stick to all related information associated with security measures and confidentiality.
              </li>
            </ol>
          </section>

          {/* OUTBOUND LINKS */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">OUTBOUND LINKS TO THIRD-PARTY WEBSITES:</h2>
            <p className="mb-4">
              On our website, you will come across outbound links that direct to third-party websites. These websites are unrelated to us. However, before adding these links to our website, we verify that they share valuable services or content and also adhere to standard norms. However, in case any discrepancies or issues arise from visiting external websites, we may not be held liable for the same.
            </p>
          </section>

          {/* INFORMATION SECURITY */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">INFORMATION SECURITY:</h2>
            <p className="mb-4">
              To safeguard against destruction, disclosure, alteration, or unauthorized access to data, we implement requisite security measures. Internal reviews of our practices for data destruction, disclosure, alteration, and access are herein included and so are security measures such as physical safeguards and encryption. This prevents unauthorized access to systems where personal data is stored.
            </p>
            <p className="mb-4">
              The internet is a medium that continuously evolves. We reserve all rights to periodically update our Privacy Policy such that necessary changes can be incorporated. You can be assured that all information that we collect will always be based on the privacy policy under which we initially obtained the information. Future revisions are of no consequence in this case.
            </p>
          </section>

          {/* GRIEVANCE OFFICER */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">GRIEVANCE OFFICER:</h2>
            <p className="mb-4">
              In case you have any queries regarding the privacy policy or any related discrepancies, please get in touch with our grievance officer at the information provided below.
            </p>
            <p className="mb-2">
              <strong>John Snow</strong>
            </p>
            <p className="mb-4">
              Email:{" "}
              <span className="text-blue-600 underline">
                info@mendoratravels.com
              </span>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;