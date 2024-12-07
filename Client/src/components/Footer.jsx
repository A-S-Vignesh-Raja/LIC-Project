import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const footerData = [
    {
      title: "Things you must know",
      items: [
        "Anti-Bribery And Anti-Corruption Policy",
        "Anti Fraud Policy",
        "Bhima Bharosa",
        "Careers",
        "Citizens Charter",
        "Old Scheme Benefits",
      ],
    },
    {
      title: "Why Life Insurance",
      items: [
        "Employees Corner",
        "Enquiry of Outstanding Claims",
        "Equal Opportunity Policy",
        "FAQ",
        "Feedback",
        "Glossary",
      ],
    },
    {
      title: "Why Invest",
      items: [
        "Hyperlink Policy",
        "International Operations",
        "Associates",
        "Investee-AMBIT",
        "New Centre",
        "Education",
      ],
    },
  ];

  return (
    <footer className="footer">
      {footerData.map((column, index) => (
        <div className="column" key={index}>
          <h3>{column.title}</h3>
          <ul>
            {column.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="disclaimer">© LIC Agency</div>
    </footer>
  );
};

export default Footer;
