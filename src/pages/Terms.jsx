import './Legal.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last Updated: January 1, 2026</p>
        </div>
      </div>

      <div className="legal-content">
        <div className="container">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Playda mobile application, you accept and agree to be bound by 
              these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>
              Playda is a platform that connects users with padel court venues in the UAE. We facilitate 
              bookings, payments, and provide information about venues and their facilities.
            </p>
          </section>

          <section>
            <h2>3. User Accounts</h2>
            <h3>3.1 Registration</h3>
            <p>
              To make bookings, you must create an account by providing accurate and complete information. 
              You are responsible for maintaining the confidentiality of your account credentials.
            </p>

            <h3>3.2 Account Security</h3>
            <p>
              You are responsible for all activities that occur under your account. Notify us immediately 
              of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2>4. Bookings and Payments</h2>
            <h3>4.1 Booking Process</h3>
            <p>
              When you make a booking through Playda, you enter into a direct contract with the venue. 
              Playda acts as an intermediary to facilitate the booking.
            </p>

            <h3>4.2 Payment</h3>
            <p>
              All payments are processed securely through Stripe. By making a booking, you authorize 
              us to charge your selected payment method for the total booking amount.
            </p>

            <h3>4.3 Pricing</h3>
            <p>
              Prices are set by individual venues and may vary. Discounts for multiple consecutive 
              bookings are automatically applied at checkout.
            </p>
          </section>

          <section>
            <h2>5. Cancellations and Refunds</h2>
            <h3>5.1 Cancellation Policy</h3>
            <p>
              Cancellation policies vary by venue. Please review the specific venue's cancellation 
              policy before making a booking.
            </p>

            <h3>5.2 Refunds</h3>
            <p>
              Refunds are processed according to the venue's cancellation policy. Refunds typically 
              take 5-10 business days to appear in your account.
            </p>
          </section>

          <section>
            <h2>6. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the service for any illegal purpose</li>
              <li>Make fraudulent bookings</li>
              <li>Interfere with the proper functioning of the service</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Harass or harm other users or venue staff</li>
              <li>Provide false or misleading information</li>
            </ul>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Playda app are owned by SNKL Enterprises LLC-FZ 
              and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2>8. Limitation of Liability</h2>
            <p>
              Playda acts as an intermediary between users and venues. We are not responsible for:
            </p>
            <ul>
              <li>The quality of services provided by venues</li>
              <li>Injuries or accidents that occur at venues</li>
              <li>Disputes between users and venues</li>
              <li>Venue closures or unavailability</li>
            </ul>
          </section>

          <section>
            <h2>9. Disclaimer of Warranties</h2>
            <p>
              The service is provided "as is" without warranties of any kind. We do not guarantee that 
              the service will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section>
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Playda and SNKL Enterprises LLC-FZ from any claims, 
              damages, or expenses arising from your use of the service or violation of these terms.
            </p>
          </section>

          <section>
            <h2>11. Modifications to Service</h2>
            <p>
              We reserve the right to modify or discontinue the service at any time without notice. 
              We are not liable for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section>
            <h2>12. Governing Law</h2>
            <p>
              These terms are governed by the laws of the United Arab Emirates. Any disputes shall be 
              resolved in the courts of Dubai, UAE.
            </p>
          </section>

          <section>
            <h2>13. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the service after changes 
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2>14. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <p>
              <strong>Email:</strong> playda.support@snkltech.com<br />
              <strong>Company:</strong> SNKL Enterprises LLC-FZ<br />
              <strong>Location:</strong> Dubai, United Arab Emirates
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
