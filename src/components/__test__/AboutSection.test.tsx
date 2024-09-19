import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';
import { YEAR_WEB_DEV } from '../constants';

describe('AboutSection', () => {
  it('renders the About Me heading', () => {
    render(<AboutSection />);
    
    // Check if the heading "About Me" is rendered
    const headingElement = screen.getByText(/About Me/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the article with correct content', () => {
    render(<AboutSection />);
    
    // Check if the paragraph contains the expected text and year from constants
    const paragraphElement = screen.getByText(
      new RegExp(`over ${YEAR_WEB_DEV} years of expertise in full-stack development`, 'i')
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it('applies correct class names to the elements', () => {
    render(<AboutSection />);
    
    // Check if the h1 element has the correct classes
    const headingElement = screen.getByText(/About Me/i);
    expect(headingElement).toHaveClass('text-brown-1 text-4xl ml-4 col-span-1 flex justify-center items-center');
    
    // Check if the article element has the correct classes
    const articleElement = screen.getByRole('article');
    expect(articleElement).toHaveClass('my-8 mx-auto max-w-[1000px] col-span-1 md:col-span-3');
  });
});
