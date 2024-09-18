import { render, screen } from '@testing-library/react';
import SkillSection from '../SkillSection';
import { describe, it, expect } from 'vitest';

describe('SkillSection component', () => {
  it('renders SkillSection with correct content and icons', () => {
    render(<SkillSection />);

    // Check the content of each skill card
    expect(screen.getByText('Web Project Managment')).toBeInTheDocument();
    
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    
    expect(screen.getByText('System Integrations')).toBeInTheDocument();
   
    const icons = screen.getAllByRole('img', { hidden: true }); // FontAwesome renders icons with role="img" and aria-hidden="true"
    expect(icons).toHaveLength(3); // There are 3 icons in the SkillSection component
  });
});
