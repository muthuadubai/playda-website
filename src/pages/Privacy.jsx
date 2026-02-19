import './Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: January 1, 2026</p>
        </div>
      </div>

      <div className="legal-content">
        <div className="container">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Playda. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you use our 
              mobile application and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We collect the following personal information:</p>
            <ul>
              <li>Name and contact information (phone number, email)</li>
              <li>Profile information (profile picture, preferences)</li>
              <li>Payment information (processed securely through Stripe, and Apple Pay/Google Pay when available)</li>
              <li>Booking history and preferences</li>
              <li>Matchmaking information (matches you create/join, invitations, and match history)</li>
            </ul>

            <h3>2.2 Location Data</h3>
            <p>
              With your permission, we collect location data to help you find nearby padel courts. 
              You can disable location services at any time through your device settings.
            </p>

            <h3>2.3 Usage Data</h3>
            <p>
              We automatically collect information about how you use our app, including pages viewed, 
              features used, and time spent on the app.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Process your bookings and payments</li>
              <li>Enable matchmaking features such as creating matches, inviting players, and managing participation</li>
              <li>Send booking confirmations and reminders</li>
              <li>Send important updates related to your bookings and matches (for example, invitations and status updates)</li>
              <li>Provide customer support</li>
              <li>Improve our services and user experience</li>
              <li>Send you promotional offers (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Sharing</h2>
            <p>We share your data with:</p>
            <ul>
              <li><strong>Venue Partners:</strong> To process your bookings</li>
              <li><strong>Payment Processors:</strong> Stripe for secure payment processing (and wallet payments when available)</li>
              <li><strong>Notification Providers:</strong> To deliver app notifications (e.g., booking and match updates)</li>
              <li><strong>Service Providers:</strong> For hosting, analytics, and customer support</li>
              <li><strong>Legal Authorities:</strong> When required by law</li>
            </ul>
            <p>We never sell your personal data to third parties.</p>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal data from unauthorized 
              access, alteration, disclosure, or destruction. All payment information is encrypted and 
              processed through Stripe's secure payment gateway.
            </p>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              You can delete your account directly in the app (Profile → Delete Account). Account deletion is permanent.
            </p>
          </section>

          <section>
            <h2>7. Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to provide our services and comply 
              with legal obligations. Certain booking and payment records may be retained for up to 7 years for accounting purposes.
              We may also retain certain match records in anonymized form when required for fraud prevention, dispute resolution, or match history integrity.
            </p>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal 
              information from children under 13.
            </p>
          </section>

          <section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <p>
              <strong>Email:</strong> playda.support@snkltech.com<br />
              <strong>Company:</strong> SNKL Enterprises LLC-FZ
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
