import { motion } from 'framer-motion';
import { FaApple, FaCalendarCheck, FaTag, FaShieldAlt, FaBolt, FaUserTie, FaChartLine, FaMobile } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <FaCalendarCheck />,
      title: 'Easy Booking',
      description: 'Browse and book courts in seconds with real-time availability'
    },
    {
      icon: <FaTag />,
      title: 'Exclusive Offers',
      description: 'Access special deals and automatic discounts on multiple slots'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Payments',
      description: 'Pay safely with card, Apple Pay, or Google Pay via Stripe'
    },
    {
      icon: <FaBolt />,
      title: 'Instant Confirmation',
      description: 'Get immediate booking confirmation and WhatsApp reminders'
    }
  ];

  const ownerBenefits = [
    {
      icon: <FaChartLine />,
      title: 'Increase Revenue',
      description: 'Reach more players and maximize court utilization'
    },
    {
      icon: <FaMobile />,
      title: 'Easy Management',
      description: 'Manage bookings, pricing, and availability from anywhere'
    },
    {
      icon: <FaBolt />,
      title: 'Instant Payments',
      description: 'Receive payments directly with automated reconciliation'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Book Your Padel Court in Seconds</h1>
            <p className="hero-subtitle">
              Discover and book the best padel courts in the UAE. Easy booking, exclusive offers, and instant confirmation.
            </p>
            <div className="hero-buttons">
              <a href="#" className="btn btn-primary">
                <FaApple /> Download on App Store
              </a>
              <a href="#features" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="phone-mockup">
              <div className="phone-screen">
                {/* Replace 'app-screenshot.png' with your actual screenshot filename */}
                <img 
                  src="/src/assets/images/app-screenshot.png" 
                  alt="Playda App Screenshot" 
                  className="app-screenshot"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="screenshot-placeholder" style={{ display: 'none' }}>
                  <FaMobile size={80} />
                  <p>App Screenshot</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose Playda?</h2>
          <p className="section-subtitle">Everything you need for the perfect padel experience</p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Venue Owners Section */}
      <section className="owners-section">
        <div className="container">
          <div className="owners-content">
            <motion.div 
              className="owners-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-badge">
                <FaUserTie /> For Venue Owners
              </div>
              <h2>Grow Your Padel Business</h2>
              <p>
                Join Playda and connect with thousands of players. Our platform helps you manage bookings, 
                increase revenue, and provide a seamless experience for your customers.
              </p>
              
              <div className="owner-benefits">
                {ownerBenefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <div>
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://manager.playda.snkltech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <FaUserTie /> Access Owner Portal
              </a>
            </motion.div>
            
            <motion.div 
              className="owners-image"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="dashboard-mockup">
                <img 
                  src="/src/assets/images/owner-dashboard.png" 
                  alt="Playda Owner Dashboard - Payments" 
                  className="dashboard-screenshot"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="dashboard-placeholder" style={{ display: 'none' }}>
                  <div className="mockup-header">
                    <div className="mockup-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p>Owner Dashboard</p>
                  </div>
                  <div className="mockup-content">
                    <FaChartLine size={60} />
                    <p>Manage your venue with ease</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Play?</h2>
            <p>Download Playda now and book your next padel session in seconds</p>
            <a href="#" className="btn btn-primary btn-large">
              <FaApple /> Download on App Store
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
