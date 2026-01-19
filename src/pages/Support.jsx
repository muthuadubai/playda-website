import { FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import './Support.css';

const Support = () => {
  const faqs = [
    {
      question: 'How do I book a padel court?',
      answer: 'Download the Playda app, browse available venues, select your preferred date and time, and complete the booking with secure payment.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We currently accept Cash and Card payments. All card payments are processed securely through Stripe. Apple Pay and Google Pay will be introduced in upcoming releases.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel bookings from your booking history in the app. Cancellation policies vary by venue, so please check the specific venue\'s policy before booking.'
    },
    {
      question: 'How do I get automatic discounts?',
      answer: 'When you book multiple consecutive time slots, discounts are automatically applied at checkout. The more slots you book, the more you save!'
    },
    {
      question: 'Do I need to create an account?',
      answer: 'You can browse venues without an account, but you\'ll need to sign up with your phone number to make a booking.'
    },
    {
      question: 'How do I save my payment card?',
      answer: 'During checkout, simply check the "Save this card for future payments" option. Your card will be securely saved for faster future bookings.'
    },
    {
      question: 'How do I delete my account?',
      answer: 'To delete your account: 1) Open the Playda app and go to the Profile tab, 2) Tap on "Delete Account" at the bottom of the page, 3) Confirm your decision. This action cannot be undone. What will be deleted: Personal info (name, email, phone), Login credentials (MPIN, device info). What will be kept: Anonymized booking and payment records (for legal compliance).'
    },
    {
      question: 'What if I have issues with my booking?',
      answer: 'Contact us at playda.support@snkltech.com and we\'ll help resolve any issues within 24 hours.'
    },
    {
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
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
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
