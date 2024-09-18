import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect} from 'vitest';
import Header from '../Header';

describe('Header component', () => {
  it('renders the navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check if all navigation links are rendered
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/case study/i)).toBeInTheDocument();
    expect(screen.getByText(/testimonials/i)).toBeInTheDocument();
    expect(screen.getByText(/playground/i)).toBeInTheDocument();
  });

  it('toggles the mobile menu', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check if the mobile menu button is rendered
    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();

    // Ensure the menu is initially hidden
    const menu = screen.getByText(/home/i).parentElement;
    expect(menu).toHaveClass('hidden');

    // Simulate a click on the menu button
    fireEvent.click(menuButton);

    // Check if the menu is now visible
    expect(menu).not.toHaveClass('hidden');

    // Simulate another click to close the menu
    fireEvent.click(menuButton);

    // Ensure the menu is hidden again
    expect(menu).toHaveClass('hidden');
  });

  it('applies the active class to active NavLink elements', () => {
    render(
      <MemoryRouter initialEntries={['/case-studies']}>
        <Header />
      </MemoryRouter>
    );

    // Check if the Case Study link has the active styling (bold)
    expect(screen.getByText(/case study/i)).toHaveClass('font-bold');
  });
});
