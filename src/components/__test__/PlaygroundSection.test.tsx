import { render, screen } from '@testing-library/react';
import PlaygroundSection from '../PlaygroundSection';
import { describe, it, expect } from 'vitest';

describe('PlayGroundSection component', () => {
  it('renders the PlayGroundSection with links and icons', () => {
    render(<PlaygroundSection />);

    // Check if the links are rendered with correct text and href
    const firstLink = screen.getByText('https://j-le.pages.dev/');
    expect(firstLink).toBeInTheDocument();
    expect(firstLink).toHaveAttribute('href', 'https://j-le.pages.dev/');

    const secondLink = screen.getByText('https://julia-le.vercel.app/');
    expect(secondLink).toBeInTheDocument();
    expect(secondLink).toHaveAttribute('href', 'https://julia-le.vercel.app/');

    // Check if FontAwesome icons are rendered
    const icons = screen.getAllByRole('img', { hidden: true }); // FontAwesome renders icons with role="img" and aria-hidden="true"
    expect(icons).toHaveLength(2);
  });
});
