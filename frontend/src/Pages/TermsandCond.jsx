
import React, { useState } from "react";
import TNavbar from "../Components/TransparentNavbar";
import terms from "../assets/terms.jpg"; // Adjust the path to your terms image
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "DEFINITIONS",
      content: (
        <>
          <p className="mb-4">1.1) Wherever you find We, Us, and Our in these Terms and Conditions, they refer to Mendora Travels.</p>
          <p className="mb-4">1.2) Similarly, wherever You and Your are written, it refers to the entity that enters into a contract with Mendora Travels.</p>
          <p className="mb-4">1.3) Infant is anyone below 2 years of age while Child refers to individuals between 2 and 12 years of age.</p>
          <p className="mb-4">1.4) When we write Contractor or Supplier, we are referring to an individual who supplies any infrastructural facility. This includes but is not limited to hotel management, caterers, airlines, restaurants, and places of entertainment like showrooms, theme parks, art galleries, museums, etc. Similarly, the entities that provide services to clients include coach, cruise, ferry, railway, and shipping companies.</p>
          <p className="mb-4">1.5) Tour refers to any inclusive arrangement that you book. This could be a holiday, package, or trip.</p>
          <p className="mb-4">1.6) Tour Cost refers to the actual and total tour cost, as mentioned online or in brochures or Booking forms. It includes other payments, such as surcharges and taxes, that are payable to the Company by the client.</p>
          <p className="mb-4">1.7) A brochure primarily refers to a printed brochure. It may also refer to a website, leaflets, itinerary, Price Grid, or booklet.</p>
          <p className="mb-4">1.8) When we say Written or in writing, it could refer to any correspondence which may have been received by post or by email. This correspondence could be between Mendora Travels and you or could be in the form of a website, booklet, leaflet, itinerary, or a relevant brochure.</p>
        </>
      ),
    },
    {
      title: "BROCHURE/WEBSITE ACCURACY DISCLAIMER",
      content: (
        <>
          <p className="mb-4">2.1) All information that you come across on the website and brochure has been input based on the information available at the time of publication. We accept no responsibility for any typing or printing errors.</p>
          <p className="mb-4">2.2) It is possible that the brochure was printed much earlier before you made a booking. We reserve the right to change any information from the brochure or website.</p>
          <p className="mb-4">2.3) We reserve all rights to change any information available in the brochure or website. This could be before or after you book the tour. If you seek to confirm any of this information, you may do so by contacting us.</p>
          <p className="mb-4">2.4) The odds of the itinerary being changed cannot be overlooked and the same goes for services and products. This covers but is not limited to properties, sightseeing, and meals. These are available merely for reference and the differences from the actual cannot be overlooked. You may have to book hotels that are far flung from the central location.</p>
        </>
      ),
    },
    {
      title: "CHANGES IN THE ITINERARY",
      content: (
        <>
          <p className="mb-4">3.1) We reserve all rights to modify, change, amend, or alter tour itineraries or packages. This may happen before or during the tour. It will be our priority to promptly notify you about any such events or changes in advance. This could take place when you book the tour or before the tour begins. If these changes take place while the tour is underway, our local representatives will inform you about these changes and expect your full cooperation in accepting these circumstantial changes. Correspondingly, we will entertain no grievances concerning any changes in services or itinerary that we were constrained to make for tour clients before or after the tour.</p>
          <p className="mb-4">3.2) Please note that promotional offers can have different terms and conditions. This will be in addition to these general terms and conditions. Herein, specific requirements associated with booking deposits, payment deadlines, and modes of payment will be available. They will be applicable over and above the standard terms. It shall be deemed and construed that all tour clients named in the Booking Form have authorized the travel agent to sign the booking documents on their behalf and are assuming full responsibility for the booking.</p>
          <p className="mb-4">3.3) When we consider the factors that have likely led to the changes, we have to understand that a few of them could be beyond our control and jurisdiction. They could be factors such as forces of nature, fairs, strikes, festivals, events, sports, weather conditions, overbooking of flights or hotels, traffic problems, re-routing or cancellation of railways or flights, or restricted entry or closure of sightseeing places. In general, we do not schedule our tours on dates when mega events such as the Olympics, Exhibitions, or Fairs are scheduled. At such times, the hotels are fully booked. In case your tour is booked for such dates, you may have to live in alternative hotels or hotels in other cities.</p>
          <p className="mb-4">3.4) As defined by an airline’s requirements, these could be a change in the points of entry and exit in a country. Keeping the departure date in mind, we could operate multiple coaches. We amend itineraries or reverse directions to add convenience.</p>
          <p className="mb-4">3.5) Some other factors that could result in a change in itinerary are conditions, defaults, inactions, or actions on tour clients' behalf.</p>
          <p className="mb-4">3.6) If any changes take place in the itinerary, we are still not liable to refund or pay any damages or compensation. However, if we feel that the fresh arrangements are materially superior to the ones that were earlier a part of the itinerary, we may charge you extra at the time of booking or when the tour is ongoing.</p>
        </>
      ),
    },
    {
      title: "BOOKING A TOUR",
      content: (
        <>
          <p className="mb-4">4.1) We endorse going through and understanding the contents shared in the Tour Brochure/website itinerary, Price Grid, the ‘Terms and Conditions’, and the related documents. This is all a part of your contract with us.</p>
          <p className="mb-4">4.2) You may be required to sign the Booking Form and related documents as we deem appropriate. This includes but is not limited to Price Grid, rules, and Terms & Conditions.</p>
          <p className="mb-4">4.3) A binding contract comes into existence when Booking Documents are executed and the prescribed non-refundable interest-free booking amount is paid.</p>
          <p className="mb-4">4.4) Before you make a booking, we advise you to ensure that you hold all genuine and valid documents and will be able to produce them on request. This lets you apply for insurance, visa, etc.</p>
          <p className="mb-4">4.5) If you book through us any service, travel, or tour run by 3P operators, their terms and conditions will apply to you besides these terms and conditions. This includes but is not limited to payment refund, cancellation, and schedule.</p>
          <p className="mb-4">4.6) If only some (but not all) people listed as travelers on the booking form sign the documents, then, it will be assumed that the ones who signed were permitted by the others to sign on their behalf. The people who signed will be fully responsible for the entire group. It will also be legally treated as if everyone in the group has signed the documents.</p>
          <p className="mb-4">4.7) Suppose that travelers have made a booking through a travel agent. When such a travel agent signs the Booking Document, we will assume that this signature is for and on behalf of all travelers. Travelers listed in the Booking Form assume full responsibility for the same. It shall be deemed and construed that all such tour clients have duly authorized the said travel agent to sign the Booking Documents on their behalf.</p>
          <p className="mb-4">4.8) Please note that while we do not receive the signed booking documents, there is no tour contract between tour clients and us. Another precondition is us receiving the specified non-refundable interest-free booking amount.</p>
          <p className="mb-4">4.9) It is according to the pre-defined payment schedule that full payment is received. In case we do not receive the payment as defined by the schedule, we reserve the right to cancel the booking with consequent forfeiture of the booking amount. We may also apply cancellation charges as the brochure mentions.</p>
          <p className="mb-4">4.10) Any payment made to the travel agent will not be considered as payment made to the company while we do not receive this payment in our account.</p>
        </>
      ),
    },
    {
      title: "CANCELLATIONS",
      content: (
        <>
          <p className="mb-4">5.1) We withhold all rights to cancel or revise a tour that you booked and are not answerable to anyone for conveying the reasons for the same. If this does happen, it is because of circumstances beyond our control or jurisdiction. However, in all such events, we will offer alternate tours or tour dates for you. Alternatively, an option available before you is to travel solo and not as a part of the original group.</p>
          <p className="mb-4">5.2) If the cancellation of your booking is what you intend, please inform us in writing. We can only act on the receipt of your written intimation. Such notification shall be deemed to have been given to us only on the date of the receipt of your letter. If you have any claims to make, please make them directly from your insurance company.</p>
          <p className="mb-4">5.3) Irrespective of the factors that led to the cancellation, you will have to bear the cancellation charges as mentioned below. You understand and acknowledge that these charges are a genuine pre-estimate of the damages that we will suffer on account of cancellation. In legal terms, these damages are known as liquidated damages. Without furnishing proof of actual damages, these damages are payable. You agree to not demand proof of actual damages or dispute such deductions.</p>
          <p className="mb-4">Booking Amount is 100% Non-Refundable.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>60 days or more before the departure of the Tour – 30% of the tour cost.</li>
            <li>59-40 days before the departure of the Tour – 40% of the tour cost.</li>
            <li>39-31 days before the departure of the Tour – 70% of the tour cost.</li>
            <li>30 days or less before departure of the Tour – 100% of the tour cost.</li>
            <li>OR A ‘No-show’ on the tour – 100% of Tour Cost.</li>
          </ul>
          <p className="mb-4">However, even if you do not issue a cancellation notice, you shall be deemed to have canceled your tour in the following cases. The above Cancellation Charges are only for Ground Services /Land Package (Hotels – Transfers – Sightseeing). When we consider Flight ticket cancellation, this will be based on Airline's discretion. Refunds for the same will be issued based on Airline's Policy & Timeline.</p>
          <p className="mb-4">5.4) We at Mendora Travels and our allied agents do not accept any responsibility in case your Visa is rejected. In this case, Terms and Conditions will be applicable as per policy.</p>
          <p className="mb-4">5.5) If you do not make timely payment of tour costs or commit any other default associated with your booking, we may treat such failure or default as canceling the booking. In this case, the cancellation charges will be computed concerning the date on which we issue a notice of cancellation.</p>
          <p className="mb-4">5.6) If on your failure of payment or other default, no notice of cancellation is issued by us but your payment or default remains outstanding on the date of departure, the booking shall be deemed to have been canceled by you without any advance notice, inviting the highest cancellation charge. You expressly agree to abide by the foregoing terms and conditions.</p>
          <p className="mb-4">5.7) If you intend to change or amend your booking, please communicate your request to us in writing. These requests can be accepted but it is subject to availability. We’ll inform you about the related charges before we proceed with them.</p>
        </>
      ),
    },
    {
      title: "REFUND and R.O.E",
      content: (
        <>
          <p className="mb-4">6.1) Refunds (If any) for Changes and/or cancellations will be paid directly to you. This is true for all bookings made directly at the company’s office or website. The processing of refunds takes at least 30 working days.</p>
          <p className="mb-4">6.2) For all unutilized or partially utilized services, no refunds are payable. This includes Airline Tickets, Entrance Fees, Meals, Hotel Sightseeing, and Optional Tours. The refund for the foreign exchange component of the tour will be refunded in INR only and will be at the current day's rate of exchange of the company.</p>
          <p className="mb-4">6.3) All third Party refunds, will take 30 to 90 working days to be issued. This includes airlines, overseas suppliers, and cruise. For the same relevant supporting documents need to be provided to the company. Issuance of third-party refunds is up to the discretion of the concerned company and Mendora Travels holds no liability towards the same.</p>
        </>
      ),
    },
    {
      title: "OUR EXTENT OF SERVICES",
      content: (
        <>
          <p className="mb-4">7.1) We are merely travel and holiday organizers. We closely go through, inspect, and select the services that are to be provided for you. Please note that we do not own, control, or operate any shipping company, coach company, coach, airline, hotel, restaurant, transport, kitchen caravan, or any related facility/provider engaged to provide services for you for the duration of the tour. It hence becomes noteworthy that:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>You need to adhere to the rules & regulations besides the conditions posed by each service provider.</li>
            <li>If you cause any damage or injury that affects the service provider, you will be liable to the entity. If the service provider recovers any amount from us for the same, we will separately charge you for it.</li>
            <li>We may not be held liable for any damage, loss, death, deficiency, or delay caused by the fault of these service providers.</li>
          </ol>
        </>
      ),
    },
    {
      title: "MEALS AND SPECIAL REQUESTS",
      content: (
        <>
          <p className="mb-4">8.1) For meals when touring, pre-set meals are defined and information associated with the same is provided in brochures. We cannot provide special meals like airlines provide nor do we provide them.</p>
          <p className="mb-4">8.2) We provide special meals for clients based on their preferences, to the extent mentioned in the brochure. However, if circumstances demand, we may be compelled to change the meal arrangement.</p>
          <p className="mb-4">8.3) If for any reason, the client misses any meal including breakfast that the company provides for him, he may not make any claims for the missed meal/breakfast.</p>
          <p className="mb-4">8.4) Special requests for diet consideration and room allocation on tour, cruise, or flight need to be made in writing at the time of booking. We will be delighted to entertain such requests but it is subject to availability. We may not be held liable for significant loss or claims if we are unable to process these requests for the want of availability.</p>
        </>
      ),
    },
    {
      title: "ACCOMMODATION",
      content: (
        <>
          <p className="mb-4">9.1) We select convenient and comfortable hotels that minimize travel time but maximize the potential for sightseeing.</p>
          <p className="mb-4">9.2) Your baggage is your responsibility at all times and under all circumstances. We may not be held liable for the loss of these items from hotel premises, airport, coach, place of visit, etc. A few of the hotels offer facilities of safe deposit lockers, but you may avail of this at your own risk and cost. We may not be held liable for any loss of such nature.</p>
          <p className="mb-4">9.3) In European hotels, a few modern facilities are provided like attached toilets with showers/bathtubs. However, room service facilities are not available in all cases.</p>
          <p className="mb-4">9.4) Adjoining rooms / non-smoking rooms / interconnecting rooms/rooms on the same floor etc. may not be available in all cases.</p>
          <p className="mb-4">9.5) The rooms are going to be relatively small and to ensure your comfort we will recommend not accommodating over 3 people in a room. The size of triple accommodation rooms is frequently comparable to that of a double accommodation room with a rollaway cot added to the twin room for the night.</p>
          <p className="mb-4">9.6) In a double room, you’ll either come across two separate beds or a single queen-sized bed. If you want a room with a queen-sized bed, you may have to request the same and it will be provided subject to availability. Most European hotel rooms are twin-bedded. If a room with a queen-sized bed is not available, a twin-bedded room will be given.</p>
          <p className="mb-4">9.7) A hotel room that you are allocated will either be the same as displayed in the itinerary or of the same category. When a city holds conventions or trade fairs, hotel rooms are sometimes booked for two years. In light of this fact, you may have to put up at hotels far flung from the city. Itineraries may have to be amended or altered.</p>
          <p className="mb-4">9.8) Facilities like paid TV channels, mini bar, and telephone are not complimentary. If you intend to use these facilities, you'll be paying for them separately as tour costs do not include these charges. You'll also have to stick to the check-in and checkout times that the hotels have defined.</p>
          <p className="mb-4">9.9) Any damages caused to the place of visit/coach/hotel rooms during your stay will be payable by you and we may not be held accountable for the same.</p>
          <p className="mb-4">9.10) We may not be held accountable for the sudden disruption of amenities such as internet or telephone services. We also shun all responsibility for facilities being provided or not provided in hotel premises/bathroom/room.</p>
          <p className="mb-4">9.11) Actions of hotel staff do not come under the direct purview of the company and we will hence not be responsible for the same.</p>
        </>
      ),
    },
    {
      title: "COACH and SEATING",
      content: (
        <>
          <p className="mb-4">10.1) In most cases, we go for air-conditioned or air-cooled coaches. There could, however, be cases where air conditioning ceases to operate at full efficiency or does not operate at all. We may not be held liable for any malfunctioning or defect in air conditioning. We also do not accept any responsibility for the conduct of the coach driver.</p>
          <p className="mb-4">10.2) Seating will be on a rotation basis and our tour professionals will assist you with the same.</p>
          <p className="mb-4">10.3) We do not accept any responsibility for valuable items left behind by coaches.</p>
          <p className="mb-4">10.4) Restrictions associated with maximum driving hours per day and week bind coach drivers and itineraries are accordingly planned. It hence becomes a must for you to go by the schedules, timings, and itineraries. This puts you in a position to derive the maximum value from the services you are entitled to or the services that are being provided. If due to anyone, if the same gets interrupted, there will be no responsibility from our side, and shall not be liable for giving any kind of refund.</p>
          <p className="mb-4">10.5) Please note that snacks, consumption of alcoholic beverages, and smoking are strictly prohibited on coaches.</p>
          <p className="mb-4">10.6) Damage to the coach in any form by you is payable to the bus company.</p>
        </>
      ),
    },
    {
      title: "AIRLINES",
      content: (
        <>
          <p className="mb-4">11.1) In no circumstances whatsoever are we liable if an airline happens to lose your baggage or fails to serve your preferred meal when you travel. We also do not accept responsibility for matters such as an airline denying boarding even though you have confirmed tickets, the quality of meals they offer, flight delays, changes in flight schedules, routing, missing flights, etc.</p>
          <p className="mb-4">11.2) If the client books an airline and for any reason beyond our jurisdiction, he is not permitted to board the airline, we may not be held responsible for the same and the client may make no claims against us.</p>
          <p className="mb-4">11.3) The client will need to pay Airport taxes / Airport Development fees, as applicable, over & above the Tour Cost in case there is a price rise after printing the brochure. All the booking/cancellation/change of the airline ticket and the travel on such airline ticket will be subject to the terms and conditions of the respective Airlines. The same may be provided to the client by us upon request, subject to availability.</p>
          <p className="mb-4">11.4) Concerning weight restrictions, all airlines have their own dynamic set of regulations and rules. Please look into the updated baggage rules of individual airlines. The correct details will be available with our sales staff and they will furnish upon request.</p>
          <p className="mb-4">11.5) In case you are liable if defined by airline restrictions, temporary or otherwise, you are unable to carry any baggage or have to pay any extra charges. You shall be liable to pay all such charges directly to the airline. We are not liable for any loss or damage to baggage while it is in the custody of the airline.</p>
          <p className="mb-4">11.6) In case you are booked on a group fare ticket, please note that seat allotment will be made only when you physically report at the airport check-in counter. It is recommendable that at least 3-4 hours before departure, you report at the counter. Seat allocation is a matter of airlines' discretion and availability of seats is not in the control of Mendora Travels. In case you do not get seats together or do not get your preferred seats, we may not be held liable for the same.</p>
          <p className="mb-4">11.7) If you plan to return after the tour officially ends (for example, staying back a few more days on your own), then it is your responsibility to reconfirm your flight tickets at least 72 hours (3 days) before your return flight.</p>
          <p className="mb-4">11.8) If the concerned airline cancels or modifies the flight, leading to hampering or modification of Ground Service Arrangement, Mendora Travels may not be held responsible and will not be liable to compensate the guest by any means. There will be no refund for unused services. Any additional Transfers, Hotels, or sightseeing can be arranged only on fresh payment by the guest.</p>
          <p className="mb-4">11.9) If the guest is not able to arrive on the date of actual arrival, Mendora Travels can mark the Booking as a no-show and withhold the right not to offer any further services.</p>
        </>
      ),
    },
    {
      title: "DEVIATIONS",
      content: (
        <>
          <p className="mb-4">12.1) If you wish to travel in advance i.e., before the published departure date as mentioned in the brochure, or like to come back on a later date after the tour ends, there will be an additional charge as per the airline that will be applicable (subject to charges applicable as per airline) which will be advised to you by your sales staff /travel agent. Kindly note that the deviation will be actioned only 30 days prior to the departure date.</p>
          <p className="mb-4">12.2) The request for such a deviations should be given in writing to the company at the time of prior to booking as these requests are applicable subject to availability.</p>
        </>
      ),
    },
    {
      title: "CURRENCY AND TRAVELLERS’ CHEQUES",
      content: (
        <>
          <p className="mb-4">13.1) Traveler's cheques are among the safest methods to carry money and protect it from getting lost or stolen. They can be encashed easily for a small competitive service fee. They can also be replaced if lost or stolen but for the same to materialize, you need to have the cheque numbers along with counterfoil. It's advised to carry your share of spending money partly in traveler’s form and partly in it’s a form of Travel currency. A card makes a card gives you access to cash anytime at over 24/50 VISA/VISA PLUS ATMs worldwide in a major denomination of your currency. 25 merchant visa is accepted globally.</p>
        </>
      ),
    },
    {
      title: "PAYMENTS",
      content: (
        <>
          <p className="mb-4">14.1) To compensate for tour costs, please make payment as per the time frame and procedure mentioned below. Payments made within 15 days before the tour departure date need to be paid in cash or by a Demand Draft.</p>
          <p className="mb-4">14.2) A PAN Card copy is required when making cash payments equivalent to Rs.25,000/- or more. Holding a PAN Card and Aadhar Card is a must for making international trips and both should be interlinked.</p>
        </>
      ),
    },
    {
      title: "HEALTH AND INSURANCE",
      content: (
        <>
          <p className="mb-4">15.1) If a traveler is inflicted by a condition that prevents him from enjoying and pursuing the tour to the fullest, it is his duty to inform the company in advance. We recommend that when selecting tours, travelers keep their health condition in mind.</p>
          <p className="mb-4">15.2) Before departure, the Company reserves the right to ask the Traveller to provide written certification of his medical fitness. In the event of not disclosing a medical condition, the Company will not be liable to provide any assistance or money back.</p>
          <p className="mb-4">15.3) It is a must for a Traveler to obtain valid travel/health insurance before the tour begins. Settlement of the claims will entirely be at the discretion of the insurance company.</p>
          <p className="mb-4">15.4) Checking the insurance policy’s correctness and accuracy is the tour participant’s responsibility.</p>
        </>
      ),
    },
    {
      title: "PRIVACY OF INFORMATION",
      content: (
        <>
          <p className="mb-4">16.1) You can trust us to keep all information shared with us as confidential. What we share with service providers like airlines and hotels is only the necessary information, as while the tour lasts, these entities will be rendering services for you. The only cases where we are compelled to share the information disclosed by you is when the same is required by the law or a court order. We need to entertain all queries by statuary or government agencies that exercise regulatory authority over our organization.</p>
        </>
      ),
    },
    {
      title: "COMMUNICATION",
      content: (
        <>
          <p className="mb-4">17.1) Any communication will be deemed to have been communicated to and received by the Traveller if he is contacted at his shared contact details, like fax number, telephone number, or cell phone number. There are two ways to share these contact details. One is by sharing in the Booking Form and the second is to disclose these details to a booking agent who makes your tour booking. We do not accept liability if wrong contact details are furnished to us, either directly by the Traveler or indirectly, through a Travel Agent.</p>
        </>
      ),
    },
    {
      title: "SOME OTHER CONDITIONS FOR TRAVEL",
      content: (
        <>
          <p className="mb-4">18.1) You are obliged to stick to the tour itinerary as we have defined and return to India accordingly. We shall issue no refunds if you do not join the touring party at the designated time, join at a later point, or leave the tour early. Please note that it is the traveler’s responsibility to reach the spot where the tour is to begin at the right time and date and register with our representative.</p>
          <p className="mb-4">18.2) In the eventuality that the traveler is unable to reach the spot where the tour begins, for any reason like loss of travel documents or loss of baggage, the booking shall still be treated as a “no show” and 100% cancellation charges will be levied.</p>
        </>
      ),
    },
  ];

  const otherTermsSections = [
    {
      title: "Important Information",
      content: (
        <>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>International Check-Out noon & Check-In 14:00 hrs</li>
            <li>Domestic Hotel Policies: hotel policies define the check-in and check-out timings and they vary by the state. In the Andamans, Check-in timings are 10:00 AM while check-out timings are 8:30 AM. If we consider northeastern cities, check-in timings are 14:00 hrs and check-out timings are 11:00 hrs.</li>
            <li>We are never in a position to guarantee special requests and those for late check-out and early check-in. This is subject to hotel discretion and may be chargeable.</li>
            <li>When you check in, a hotel may charge you a refundable Security Deposit that is to be returned on check out. These refunds are issued only if no damages take place or no foods or drinks are consumed from the minibar.</li>
            <li>Concerning the case of shared or joint tours: 5 minutes before the pickup time, please be found waiting in the concerned lobby or the pickup spot. A tour, once missed cannot be rearranged.</li>
            <li>Private Transfers [Airport]: Private Transfers take place on point to point basis. If you place any special requests concerning stoppages or tour extensions, they will be chargeable.</li>
            <li>At times, the traffic causes pickups to be delayed and this primarily happens in Vietnam & Thailand. These delays are unavoidable and at times extend for as long as 30 minutes. However, we request you to be in the lobby on time and wait. A driver who does not find the guest in the lobby will leave and the transportation may not be rearranged under any circumstances.</li>
            <li>All vegetarians need to inform the representative or the guide while the tour lasts because veg options are limited.</li>
            <li>If you do not hold a valid government ID like an Aadhar card or Voter ID Card, we will not permit boarding for local or international travel alike. If you seek to travel internationally, the passport needs to be valid for at least 6 months before departure.</li>
            <li>We share the hotel's name with travelers in a bid to prevent any escalation. However, checking hotel details online is guests' responsibility. Concerning hotels, we do not encourage any escalation on the ground. These hotels are budget-friendly and have good reviews. At times, they become the top choice based on guests' inclusions.</li>
            <li>A guest has to bear the additional food and accommodation costs caused by delayed travel.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Payment & Cancellation",
      content: (
        <>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Full Payment: At the time when a tour begins, the entire trip cost needs to be settled.</li>
            <li>Pending Payments: If you do not complete payments, it may result in trip cancellation.</li>
            <li>Non-Refundable Booking Amount: In the event of the guest canceling the trip, the booking amount is non-refundable. This is determined by calculating the initial costs incurred. Covered herein are no refundable payments to different suppliers, like hotels and ferry tickets.</li>
            <li>If you make a cancellation within 30 days before the trip starts, a 100% fee is deducted. However, for cancellations made between 30 to 45 days, a 50% fee is deducted. For those made between 45 to 60 days, a 25% fee is deducted.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Refund Policy",
      content: (
        <>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>No Refunds: For any inclusions that the client does not avail of, no refunds will be made.</li>
            <li>Luggage Responsibility: Travelers need to take care of their belongings and luggage.</li>
            <li>Management Liability: If any of your belongings are damaged or go missing while the tour lasts, we do not accept any responsibility for the same.</li>
            <li>In all unforeseen events including adverse weather, protests, ferry cancellations, and landslides, we will diligently come up with alternative trips or plans. Cancellation of certain activities is a possibility here, but we do our best to provide the finest alternatives.</li>
            <li>In the event of premature termination of the trip resulting from unforeseen circumstances or natural calamities like rain earthquake, high tide resulting in ferry cancellation, strikes, or landslides, no refunds will be issued. When such situations disrupt a tour, customers need to make their additional expenses for matters like hotels and transfers. The company bears no responsibility for the same.</li>
            <li>GST charges and TCS are non-refundable.</li>
            <li>Non-Transferable Bookings: The transfer of bookings is strictly prohibited.</li>
          </ul>
        </>
      ),
    },
    {
      title: "AC Usage",
      content: (
        <>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>In hilly areas, air conditioning will be switched off.</li>
            <li>Along dangerous or uneven roads, the driver will exercise his discretion to turn off the AC for ease of travel and safety.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Departure Protocol",
      content: (
        <>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Fixed Departure Time: The departure time is stated to be fixed.</li>
            <li>Status Update: Travelers must contact their Trip Coordinators to update their status.</li>
            <li>Reporting Time: Report at the pickup point 30 minutes before the scheduled departure.</li>
            <li>Pick Up & Drop Point will always be the airport and no other pick-up and drop-off point will be acknowledged.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Health & Safety",
      content: (
        <>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Drinking & Smoking Prohibited: Keeping safety and health reasons in mind, drinking & smoking are strictly prohibited.</li>
            <li>Physically Demanding Activities: Tours may demand physically strenuous activities and participants are advised to be in good shape.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Liability Disclaimer",
      content: (
        <>
          <p className="mb-4">Mendora Travels is a modern travel community that arranges and organizes travel trips to the mountains. These activities involve the risk of accidents, bodily injury, loss of life, and financial repercussions. Neither Mendora Travels nor our affiliated agents or entities are responsible for these losses or any related damages whatsoever, including damage or loss to baggage or property, or loss of enjoyment.</p>
        </>
      ),
    },
    {
      title: "Conduct Guidelines",
      content: (
        <>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Misconduct Intolerance: No act of misconduct or indiscipline is tolerated.</li>
            <li>Mendora Travels's Right: Mendora Travels reserves the right to take appropriate action, including removal from the tour at the traveler's expense.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Delays and Alterations",
      content: (
        <>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Mendora Travels's Responsibility: Mendora Travels accepts no responsibility for alterations or delays in programs.</li>
            <li>Indirect Expenses: We accept no responsibility for indirectly incurred expenses caused by natural hazards, weather conditions, accidents, and ferry cancellations.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Injury/Illness and Evacuation",
      content: (
        <>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Participant's Health: In the event of illness or injury, external transport or evacuation services may have to be engaged.</li>
            <li>Additional Cost: All additional costs that arise need to be borne by the participant or his family member.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Insurance Policy",
      content: (
        <>
          <p className="mb-4">If any disputes happen to arise, they shall be exclusively subject to the jurisdiction of the courts at Kolkata (West Bengal, India).</p>
        </>
      ),
    },
    {
      title: "Meal Stops and Itinerary Changes",
      content: (
        <>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Predefined Stops: Lunch/Dinner stops at predefined places chosen by the Trip Captain or Driver.</li>
            <li>Itinerary Alterations: A host of factors could possibly alter the itinerary. They include road closure and driver's recommendations. Mendora Travels reserves the right to make all necessary changes to the schedule.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Accommodation Details",
      content: (
        <>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Accommodations or Similar Accommodations, Room Categories, Special Requests: In most northeastern regions, accommodations are available in the form of homestays and basic hotels, typically located in remote regions. It is not right to expect Wi-Fi, hot water, or 24/7 electricity here.</li>
            <li>We select hotels with standard rooms for our guests. But, when you travel as a large group, we might be compelled to put you up in two hotels. This becomes the case when one of the hotels does not have sufficient rooms. But in this case, all rooms might cease to be exactly similar.</li>
            <li>We’ll put in our best attempts to make these rooms similar, but please be understanding. All special requests like room preferences and early check-in are subject to what is available when you arrive. You’ll have to please cover the extra charges.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Triple Sharing Rooms",
      content: (
        <>
          <p className="mb-4">Extra Mattress: if it is a triple-sharing room that you go for, an extra mattress will be provided but not an extra bed. For detailed Terms and Conditions, please refer to our website <a href="https://www.mendoratravels.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.mendoratravels.com</a>.</p>
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Mendora Travels</title>
        <meta name="description" content="Read the Terms & Conditions for using Mendora Travels' website and booking services. Understand your rights, responsibilities, and our service policies." />
      </Helmet>
      <TNavbar />
      <div className="text-gray-800">
        {/* Banner */}
        <header
          className="sm:h-[80vh] h-[43vh] bg-cover bg-center flex items-center justify-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${terms})`,
          }}
        >
          <div className="bg-black bg-opacity-60 text-white p-4 sm:p-6 md:p-8 rounded-lg flex justify-center items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              TERMS AND CONDITIONS
            </h1>
          </div>
        </header>

        {/* Content */}
        <main className="mx-auto px-8 bg-white pt-12 pb-10 max-w-6xl">
          <section className="mb-10">
            <p className="mb-4">Updated at: 02/06/2025</p>
            <h2 className="text-2xl font-bold mb-4">GENERAL TERMS OF SERVICES:</h2>

            <p className="mb-4">
              AIRLINE CANCELLATION:<br />
              As per Airlines /Booking Agent Policy applicable during booking.
            </p>
            <p className="mb-4">
              General Information on few Major Airlines [It will not be same for the ticket booked for you]:
            </p>
            <p className="mb-4">
              Please read these terms and conditions carefully before submitting your booking request. We strongly advise that you retain a copy of these terms and conditions as well as a copy of the booking form for future reference.
            </p>

            <div className="space-y-2">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full cursor-pointer text-left py-4 flex justify-between items-center font-semibold text-lg"
                  >
                    <span>{section.title}</span>
                    <span>{openSection === index ? "−" : "+"}</span>
                  </button>
                  {openSection === index && (
                    <div className="pb-4 text-gray-700">{section.content}</div>
                  )}
                </div>
              ))}
            </div>

            <p className="mb-4 mt-6">
              For further/detailed terms and condition and definition refer us at Email us at <span className="text-blue-600 underline">support@mendoratravels.com</span>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">OTHER TERMS OF SERVICES:</h2>

          <div className="space-y-3">
              {otherTermsSections.map((section, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <div className="text-gray-700">{section.content}</div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TermsAndConditions;
