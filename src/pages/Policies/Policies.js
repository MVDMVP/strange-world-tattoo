import React from "react";
import './Policies.css';

const Policies = () => {
  return(
    <div className="category">
        <div className="head"> <h3>POLICIES & EXEMPTIONS</h3> </div>
        
        <br /><p>TODO: piercings</p><br />

        <div className="group">
          <div className="fill">
            <h4>PRICING, DEPOSITS & REFUNDS</h4>
            <p>Please use our booking page or email your artist directly for an estimate for what you are looking to get</p>
            <p>Final cost of tattoos are affected by many factors; most commonly:</p>
            <ul className="list">
              <li>tattoo size</li>
              <li>tattoo design complexity</li>
              <li>color usage and complexity</li>
              <li>availability of and demand for artist</li>
            </ul>
            <br />
            <p>Deposits are required to book tattoo appointments, and are typically requested once a date has been agreed upon by both artist and client. Standard pricing below:</p>
            <ul className="list">
              <li>small - medium : $50+tax | $56.50</li>
              <li>large (full day) : $100+tax | $113.00</li>
              <li>extra large (multi-day): $250+tax | $282.50</li>
            </ul>
            <p>Your deposit value is deducted from the total cost of your appointment upon its completion</p>
            <br />
            <p>Deposits are non-refundable to ensure that the artist is compensated for their time and effort in preparing for the appointment.</p>
            <p>The deposit is used to cover potential lost profit if the appointment cannot be made or needs to be rescheduled, as it may be challenging for the artist to fill the open appointment slot in time.</p>
          </div>
        </div>

        <div className="group">
          <div className="fill">
            <h4>CANCELLATIONS, MISSED / LATE APPOINTMENTS & RESCHEDULING</h4>
            <p>We request 72 hours / 3 days notice regarding any cancellations or reschedule requests</p>
            <p>Given appropriate notice; we are happy to accommodate one rescheduling request</p>
            <br />
            <p>Your deposit may be <strong>forfeited</strong> if any of the following occur:</p>
            <ul className="list">
              <li>you miss an appointment</li>
              <li>you cancel/reschedule within 72 hours / 3 days of your appointment</li>
              <li>you need to reschedule after having already rescheduled once</li>
              <li>you request changes to your tattoo that cannot be accommodated within 72 hours / 3 days of your appointment</li>
            </ul>
            <p>Once a deposit has been forfeited - a new deposit would be required to book again</p>
            <br />
            <p>Late appointments are handled on a case-by-case basis, which means there are two possible outcomes: either the appointment will proceed as scheduled, or it will be rescheduled.</p>
            <p>In the case of rescheduling, it may or may not require a new deposit.</p>
          </div>
        </div>

        <div className="group">
          <div className="fill">
            <h4>TOUCHUPS</h4>
            <p>Policies towards cancellations, missed appointments, rescheduling also apply to complimentary touchups</p>
            <p>Complimentary touchups are only valid within 6 months of tattoo date</p>
            <p>Tattoos in the following locations do not quality for a complimentary touchup:</p>
            <ul className="list">
              <li>Hands</li>
              <li>Fingers</li>
              <li>Feet</li>
              <li>Elbows</li>
              <li>Knees</li>
            </ul>
            <p>Complimentary touchups may be void at the artists discretion</p>
          </div>
        </div>
        
        <div className="group">
          <div className="fill">
            <h4>CONSENT</h4>
            <p>You can fill out the consent waivers for both tattooing and piercing appointments at your convenience or upon your arrival for the appointment</p>            
            <p>Bring photo ID with you for your appointment, as we will be taking a photocopy to validate the consent wavier</p>
            <p>You can access these waivers under MORE - WAIVERS</p>
            <p>If you are under the age of 18 on the date of your appointment; the following additional requirements must be fulfilled beforehand:</p>
            <ul className="list">
              <li>A parent/guardian must accompany you to the shop to sign a additional consent waivers</li>
              <li>The shop will need to make photocopies of <strong>both</strong> your parent/guardian's and your photo ID</li>
            </ul>
            <p>Consent for all services can be completed anytime prior to the appointment or at the start of the appointment</p>
          </div>
        </div>
      </div>
  );

};