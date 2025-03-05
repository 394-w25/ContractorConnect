import {describe, expect, test} from 'vitest';
import { it, vi } from 'vitest';

import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from './utilities/firebase';
import { useAuthState } from './utilities/firebase';


vi.mock('../utilities/firebase');


describe('App Component Tests', () => {
    
  test("ContractorConnect Landing Page", () => {
    render(<App />);
    expect(screen.getByText('Sign In')).toBeDefined();
  });

  test('shows Sign Out if logged in', () => {
    const fakeUser = { displayName: 'fakeName', email: 'fakeEmail' };
    useAuthState.mockReturnValue([fakeUser]);
    render(<App />);
    expect(screen.getByText(/Homie Paint Project Assistant/i)).toBeInTheDocument();
  });

});