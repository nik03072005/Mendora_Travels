import React from "react";
import TNavbar from "../Components/TransparentNavbar";
import copyright from "../assets/copyright.jpg"; // Adjust the path to your copyright image
import { Helmet } from "react-helmet-async";

const Copyright = () => {
  return (
    <>
      <Helmet>
        <title>Copyright Policy | Trip Tortoise</title>
        <meta name="description" content="Review Trip Tortoise' copyright policy to understand how our content and media are protected and how to request permission or report infringement."/>
      </Helmet>
      <>
        <TNavbar />
        <div className=" text-gray-800">
          {/* Banner */}
          <header
            className="sm:h-[80vh] h-[43vh] bg-cover bg-center flex items-center justify-center relative"
            style={{
              backgroundImage:
                `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${copyright})`,
            }}
          >
            <div className="bg-black bg-opacity-60 text-white p-4 sm:p-6 md:p-8 rounded-lg flex justify-center items-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                COPYRIGHT POLICY
              </h1>
            </div>
          </header>

          {/* Content */}
          <main className="max-w-6xl mx-auto bg-white px-4 pt-12 pb-10">
            <section className="mb-10">
              <p className="mb-4"> cardsUpdated at:02/06/2025</p>
              <h2 className="text-2xl font-bold mb-4">COPYRIGHT POLICY</h2>
              <p className="mb-4">
                Trip Tortoise Holidays Pvt Ltd is one of the online marketplaces and vendors and suppliers upload content here. To manage the same, we have come up with a set of in-house rules. This is to prevent the odds of misalignment of interest between the two concerned parties.
              </p>
              <p className="mb-4">
                Another benefit that these in-house rules bring into the picture is that they ensure that no material that does not conform to our terms & conditions is present on the website. 
              </p>
              <p className="mb-4">
                Unless a visitor holds prior written consent issued by the company, he may not upload, republish, create derivative works from, or reproduce any content over the website. However, a visitor holds permission to download any material available for download over the website. But, these too are for home use only and not to meet any commercial purposes. All other notices in the content including copyright are to be left intact in this case. Herein, all mentions of Trip Tortoise are direct references to Trip Tortoise Holidays Pvt Ltd.
              </p>

              <h3 className="text-xl font-semibold mb-4">For Local Guides/Vendors/Tour Suppliers/Trip Tortoise agents/Partners:</h3>
              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li className="mb-2">
                  The content you upload should be 100% unique and plagiarism-free. In case your website has the same itinerary as ours, it is advisable to rewrite the content to change the verbatim but maintain the meaning. Please contact us for the assistance of content writers in all events that you feel the requirement.
                </li>
                <li className="mb-2">
                  If you load any information on our website, please note that you should be the one who has conducted the tour. If you display any information on Trip Tortoise, hold full rights to this information. Do not load any tour information if you have outsourced the tour to a third party. Load content only if you have taken the sole responsibility for being the party who has conducted the tour.
                </li>
                <li className="mb-2">
                  If you upload any media on our website, you should hold the full rights for the same. This covers marketing material, slides, pictures, and videos. We can then use this information without the need to share any credits.
                </li>
                <li className="mb-2">
                  Rule 3 implies that you hold the entire and sole copyright for any information that you upload. If something does not belong to your organization or yourself, and you do not hold sole ownership of it, please do not upload it. We prohibit you from using anything under the Creative Commons License. In case we feel that any violation of rules has taken place, which the general public or company officials indicate to us, we will remove the infringing experience or tour from the website. Ultimately, we will ban you from being a supplier for Trip Tortoise.
                </li>
                <li className="mb-2">
                  Any mismatch between uploaded content and media is a bannable offense. If we see that a supplier shares inaccurate information to make a tour or experience more attractive, the experience/tour will be removed and the supplier banned.
                </li>
                <li className="mb-2">
                  If we come across any true claims, we will pass your details to the copyright claimer. Our decision on the matter will be final and abiding, but we will decide following a thorough analysis.
                </li>
                <li className="mb-2">
                  If a copyright violation is reported by a supplier, appropriate action will be taken within 3 business days.
                </li>
                <li className="mb-2">
                  If you submit a listing on the website, you permit its listing in the marketplace or any other company website. You also permit the use of listing by the company for promotional purposes.
                </li>
                <li className="mb-2">
                  In case you upload any textual content of Trip Tortoise, then for the first six months after the tour goes Live, you may not load or copy this content on any other website. This is not like posing a restriction on you for using any other marketplace or website. However, do not duplicate this content on any other marketplace or website for the first six months after the tour goes Live.
                </li>
                <li className="mb-2">
                  If you provide the details of any tour or activity that your organization or you conduct, you accept full responsibility for copyright infringement issues that take place associated with that activity or tour. Even as we do a few random checks on our part, the final responsibility falls on you for the materials you provide.
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-4">For Copyright Claimants:</h3>
              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li className="mb-2">
                  If you feel that a copyright infringement has taken place, please connect with us via email. In the email, please share detailed information about which experience or tour is in infringement of copyrights. You also need to tell us about what content on the page is violating the copyright. Besides, you also need to submit proof of your copyright. Include proof that specifies that you are the owner of the violating material.
                </li>
                <li className="mb-2">
                  If any incident of copyright infringement is reported, we send the copyright claim along with all related details to the vendor. Our team will now follow up with the vendor within seven business days. This phase could extend to 14 days in some cases. In case the vendor does not respond to the query within this time, we can safely assume the validity of the claimant's claim. The experience or tour will now be removed from our website.
                  Similarly, if the vendor is not able to furnish a conclusive reply or reinstate his ownership of material via the means of providing proof, it will understood to be a violation of copyright laws. In this event, the tour and experience with the infringing material will be removed from the website and the vendor banned from Trip Tortoise. The claimant will then be connected with the vendor to take the legal matter ahead.
                </li>
                <li className="mb-2">
                  Please share the following information to make it easier for us to address your concerns.
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>If you come across any infringing content or image that you wish to have removed from our website, you need to share the exact permanent URL of the page for the page that contains the material. Further, you need to inform us which exactly is the infringing material.</li>
                    <li>Share sufficient information that lets us contact you. Your email address should be a must here. You may also want to share with us your contact number.</li>
                    <li>Share the following information that details your claim to ownership of the copyright in the allegedly infringing material:
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Proof of copyright in the concerned text or image. This is proof of registration of the image under the DMCA or absent such registration.</li>
                        <li>A detailed description of where the photograph was taken, by whom, and what or who is the subject of the image.</li>
                        <li>Evidence which supports the claim that you hold the image's copyright.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="mb-2">
                  If the complainant is unable to prove the ownership of the copyright of the image, we won't be able to remove the image from our website.
                </li>
                <li className="mb-2">
                  Trip Tortoise takes all claims seriously. Any intentional misrepresentation of facts or false claims is liable to invite legal action.
                </li>
                <li className="mb-2">
                  Any content submitted becomes the property of Trip Tortoise to do as we wish.
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-4">Images Terms of Use:</h3>
              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li className="mb-2">
                  The following types of images may not be uploaded on the website.
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>A work that uses purchased or free components from any other source while you do not hold the license to do so.</li>
                    <li>A work that uses in part or whole of a government or military property.</li>
                    <li>A work that includes a photograph or image of a private location unless you have express permission to do so, which you can produce on demand.</li>
                    <li>A work that includes recognizable human features or a person, unless you have express permission to do so, which you can produce on demand.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  The only images permitted are the ones that:
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>The author created</li>
                    <li>Acquired or purchased under an appropriate license that allows use in an item for sale.</li>
                  </ul>
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-4">Please Note:</h3>
              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li className="mb-2">
                  Trip Tortoise Holidays Pvt Ltd is solely a marketplace for activities and tours. It takes no responsibility for any content uploaded on the website for experience, activities, and tour sections. A few of the guest posts on the blog are herein included. Instead, it is the uploader who owns the sole responsibility for the content he uploads. However, as a precautionary measure, we take confirmation from the supplier regarding whether he has shared original content and that the supplier is its sole owner.
                </li>
                <li className="mb-2">
                  Trip Tortoise reserves the right to delete any content from the website at any time defined by its discretion. The company's decision over the matter is final and abiding.
                </li>
                <li className="mb-2">
                  As a safeguard against all piracy issues, the content used will be watermarked.
                </li>
                <li className="mb-2">
                  With the company being registered in Kolkata, all legal issues will be addressed in the jurisdiction of Kolkata. The issues associated with copyright violations are herein covered.
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>The company will have the final say on the amount of proof that can be considered to be substantial.</li>
                    <li>A few of the leniencies may be looked into if the circumstances had not been foreseeable.</li>
                    <li>The concerned information could be in any format, such as content, pictures, videos, and media.</li>
                    <li>If a supplier indulges in furnishing intentionally false or misleading claims, he is misusing the company's resources. Please feel free to contact us for more information about what falls in this category.</li>
                  </ul>
                </li>
              </ol>

              <p className="mb-4 font-semibold">Contact:</p>
              <p className="mb-4">
                [Your Company Address], Kolkata, West Bengal [PIN Code]
              </p>
            </section>
          </main>
        </div>
      </>
    </>
  );
};

export default Copyright;