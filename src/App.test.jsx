import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import LandingPage from './pages/LandingPage';

describe('counter tests', () => {
    
  test("ContractorConnect Landing Page", () => {
    render(<LandingPage />);
    expect(screen.getByText('Sign In')).toBeDefined();
  });

});