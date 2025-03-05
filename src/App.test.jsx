import {describe, expect, test} from 'vitest';
import { it, vi } from 'vitest';

import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import { useAuthState } from './utilities/firebase';


vi.mock('./utilities/firebase');
vi.mock('./components/chatbot/ActionProvider', () => ({
  default: () => null,
})); 


describe('App Component Tests', () => {
    
  test("shows sign button for not logged in user", () => {
    useAuthState.mockReturnValue([null, false]);
    render(<App />);
    expect(screen.getByText('Sign In')).toBeDefined();
  });

  test('shows requests on the side bar for a logged in user', () => {
    const fakeUser = { displayName: 'fakeName', email: 'fakeEmail' };
    useAuthState.mockReturnValue([fakeUser, false]);
    render(<App />);
    expect(screen.getByText('Requests')).toBeDefined();
  });

});