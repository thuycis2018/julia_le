import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CaseStudy from '../CaseStudy';

describe('CaseStudy Component', () => {
  it('renders the case study page with the correct headers and sections', () => {
    render(<CaseStudy />);
    
    // Check the main header is present
    expect(screen.getByRole('heading', { name: /Agile Adoption Case Study/i })).toBeInTheDocument();

    // Check the subheader is present
    expect(screen.getByText(/How I Successfully Transitioned a Web Development Team to Agile/i)).toBeInTheDocument();

    // Check for each section header
    expect(screen.getByRole('heading', { name: /Background/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Challenges/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Solution: Agile Adoption/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Results/i })).toBeInTheDocument();
    
    // Check if the FontAwesome icons are rendered
    expect(screen.getByText(/Phase 1 - Training and Alignment:/i)).toBeInTheDocument();
    expect(screen.getByText(/Phase 2 - Implementing Agile Processes:/i)).toBeInTheDocument();
    expect(screen.getByText(/Phase 3 - Continuous Improvement:/i)).toBeInTheDocument();
    
    // Check for results section items
    expect(screen.getByText(/Streamlined Prioritization Process/i)).toBeInTheDocument();
    expect(screen.getByText(/Increased Cross-Department Collaboration/i)).toBeInTheDocument();
    expect(screen.getByText(/Faster Delivery and Reduced Overload/i)).toBeInTheDocument();
    expect(screen.getByText(/Improved Stakeholder Satisfaction/i)).toBeInTheDocument();
    expect(screen.getByText(/Increased Focus on High-Impact Features/i)).toBeInTheDocument();
  });
});
