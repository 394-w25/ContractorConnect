import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('App Component Tests', () => {
    
  test("ContractorConnect Landing Page", () => {
    render(<App />);
    expect(screen.getByText('Sign In')).toBeDefined();
  });

});