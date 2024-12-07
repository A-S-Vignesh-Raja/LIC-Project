import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const features = [
    { title: "Life Insurance", description: "Lorem ipsum dolor sit amet.", dimensions: "200x150" },
    { title: "Recognition & Rewards", description: "Lorem ipsum dolor sit amet.", dimensions: "200x150" },
    { title: "Housing Loan", description: "Lorem ipsum dolor sit amet.", dimensions: "200x150" },
    { title: "Interest Free Car Adv", description: "Lorem ipsum dolor sit amet.", dimensions: "200x150" },
    { title: "Flexible working hours", description: "Lorem ipsum dolor sit amet.", dimensions: "200x150" },
    { title: "High earning opportunities", description: "Lorem ipsum dolor sit amet.", dimensions: "200x150" },
    { title: "Independent business", description: "Lorem ipsum dolor sit amet.", dimensions: "200x150" },
    { title: "Work from home", description: "Lorem ipsum dolor sit amet.", dimensions: "200x150" },
  ];

  return (
    <div className="content">
      {features.map((feature, index) => (
        <div className="card" key={index}>
          <div className="placeholder">{feature.dimensions}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
