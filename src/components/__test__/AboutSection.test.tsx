import '@testing-library/jest-dom'; 
import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';
import { YEAR_WEB_DEV } from '../constants';

describe('AboutSection Component', () => {
  test('renders the correct text content', () => {
    render(<AboutSection />);

    // Check if the paragraph contains the expected text with YEAR_WEB_DEV.
    const textElement = screen.getByText(
      new RegExp(`over ${YEAR_WEB_DEV} years of expertise in full-stack development`, 'i')
    );
    expect(textElement).toBeInTheDocument();
  });

  test('renders the image with the correct alt text', () => {
    render(<AboutSection />);

    // Check if the image is present with the correct alt text.
    const imageElement = screen.getByAltText('Julia Le');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', expect.stringContaining('jl.jpg'));
  });

  test('has the correct classes and structure', () => {
    const { container } = render(<AboutSection />);

    // Check if the main div has the required Tailwind classes
    const mainDiv = container.querySelector('.container');
    expect(mainDiv).toHaveClass('mx-auto', 'flex', 'h-84', 'md:mb-20');

    // Check if the image wrapper has the correct classes
    const imageWrapper = container.querySelector('.relative.w-60.h-60.m-4');
    expect(imageWrapper).toBeInTheDocument();

    // Check if the inner div has the rounded-full and object-cover classes
    const imgElement = container.querySelector('img');
    expect(imgElement).toHaveClass('rounded-full', 'object-cover', 'shadow-lg');
  });
});
