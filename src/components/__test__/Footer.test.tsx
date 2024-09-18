import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for toBeInTheDocument matcher
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders the footer with the current year and copyright text', () => {
    // Render the Footer component
    render(<Footer />);

    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    // Check if the footer text is displayed with the current year
    const footerText = `© ${currentYear} Julia Le. All rights reserved.`;
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });
});
