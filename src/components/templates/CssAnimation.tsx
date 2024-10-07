import React from 'react';
import './CssAnimation.css';

const CssAnimation: React.FC = () => {
  return (
    <>
      <main className="lp-main">
          <section className="lp-section">
              <h1 className="lp-h1">
                  <span className="lp-span">Design</span>
                  <span className="lp-span">&</span>
                  <span className="lp-span">Price</span>
              </h1>
              <p className="lp-p">Create Your Unique Furniture</p>
              <button className="lp-button">Design Now</button>
          </section>
      </main>
    </>
  );
};

export default CssAnimation;