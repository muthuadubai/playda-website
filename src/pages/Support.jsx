import { FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import './Support.css';

const Support = () => {
  const faqs = [
    {
      id: 'book-court',
      question: 'How do I book a padel court?',
      answer: 'Download the Playda app, browse available venues, select your preferred date and time, and complete the booking with secure payment.'
    },
    {
      id: 'payment-methods',
      question: 'What payment methods do you accept?',
      answer: 'We support secure card payments (processed via Stripe). Apple Pay and Google Pay may be available depending on your device and region. Some venues may also support cash payments.'
    },
    {
      id: 'cancel-booking',
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel bookings from your booking history in the app. Cancellation policies vary by venue, so please check the specific venue\'s policy before booking.'
    },
    {
      id: 'automatic-discounts',
      question: 'How do I get automatic discounts?',
      answer: 'When you book multiple consecutive time slots, discounts are automatically applied at checkout. The more slots you book, the more you save!'
    },
    {
      id: 'create-account',
      question: 'Do I need to create an account?',
      answer: 'You can browse venues without an account, but you\'ll need to sign up with your phone number to make a booking.'
    },
    {
      id: 'save-card',
      question: 'How do I save my payment card?',
      answer: 'During checkout, simply check the "Save this card for future payments" option. Your card will be securely saved for faster future bookings.'
    },
    {
      id: 'find-players',
      question: 'How do I find players or join a match?',
      answer: 'Open the Matchmaking section in the app to create a match, invite players, or join available public matches (when enabled). You can manage your invitations and match participation directly from the app.'
    },
    {
      id: 'match-invitations',
      question: 'How do match invitations work?',
      answer: 'When you invite a player to a match, they can accept or decline from their notifications/invitations. If a match is public and open join is enabled, eligible players may be able to request to join.'
    },
    {
      id: 'delete-account',
      question: 'How do I delete my account?',
      answer: 'To delete your account: 1) Open the Playda app and go to the Profile tab, 2) Tap on "Delete Account" at the bottom of the page, 3) Confirm your decision. This action cannot be undone. Your personal profile and login credentials will be removed/anonymized. Certain records may be retained in anonymized form (for example, bookings, payments, and match records) for legal/accounting, fraud prevention, dispute resolution, and match history integrity purposes.'
    },
    {
      id: 'retained-data',
      question: 'What data will be retained after account deletion?',
      answer: 'We aim to remove or anonymize personal profile data where possible. We may retain certain records in anonymized form (such as booking/payment records and match history) when required for legal, tax, accounting, fraud prevention, or dispute resolution purposes.'
    },
    {
      id: 'booking-issues',
      question: 'What if I have issues with my booking?',
      answer: 'Contact us at playda.support@snkltech.com and we\'ll help resolve any issues within 24 hours.'
    },
    {
      id: 'venue-owner',
      question: 'Are you a venue owner?',
      answer: 'If you own a padel venue and want to join Playda, please visit our Owner Portal or contact us for partnership opportunities.'
    }
  ];

  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="container">
          <h1>How Can We Help?</h1>
          <p>Find answers to common questions or get in touch with our support team</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h2>Contact Support</h2>
            <p>Our support team is here to help you</p>
            <a href="mailto:playda.support@snkltech.com" className="btn btn-primary">
              <FaEnvelope /> Email Us
            </a>
            <p className="response-time">We typically respond within 24 hours</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <FaQuestionCircle />
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} id={faq.id} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
