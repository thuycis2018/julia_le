import React from 'react';
import './CssAnimation.css';

const CssAnimation: React.FC = () => {
  return (
    <>
      <main>
          <section>
              <h1>
                  <span>Design</span>
                  <span>&</span>
                  <span>Price</span>
              </h1>
              <p>Create Your Unique Furniture</p>
              <button className="design">Design Now</button>
          </section>
      </main>
    </>
  );
};

export default CssAnimation;