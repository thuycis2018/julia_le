import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import GitHubSection from '../GitHubSection';

// Mock GitHubSearch component
vi.mock('../GitHubSearch', () => ({
  default: vi.fn(() => <div>Mocked GitHub Search</div>),
}));

describe('GitHubSection', () => {
  it('renders the input and search button', () => {
    render(<GitHubSection />);
    
    expect(screen.getByPlaceholderText('Search GitHub repositories...')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('updates query state when typing in the input', () => {
    render(<GitHubSection />);
    
    const input = screen.getByPlaceholderText('Search GitHub repositories...');
    fireEvent.change(input, { target: { value: 'React' } });
    
    expect((input as HTMLInputElement).value).toBe('React');
  });

  it('triggers search when button is clicked', () => {
    render(<GitHubSection />);
    
    const input = screen.getByPlaceholderText('Search GitHub repositories...');
    fireEvent.change(input, { target: { value: 'React' } });
    
    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);
    
    // Assert that the mocked GitHubSearch component is rendered
    expect(screen.getByText('Mocked GitHub Search')).toBeInTheDocument();
  });

  it('triggers search when Enter key is pressed', () => {
    render(<GitHubSection />);
    
    const input = screen.getByPlaceholderText('Search GitHub repositories...');
    fireEvent.change(input, { target: { value: 'React' } });
    
    fireEvent.keyUp(input, { key: 'Enter' });
    
    // Assert that the mocked GitHubSearch component is rendered
    expect(screen.getByText('Mocked GitHub Search')).toBeInTheDocument();
  });
});
